import express from 'express';
import {
  httpGetCurrentUser,
  httpSignin,
  httpSignout,
  httpSignup,
} from '../controllers/user.controller';
import { currentUser } from '../middleware/current-user.middleware';
import { requireAuth } from '../middleware/require-auth.middleware';
import { body } from 'express-validator';
import { requestValidator } from '../middleware/request-validator.middleware';

const userRouter = express.Router();

userRouter.get('/current-user', currentUser, requireAuth, httpGetCurrentUser);
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
