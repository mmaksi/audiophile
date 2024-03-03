import { Request, Response } from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
  getAllCategoryProducts,
} from '../models/product/product.model';
import { ProductAttrs } from '../models/product/product.types';
import { ErrorNotFound } from '@maksimark/audiophile-common';

export async function httpGetAllProducts(req: Request, res: Response) {
  const products = await getAllProducts();
  return res.status(200).json(products);
}

export async function httpGetProduct(req: Request, res: Response) {
  const productId = req.params.productId;
  const product = await getProduct(productId);
  if (product) {
    return res.status(200).json(product);
  }
  throw new ErrorNotFound();
}

export async function httpCreateProduct(req: Request, res: Response) {
  const productToCreate = req.body as ProductAttrs;
  const product = await createProduct(productToCreate);
  return res.status(201).json(product);
}

export async function httpGetCategoryProducts(req: Request, res: Response) {
  const category = req.params.category;
  const products = await getAllCategoryProducts(category);
  return res.status(200).json(products);
}
