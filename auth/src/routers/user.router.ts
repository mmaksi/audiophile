import express from 'express';
import {
  httpGetCurrentUser,
  httpSignin,
  httpSignout,
  httpSignup,
} from '../controllers/user.controller';
import { currentUser } from '@maksimark/audiophile-common';
import { requireAuth } from '@maksimark/audiophile-common';
import { body } from 'express-validator';
import { requestValidator } from '@maksimark/audiophile-common';

const userRouter = express.Router();

userRouter.get('/current-user', currentUser, httpGetCurrentUser);
userRouter.post(
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
userRouter.post(
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
userRouter.post('/signout', httpSignout);

export default userRouter;
