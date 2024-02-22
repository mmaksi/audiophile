import express, { Request, Response } from 'express';

const signupRouter = express.Router();

signupRouter.get('/signup', (req: Request, res: Response) => {
  res.send('This is the homepage :D');
});

export default signupRouter;
