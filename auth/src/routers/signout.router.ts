import express, { Request, Response } from 'express';

const signoutRouter = express.Router();

signoutRouter.get('/signout', (req: Request, res: Response) => {
  res.send('Signout');
});

export default signoutRouter;
