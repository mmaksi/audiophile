import User from './user.mongo';

export async function findUser(email: string) {
  return await User.findOne({ email });
}

export async function saveUser(email: string, password: string) {
  const user = User.build({ email, password });
  await user.save();
}
