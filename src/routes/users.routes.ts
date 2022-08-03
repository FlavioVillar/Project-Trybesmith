import { Router } from 'express';
import * as userController from '../controllers/users.controller';
import UsersMiddleware from '../../middlewares/users.middleware';

const router = Router();

router.post(
  '/',
  UsersMiddleware.validateUserName,

  UsersMiddleware.validateClasse,

  UsersMiddleware.validateUserLevel,

  UsersMiddleware.validateUserPassword,

  userController.createUser,
);

export default router;