import { Document, Model } from 'mongoose';

export interface IUserAttrs {
  email: string;
  password: string;
}

export interface UserDoc extends Document {
  password: string;
  email: string;
}

export interface UserModel extends Model<UserDoc> {
  build(attributes: IUserAttrs): UserDoc;
}
