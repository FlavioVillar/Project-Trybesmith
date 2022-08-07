import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as ProductsService from '../services/products.service';

export async function create(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;  
    if (!name || !amount) {
      res.status(StatusCodes.BAD_REQUEST).send('Missing name or amount');
      return;
    }
    const product = await ProductsService.create(req.body);
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }  
}

export async function getAll(req: Request, res: Response) {
  try {
    const products = await ProductsService.getAll();
    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
