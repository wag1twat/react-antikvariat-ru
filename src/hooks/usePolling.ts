import { useEffect } from 'react'

interface IUsePolling {
  (
    isActive: boolean,
    request: (payload: any) => void,
    payload: any,
    interval?: number,
  ): void
}

export const usePolling: IUsePolling = (
  isActive,
  request,
  payload,
  interval = 500,
) => {
  useEffect(() => {
    let statusPolling: NodeJS.Timeout
    if (isActive) {
      request(payload)
      statusPolling = setInterval(() => {
        request(payload)
      }, interval)
    }
    return () => {
      clearInterval(statusPolling)
    }
  }, [isActive, request, payload, interval])
}
