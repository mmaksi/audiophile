import Product from './product.mongo';
import { ProductAttrs } from './product.types';

export async function getAllProducts() {
  return await Product.find();
}

export async function getProduct(productId: number) {
  return await Product.findOne({
    id: productId,
  });
}

export async function createProduct(productToCreate: ProductAttrs) {
  const product = Product.build(productToCreate);
  await product.save();
  return product;
}

// export async function saveUser(email: string, password: string) {
//   const user = Product.build({ email, password });
//   await user.save();
//   return user;
// }
