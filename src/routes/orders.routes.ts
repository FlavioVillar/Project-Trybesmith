import { Router } from 'express';
import * as ordersController from '../controllers/orders.controller';

const router = Router();

router.get('/:id', ordersController.default);

export default router;