import IUsers from '../interfaces/users.interface';
import IUserCredentials from '../interfaces/user.credentials.interface';
import * as usersModel from '../models/users.model';
import * as jwtService from '../utils/jwt.service';
import HttpException from '../utils/HttpException';

export async function createUser(user: IUsers) {
  const userCreated = await usersModel.create(user);
  const token = jwtService.createToken(userCreated.username);

  return token;
}

export async function login(user: IUserCredentials) { 
  const userFound = await usersModel.getUserByUserName(user.username);
  if (!userFound || userFound.password !== user.password) {
    throw new HttpException('Unauthorized', 'Username or password invalid');
  }

  const token = jwtService.createToken(userFound.username);

  return token;
}