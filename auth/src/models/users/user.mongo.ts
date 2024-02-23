import mongoose, { Model } from 'mongoose';
import { IUserAttrs, UserDoc, UserModel } from './user.types';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attributes: IUserAttrs) => {
  return new User(attributes);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export default User;
