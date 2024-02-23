import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requestValidator } from '../middleware/request-validator.middleware';
import { httpSignin } from '../controllers/user.controller';

const signinRouter = express.Router();

signinRouter.post(
  '/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must provide a password'),
  ],
  requestValidator,
  httpSignin
);

export default signinRouter;
