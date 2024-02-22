import express from 'express';
import 'express-async-errors';
import signupRouter from './routers/signup.router';
import signinRouter from './routers/signin.router';
import signoutRouter from './routers/signout.router';
import errorsHandler from './middleware/errorsHandler.middleware';
import { ErrorNotFound } from './errors/not-found.error';

const app = express();
app.use(express.json());

// Routers
app.use('/api/users', signupRouter);
app.use('/api/users', signinRouter);
app.use('/api/users', signoutRouter);

app.all('*', async () => {
  throw new ErrorNotFound();
});

app.use(errorsHandler);

export { app };
