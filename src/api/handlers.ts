export const handleErrorRequest = (error: any, headers?: any) => {
  if (error.response?.data?.error) {
    return { error: error.response.data.error, headers, data: null }
  }
  return { error, headers, data: null }
}
export const handleSuccessRequest = (response: any) => {
  const { data, headers, status } = response
  if (data.error) {
    return handleErrorRequest(data.error, headers)
  }
  return data
    ? { data, headers, error: null }
    : { data: status, headers, error: null }
}
