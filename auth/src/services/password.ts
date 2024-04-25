import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
import { BadRequestError } from '@maksimark/audiophile-common';

const scryptAsync = promisify(scrypt);

export class Password {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString('hex');
    try {
      const buf = (await scryptAsync(password, salt, 64)) as Buffer;
      return `${buf.toString('hex')}.${salt}`;
    } catch (e) {
      throw new BadRequestError('Error hashing the password');
    }
  }

  static async compare(storedPassword: string, providedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('.');
    try {
      const buf = (await scryptAsync(providedPassword, salt, 64)) as Buffer;
      return buf.toString('hex') === hashedPassword;
    } catch (e) {
      throw new BadRequestError('Error hashing the password');
    }
  }
}
