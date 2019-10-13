export abstract class HTTPError extends Error {
    public readonly statusCode!: number;
    public readonly name!: string;
    public readonly reason!: string;
    constructor(reason: string, message: object | string) {
      if (message instanceof Object) {
        super(JSON.stringify(message));
      } else {
        super(message);
      }
      this.name = this.constructor.name;
      this.reason = reason;
      Error.captureStackTrace(this, this.constructor);
    }
  }
