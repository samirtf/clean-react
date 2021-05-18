export enum HttpStatusCode {
  noContent = 204,
  unanthorized = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
