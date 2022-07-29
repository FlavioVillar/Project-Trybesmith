import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ordersService from '../services/orders.service';

export default async function getAll(_req: Request, res: Response) {
  const orders = await ordersService();
  res.status(StatusCodes.OK).json(orders);
}