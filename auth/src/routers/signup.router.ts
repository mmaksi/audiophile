import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requestValidator } from '../middleware/request-validator.middleware';
import { httpSignup } from '../controllers/user.controller';

const signupRouter = express.Router();

signupRouter.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .isLength({ min: 4, max: 20 })
      .withMessage('Your password must be between 4 and 20 characters long'),
  ],
  requestValidator,
  httpSignup
);

export default signupRouter;
