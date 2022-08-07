import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as ordersService from '../services/orders.service';

export async function getAll(_req: Request, res: Response) {
  try {
    const orders = await ordersService.getAll();
    return res.status(StatusCodes.OK).json(orders);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { productsIds } = req.body;
    const order = await ordersService.create(productsIds, token as string); 
    return res.status(StatusCodes.CREATED).json(order);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}