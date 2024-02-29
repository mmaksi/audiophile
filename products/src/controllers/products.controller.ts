import { Request, Response } from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
} from '../models/product/product.model';
import { ProductAttrs } from '../models/product/product.types';

export function httpGetAllProducts(req: Request, res: Response) {
  const products = getAllProducts();
  console.log(products);
}

export function httpGetProduct(req: Request, res: Response) {
  const productId = +req.params.productId;
  const product = getProduct(productId);
  console.log(product);
}

export async function httpCreateProduct(req: Request, res: Response) {
  const productToCreate = req.body as ProductAttrs;
  const product = await createProduct(productToCreate);
  return res.status(201).json(product);
}

export function httpGetCategoryProducts(req: Request, res: Response) {}
