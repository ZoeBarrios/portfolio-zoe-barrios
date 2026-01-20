export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: unknown): Promise<T>;
  abstract post<T>(url: string, body?: unknown, options?: unknown): Promise<T>;
  abstract put<T>(url: string, body?: unknown, options?: unknown): Promise<T>;
  abstract delete<T>(
    url: string,
    body?: unknown,
    options?: unknown
  ): Promise<T>;
}
