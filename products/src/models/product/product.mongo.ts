import mongoose from 'mongoose';
import { ProductAttrs, ProductDoc, ProductModel } from './product.types';

const ItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    new: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
    includes: [ItemSchema],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
      versionKey: false,
    },
  }
);

productSchema.statics.build = (attributes: ProductAttrs) => {
  return new Prodcut(attributes);
};

const Prodcut = mongoose.model<ProductDoc, ProductModel>(
  'Product',
  productSchema
);

export default Prodcut;
