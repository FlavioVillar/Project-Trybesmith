import IUsers from '../interfaces/users.interface';
import * as usersModel from '../models/users.model';
import createToken from '../utils/jwt.service';

export default async function createUser(user: IUsers) {
  // const getUserName = await usersModel.getUserByUserName(user.username);
  const userCreated = await usersModel.create(user);
  const token = createToken(userCreated.username);

  return token;
}