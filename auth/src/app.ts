import express from 'express';
import 'express-async-errors';
import signupRouter from './routers/signup.router';
import signinRouter from './routers/signin.router';
import signoutRouter from './routers/signout.router';
import errorsHandler from './middleware/errorsHandler.middleware';
import { ErrorNotFound } from './errors/not-found.error';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

// Routers
app.use('/api/users', signupRouter);
app.use('/api/users', signinRouter);
app.use('/api/users', signoutRouter);

app.all('*', async () => {
  throw new ErrorNotFound();
});

app.use(errorsHandler);

export { app };
