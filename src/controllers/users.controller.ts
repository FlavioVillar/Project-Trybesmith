import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUsers from '../interfaces/users.interface';
import * as usersService from '../services/users.service';

export default async function createUser(req: Request, res: Response) {
  const getUser = req.body as IUsers;
  const user = await usersService.default(getUser);  
  res.status(StatusCodes.CREATED).json({ token: user });
}