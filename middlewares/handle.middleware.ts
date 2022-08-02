import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const errorHandler:
ErrorRequestHandler = async (err, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'Unauthorized':
      res.status(StatusCodes.UNAUTHORIZED).json({ message });
      break;
    default:
      res.status(500).json({ message });
  }
  next();
};

export default errorHandler;
