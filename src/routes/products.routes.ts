import { Router } from 'express';
import * as productController from '../controllers/products.controller';
import productMidleware from '../../middlewares/products.middleware';

const router = Router();

router.post(
  '/',
  productMidleware.validateProductAmount,

  productMidleware.validateProductName,

  productController.create,
);
router.get('/', productController.getAll);

export default router;