import express from 'express';
import 'express-async-errors';
import { ErrorNotFound, errorsHandler } from '@maksimark/audiophile-common';
import cookieSession from 'cookie-session';
import productsRouter from './routers/products.router';

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
app.use('/api/products', productsRouter);

app.all('*', async () => {
  throw new ErrorNotFound();
});

app.use(errorsHandler);

export { app };
