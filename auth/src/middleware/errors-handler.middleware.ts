import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

function errorsHandler(
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .json({ errors: error.serializeErrors() });
  }
  return res
    .status(400)
    .json({ errors: [{ message: 'Something went wrong' }] });
}

export default errorsHandler;
