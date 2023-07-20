export default interface StatusCode {
  success: number;
  duplicate: number;
  notFound: number;
  error: number;
  unAuthorized: number;
  forbidden: number;
  invalid: number;
}

export interface Error {
  errno: number;
  code: string;
  sqlState: string;
  name: string;
}
