import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrders from '../interfaces/orders.interface';
// import IUsers from '../interfaces/users.interface';
// import * as jwtService from '../utils/jwt.service';
// import * as usersModel from './users.model';

async function getAll(): Promise<IOrders[]> {
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

async function create(userId: number, productsIds: number[]) {
  const queryOrder = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute(queryOrder, [userId]) as { insertId: number }[];
  const { insertId } = result;
  
  const queryProduct = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  await Promise.all(productsIds.map(async (productId: number) => {
    await connection.execute(queryProduct, [insertId, productId]);
  }));
  return { userId, productsIds, orderId: insertId };
}

export default {
  getAll,
  create,
};