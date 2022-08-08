import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUsers from '../interfaces/users.interface';
import IUserCredentials from '../interfaces/user.credentials.interface';
import * as usersService from '../services/users.service';

export async function createUser(req: Request, res: Response) {
  try {
    const getUser = req.body as IUsers;
    const user = await usersService.createUser(getUser);  
    return res.status(StatusCodes.CREATED).json({ token: user });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const getUser = req.body as IUserCredentials;
    const user = await usersService.login(getUser);
    return res.status(StatusCodes.OK).json({ token: user });
  } catch (error) {
    return next(error);
  }
}
