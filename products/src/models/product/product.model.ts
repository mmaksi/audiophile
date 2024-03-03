import Product from './product.mongo';
import { ProductAttrs } from './product.types';

export async function getAllProducts() {
  return await Product.find({});
}

export async function getProduct(productId: string) {
  return await Product.findById(productId);
}

export async function createProduct(productToCreate: ProductAttrs) {
  const product = Product.build(productToCreate);
  await product.save();
  return product;
}

export async function getAllCategoryProducts(category: string) {
  return await Product.find({
    category,
  });
}
