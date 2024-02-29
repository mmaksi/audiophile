import bcrypt from 'bcryptjs';
import { BadRequestError } from '@maksimark/audiophile-common';

export class Password {
  static async toHash(password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    } catch (e) {
      throw new BadRequestError('Error hashing the password');
    }
  }

  static async compare(storedPassword: string, providedPassword: string) {
    try {
      const hashedPassword = await bcrypt.compare(
        providedPassword,
        storedPassword
      );
      return hashedPassword;
    } catch (e) {
      throw new BadRequestError('Error hashing the password');
    }
  }
}
