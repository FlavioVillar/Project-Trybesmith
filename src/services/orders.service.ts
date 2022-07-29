import ordersModel from '../models/orders.model';

export default async function getAll() {
  const orders = await ordersModel();
  return orders;
}