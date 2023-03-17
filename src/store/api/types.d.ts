type HTTPMethod = "get" | "post" | "put" | "delete";

interface RequestModel {
  path?: string
  headers?: { [key: string]: string | number }
  params?: { [key: string]: any }
}

export type Error = {
  code?: string
  message?: string
  data?: null
}

export type ResponseGenerator<K extends string, T> = {
  // eslint-disable-next-line no-unused-vars
  [key in K]: T[];
  limit: number,
  skip: number,
  total: number
}