import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

export function errorsHandler(
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
  console.log(error);
  return res.status(400).json(error);
}
