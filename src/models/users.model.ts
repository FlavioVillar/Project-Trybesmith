import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IUsers from '../interfaces/users.interface';

export async function getUserByUserName(username: string): Promise<IUsers | null> {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const values = [username];
  const [result] = await connection.execute(query, values);

  const [user] = result as IUsers[];
  return user || null;
}

export async function getUserId(user: string) {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const [result] = await connection.execute(query, [user]);
  const [rows] = result as RowDataPacket[];
  const { id } = rows;
  return id;
}

export async function create(user: IUsers): Promise<IUsers> {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];
  await connection.execute(query, values);

  const newUser: IUsers = { username, classe, level, password };
  return newUser;
}
