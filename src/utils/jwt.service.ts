import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const { JWT_SECRET } = process.env;

export function createToken(user: string) {
  const token = jwt.sign({ data: user }, JWT_SECRET as string, {
    expiresIn: '365d',
    algorithm: 'HS256',
  });
  return token;
}

export function validateToken(token: string) {
  try {
    const { data } = jwt.verify(token, JWT_SECRET as string) as { data: string };
    return data;
  } catch (error) {
    const err = new Error('Invalid token');
    return err;
  }
}

export function getUserByToken(token: string) {
  const { data } = jwt.verify(token, JWT_SECRET as string) as { data: string };
  return data;
}
