import * as ordersModel from '../models/orders.model';

export default async function getById(id: number) {
  console.log('serv');
  const orders = await ordersModel.default(id);
  console.log('serv', orders);
  
  return orders;
}