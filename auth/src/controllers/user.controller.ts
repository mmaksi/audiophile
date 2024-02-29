import { Request, Response } from 'express';
import { findUser, saveUser } from '../models/users/user.model';
import { BadRequestError } from '@maksimark/audiophile-common';
import { Password } from '../services/password';
import jwt from 'jsonwebtoken';

export function httpGetCurrentUser(req: Request, res: Response) {
  return res.json({ currentUser: req.currentUser || null });
}

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
  req.session = null;
  return res.json({});
}
