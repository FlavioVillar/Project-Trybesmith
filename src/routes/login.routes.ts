import { Router } from 'express';
import * as userController from '../controllers/users.controller';
import loginMiddleware from '../../middlewares/login.middleware';

const router = Router();

router.post('/', loginMiddleware, userController.login);

export default router;