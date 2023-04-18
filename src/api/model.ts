export interface Params {
  [key: string]: any;
}

export const pathCreator = (endpoint: string, params?: Params) => {
  const trimEndpoint = endpoint.trim();

  if (!params) {
    return trimEndpoint;
  }

  const searchParams = new URLSearchParams(
    Object.entries(params).reduce((path, [key, value]) => {
      if (value) {
        path += `&${key}=${value}`;
      }

      return path;
    }, "")
  );

  return `${trimEndpoint}?${searchParams}`;
};
