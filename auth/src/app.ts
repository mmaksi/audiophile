import express from 'express';
import signupRouter from './routers/signup.router';
import signinRouter from './routers/signin.router';
import signoutRouter from './routers/signout.router';

const app = express();
app.use(express.json());

// Routers
app.use('/api/users', signupRouter);
app.use('/api/users', signinRouter);
app.use('/api/users', signoutRouter);

export { app };
