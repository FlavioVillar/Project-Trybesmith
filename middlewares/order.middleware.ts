import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class OrdersMiddlewares {
  public static validateProductsIds = (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;
    
    if (productsIds === undefined) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"productsIds" is required' });
    }

    if (productsIds.length === 0) {    
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"productsIds" must include only numbers' });
    }

    if (typeof (productsIds as []) !== 'object') {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"productsIds" must be an array' });
    }
    
    next();
  };
}

export default OrdersMiddlewares;