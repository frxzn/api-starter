class HttpError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public devMessage?: unknown,
  ) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
  }

  serializeError() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      devMessage: process.env.NODE_ENV !== 'PRD' ? this.devMessage : null,
    };
  }
}

export default HttpError;
