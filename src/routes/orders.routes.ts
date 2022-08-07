import { Router } from 'express';
import * as ordersController from '../controllers/orders.controller';
import OrdersMiddlewares from '../../middlewares/order.middleware';
import TokenMiddlewares from '../../middlewares/token.middleware';

const router = Router();

router.post(
  '/',
  TokenMiddlewares.validateTokenMiddleware,

  OrdersMiddlewares.validateProductsIds,

  ordersController.create,
);
router.get('/', ordersController.getAll);

export default router;