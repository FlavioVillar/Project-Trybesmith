import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUsers from '../interfaces/users.interface';
import IUserCredentials from '../interfaces/user.credentials.interface';
import * as usersService from '../services/users.service';

export async function createUser(req: Request, res: Response) {
  const getUser = req.body as IUsers;
  const user = await usersService.createUser(getUser);  
  res.status(StatusCodes.CREATED).json({ token: user });
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const getUser = req.body as IUserCredentials;
    const user = await usersService.login(getUser);
    res.status(StatusCodes.OK).json({ token: user });
  } catch (error) {
    next(error);
  }
}
