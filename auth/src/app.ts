import express from 'express';
import 'express-async-errors';
import errorsHandler from './middleware/errors-handler.middleware';
import { ErrorNotFound } from './errors/not-found.error';
import cookieSession from 'cookie-session';
import userRouter from './routers/user.router';

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
app.use('/api/users', userRouter);

app.all('*', async () => {
  throw new ErrorNotFound();
});

app.use(errorsHandler);

export { app };
