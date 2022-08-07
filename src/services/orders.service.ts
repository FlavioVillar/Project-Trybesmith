import ordersModel from '../models/orders.model';
import * as userModel from '../models/users.model';
import * as jwtService from '../utils/jwt.service';

async function getAll() {
  const orders = await ordersModel.getAll();
  return orders;
}

async function create(productsIds: number[], token: string) {
  const getUser = jwtService.getUserByToken(token as string);
  const userId = await userModel.getUserId(getUser);
  const data = await ordersModel.create(userId, productsIds);
  
  return data;
}

export default {
  getAll,
  create,
};