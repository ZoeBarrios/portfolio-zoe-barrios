export interface BackendErrorResponse {
  message: string | string[]
  statusCode: number
  timestamp: string
  error?: string
}

export class HttpError extends Error {
  public readonly statusCode: number
  public readonly backendMessage: string | string[]
  public readonly timestamp: string
  public readonly originalError: any

  constructor(
    message: string,
    statusCode: number,
    backendResponse?: BackendErrorResponse,
    originalError?: any
  ) {
    super(message)
    this.name = 'HttpError'
    this.statusCode = statusCode
    this.backendMessage = backendResponse?.message || message
    this.timestamp = backendResponse?.timestamp || new Date().toISOString()
    this.originalError = originalError
  }

  getUserMessage(): string {
    if (Array.isArray(this.backendMessage)) {
      return this.backendMessage.join(', ')
    }
    return this.backendMessage
  }

  getMessages(): string[] {
    if (Array.isArray(this.backendMessage)) {
      return this.backendMessage
    }
    return [this.backendMessage]
  }
}
