import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as ProductsService from '../services/products.service';

export async function create(req: Request, res: Response) {
  const { name, amount } = req.body;
  
  if (!name || !amount) {
    res.status(StatusCodes.BAD_REQUEST).send('Missing name or amount');
    return;
  }
  const product = await ProductsService.create(req.body);
  res.status(StatusCodes.CREATED).json(product);
}

export async function getAll(req: Request, res: Response) {
  const products = await ProductsService.getAll();
  res.status(StatusCodes.OK).json(products);
}
