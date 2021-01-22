import { AxiosError, AxiosRequestConfig } from "axios";

export interface AxiosBaseSuccessRequestFields {
  status: "success" | "failed";
  operation: "getgoods";
}

export interface RemoveResult<R> extends ApiResult<R> {
  remove: (payload?: AxiosRequestConfig) => Promise<void>;
}

export interface PutResult<R> extends ApiResult<R> {
  put: (payload?: AxiosRequestConfig) => Promise<void>;
}

export interface PostResult<R> extends ApiResult<R> {
  post: (payload?: any, config?: AxiosRequestConfig) => Promise<void>;
}

export interface GetResult<R> extends ApiResult<R> {
  get: (payload?: any) => Promise<R>;
}

export interface DownloadResult {
  download: (payload?: any) => void;
  reset: () => void;
  error: any;
  isLoading: boolean;
}

/* api hooks */
export interface ApiOptions {
  apiVersion: number;
  onSuccess(result: any): void;
  onError(error: any): void;
  queries: string;
  resetOnSuccess: boolean;
  resetOnError: boolean;
}
export interface ApiResult<R> {
  reset: () => void;
  result: R;
  headers: any;
  error: any;
  isLoading: boolean;
}
// api hook
export interface IGetUrlParams {
  (payload: { [key: string]: string | number }): string;
}
export interface IDefaultOptions {
  apiVersion: number;
}
export interface IUseRequestOptions<R> extends IDefaultOptions {
  onSuccess(result: R | null): void;
  onError(error: AxiosError): void;
  queries: string;
  resetOnSuccess: boolean;
  resetOnError: boolean;
}

// polling hook
export interface IUsePolling {
  (params: {
    isActive: boolean;
    request: (payload: any) => void;
    payload: any;
    interval?: number;
  }): void;
}
