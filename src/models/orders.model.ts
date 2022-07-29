import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrders from '../interfaces/orders.interface';

export default async function getAll(): Promise<IOrders[]> {
  const query = 'SELECT * FROM Trybesmith.Orders';
  const [result] = await connection.execute(query);
  
  const allOrders = result as IOrders[];

  const ordersArr = await Promise.all(allOrders.map(async (order: IOrders) => {
    const queryProduct = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?';
    const getProducts = await connection.execute(queryProduct, [order.id]);
    const [rows] = getProducts as RowDataPacket[]; 

    const productsIds = rows.map((item: RowDataPacket) => item.id);
    return { ...order, productsIds };
  }));
  return ordersArr as IOrders[];
}