import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as ordersService from '../services/orders.service';

export default async function getById(req: Request, res: Response) {
  const { id } = req.params;
  console.log('cont', id);
  const orders = await ordersService.default(Number(id));
  console.log('cont', orders);
  
  res.status(StatusCodes.OK).json(orders);
}