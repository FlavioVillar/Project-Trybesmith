import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ordersService from '../services/orders.service';

async function getAll(_req: Request, res: Response) {
  const orders = await ordersService.getAll();
  res.status(StatusCodes.OK).json(orders);
}

async function create(req: Request, res: Response) {
  const token = req.headers.authorization;
  const { productsIds } = req.body;
  const order = await ordersService.create(productsIds, token as string); 
  return res.status(StatusCodes.CREATED).json(order);
}

export default {
  getAll,
  create,
};