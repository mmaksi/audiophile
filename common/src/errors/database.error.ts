import { CustomError } from './custom-error';

export class DatabaseValidationError extends CustomError {
  reason = 'Error connecting to the database';
  statusCode = 500;

  constructor() {
    super('Error connecting to the database');
    Object.setPrototypeOf(this, DatabaseValidationError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
