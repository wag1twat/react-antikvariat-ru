import { useState, useCallback, useEffect } from "react";
import { AxiosRequestConfig } from "axios";

import { handleErrorRequest, handleSuccessRequest } from "./handlers";
import { instance } from "./axios";
import {
  ApiOptions,
  RemoveResult,
  AxiosBaseSuccessRequestFields,
} from "./types";

/* R - тип возвращаемого поля result */
export const useRemove = <R = {}>(
  path: string,
  options: Partial<ApiOptions>
  //  axiosRequestConfig?: AxiosRequestConfig,
): RemoveResult<(R & AxiosBaseSuccessRequestFields) | null> => {
  /* state */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const [headers, setHeaders] = useState<any>(null);
  /* params */

  const {
    onSuccess,
    onError,
    apiVersion,
    queries = "",
    resetOnSuccess,
    resetOnError,
  } = options;
  /* handlers */
  const reset = useCallback(() => {
    setIsLoading(false);
    setError(null);
    setResult(null);
    setHeaders(null);
  }, []);

  const handleError = useCallback(
    (newError) => {
      const { data, error: err } = handleErrorRequest(newError);
      setResult(data);
      setError(err);
    },
    [setError]
  );

  const handleResponse = useCallback(
    (response) => {
      const {
        data,
        error: newError,
        headers: newHeaders,
      } = handleSuccessRequest(response);
      setResult(data);
      setHeaders(newHeaders);
      setError(newError);
    },
    [setError, setResult]
  );
  /* effects */
  useEffect(() => {
    if (onError && error) {
      onError(error);
    }
    if (onSuccess && result) {
      onSuccess(result);
    }
  }, [error, result, onError, onSuccess]);
  useEffect(() => {
    if (resetOnSuccess && result) {
      reset();
    }
    if (resetOnError && error) {
      reset();
    }
  }, [resetOnSuccess, resetOnError, result, error, reset]);

  /* call */
  const remove = useCallback(
    async (payload = {}) => {
      setIsLoading(true);

      setError(null);

      try {
        const response = await instance.delete(path, { params: payload });
        handleResponse(response);
        return response.data;
      } catch (caughtError) {
        handleError(caughtError);
        return caughtError;
      } finally {
        setIsLoading(false);
      }
    },
    [
      queries,
      apiVersion,
      path,
      // axiosRequestConfig,
      handleResponse,
      handleError,
    ]
  );
  /* result */
  return {
    remove,
    reset,
    result,
    headers,
    error,
    isLoading,
  };
};
