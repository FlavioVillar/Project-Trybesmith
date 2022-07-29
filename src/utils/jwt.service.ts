import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export default function createToken(user: string) {
  const token = jwt.sign({ data: user }, 'secret', {
    expiresIn: '365d',
    algorithm: 'HS256',
  });

  return token;
}
