import express, { Request, Response } from 'express';
import { httpSignout } from '../controllers/user.controller';

const signoutRouter = express.Router();

signoutRouter.post('/signout', httpSignout);

export default signoutRouter;
