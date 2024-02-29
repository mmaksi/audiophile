import { CustomError } from './custom-error';

export class ErrorNotFound extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found');
    Object.setPrototypeOf(this, ErrorNotFound.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}
