import { Document, Model } from 'mongoose';

interface ItemSchema {
  name: string;
  price: number;
}

export interface ProductDoc extends Document {
  slug: string;
  name: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ItemSchema[];
}

export interface ProductAttrs {
  slug: string;
  name: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ItemSchema[];
}

export interface ProductModel extends Model<ProductDoc> {
  build(attributes: ProductAttrs): ProductDoc;
}
