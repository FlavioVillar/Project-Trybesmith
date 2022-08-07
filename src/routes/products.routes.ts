import { Router } from 'express';
import * as productController from '../controllers/products.controller';
import productMiddleware from '../../middlewares/products.middleware';

const router = Router();

router.post(
  '/',
  productMiddleware.validateProductAmount,

  productMiddleware.validateProductName,

  productController.create,
);
router.get('/', productController.getAll);

export default router;