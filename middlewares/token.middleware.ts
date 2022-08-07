import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwtService from '../src/utils/jwt.service';

class TokenMiddlewares {
  public static validateTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization || authorization === 'undefined' || authorization === '') {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
    }

    const isValidToken = jwtService.validateToken(authorization);
    
    if (isValidToken instanceof Error) {
      return res.status(401).json({ message: isValidToken.message });
    }
    next();
  };
}

export default TokenMiddlewares;