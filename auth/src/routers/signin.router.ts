import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const signinRouter = express.Router();

signinRouter.get(
  '/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must provide a password'),
  ],
  (req: Request, res: Response) => {
    res.send('Signin');
  }
);

export default signinRouter;
