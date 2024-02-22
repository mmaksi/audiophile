import express, { Request, Response } from 'express';

const signinRouter = express.Router();

signinRouter.get('/signin', (req: Request, res: Response) => {
  res.send('Signin');
});

export default signinRouter;
