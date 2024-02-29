import express from 'express';
import {
  httpGetAllProducts,
  httpGetCategoryProducts,
  httpGetProduct,
  httpCreateProduct,
} from '../controllers/products.controller';
import { currentUser } from '@maksimark/audiophile-common';
import { requireAuth } from '@maksimark/audiophile-common';
import { body } from 'express-validator';
import { requestValidator } from '@maksimark/audiophile-common';

const productsRouter = express.Router();

productsRouter.get('/', currentUser, requireAuth, httpGetAllProducts);
productsRouter.get(
  '/:category',
  currentUser,
  requireAuth,
  httpGetCategoryProducts
);
productsRouter.get('/:productId', currentUser, requireAuth, httpGetProduct);

// TODO temporary route to be deleted
productsRouter.post(
  '/',
  [
    body('slug').isString().withMessage('Invalid properties'),
    body('name').isString().withMessage('Invalid properties'),
    body('category').isString().withMessage('Invalid properties'),
    body('new').isBoolean().withMessage('Invalid properties'),
    body('price').isNumeric().withMessage('Invalid properties'),
    body('description').isString().withMessage('Invalid properties'),
    body('features').isString().withMessage('Invalid properties'),
    body('includes').isArray().withMessage('Invalid properties'),
  ],
  requestValidator,
  httpCreateProduct
);

export default productsRouter;
