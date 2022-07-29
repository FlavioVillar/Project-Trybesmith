import connection from './connection';
import IOrders from '../interfaces/orders.interface';

export default async function getById(id: number): Promise<IOrders | null> {
  const query = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?';
  const values = [id];
  const [result] = await connection.execute(query, values);
  
  const [order] = result as IOrders[];
  console.log('mod', order);
  return order || null;
}