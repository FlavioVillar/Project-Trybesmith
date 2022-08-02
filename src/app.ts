import express from 'express';
import router from './routes/index';
import { errorHandler } from '../middlewares/handle.middleware';

const app = express();

app.use(express.json());
app.use('/products', router.productRouter);
app.use('/orders', router.ordersRouter);
app.use('/users', router.usersRouter);
app.use('/login', router.loginRouter);
app.use(errorHandler);

export default app;
