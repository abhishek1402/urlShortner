// tslint:disable:max-classes-per-file

import { HTTPError } from "./httpError";

export class HTTP400Error extends HTTPError {
    public readonly statusCode = 400;
    constructor(reason, message: string | object = "Bad Request") {
      super(reason, message);
    }
 }

export class HTTP401Error extends HTTPError {
  public readonly statusCode = 401;
  constructor(reason, message: string | object = "Unauthorized") {
    super(reason, message);
  }
}

export class HTTP404Error extends HTTPError {
    public readonly statusCode = 404;
    constructor(reason, message: string | object = "Not found") {
      super(reason, message);
    }
  }

export class HTTP409Error extends HTTPError {
  public readonly statusCode = 409;
  constructor(reason, message: string | object = "Duplicate Entry") {
    super(reason, message);
  }
}
