import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation.error';
import { findUser, saveUser } from '../models/users/user.model';
import { BadRequestError } from '../errors/bad-request.error';
import { Password } from '../services/password';
import jwt from 'jsonwebtoken';

export async function httpSignup(req: Request, res: Response) {
  //   Check if user exists
  const { email, password } = req.body;
  const existingUser = await findUser(email);
  if (existingUser) {
    throw new BadRequestError('Email in use');
  }

  //   Hash password
  const hashedPassword = await Password.toHash(password);

  //   Save user
  const user = await saveUser(email, hashedPassword);

  //   Generate a JWT
  const userJwt = jwt.sign({ id: user.id, email }, process.env.JWT_KEY!);

  //   Return a cookie
  req.session = {
    jwt: userJwt,
  };
  return res.status(201).json(user);
}

export async function httpSignin(req: Request, res: Response) {
  //   Check if user exists
  const { email, password } = req.body;
  const existingUser = await findUser(email);
  if (!existingUser) {
    throw new BadRequestError('Invalid credentials');
  }

  const passwordMatch = await Password.compare(existingUser.password, password);
  if (!passwordMatch) {
    throw new BadRequestError('Invalid credentials');
  } else {
    //   Generate a JWT
    const userJwt = jwt.sign(
      { id: existingUser.id, email: existingUser.email },
      process.env.JWT_KEY!
    );
    //   Return a cookie
    req.session = {
      jwt: userJwt,
    };
    return res.status(200).json(existingUser);
  }
}

export function httpSignout(req: Request, res: Response) {
  return res.send('Signout');
}
