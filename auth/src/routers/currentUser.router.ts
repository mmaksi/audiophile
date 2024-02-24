import express from 'express';
import { httpGetCurrentUser } from '../controllers/user.controller';
import { currentUser } from '../middleware/current-user.middleware';

const currentUserRouter = express.Router();

currentUserRouter.post('/current-user', currentUser, httpGetCurrentUser);

export default currentUserRouter;
