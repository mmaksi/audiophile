import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const signupRouter = express.Router();

signupRouter.get(
  '/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .isLength({ min: 4, max: 20 })
      .withMessage('Your password must be between 4 and 20 characters long'),
  ],
  (req: Request, res: Response) => {
    res.send('This is the homepage :D');
  }
);

export default signupRouter;
