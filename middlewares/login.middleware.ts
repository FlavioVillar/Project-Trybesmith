import { Request, Response, NextFunction } from 'express';
import IUserCredentials from '../src/interfaces/user.credentials.interface';
import loginSchema from '../src/schemas/login.schema';

export default function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const getUser = req.body as IUserCredentials;
  loginSchema(getUser);

  next();
}
