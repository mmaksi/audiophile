import mongoose from 'mongoose';
import { app } from './app';

const startServer = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT key must be defined');
  }

  try {
    await mongoose.connect('mongodb://products-mongo-srv:27017/products');
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log(`Listening on port 3000!`);
  });
};

startServer();