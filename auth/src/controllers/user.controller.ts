import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation.error';
import { findUser, saveUser } from '../models/users/user.model';
import { BadRequestError } from '../errors/bad-request.error';
import { Password } from '../services/password';

export async function httpSignup(req: Request, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  //   Check if user exists
  const { email, password } = req.body;
  const existingUser = await findUser(email);
  if (existingUser) {
    throw new BadRequestError('Email in use');
  }

  //   Hash password
  const hashedPassword = await Password.toHash(password);

  //   Save user
  await saveUser(email, hashedPassword);
  return res.status(201).json({ email, hashedPassword });

  //   Return a cookie
}

export function httpSignin(req: Request, res: Response) {
  return res.send('Signout');
}

export function httpSignout(req: Request, res: Response) {
  return res.send('Signout');
}
