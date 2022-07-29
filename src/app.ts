import express from 'express';
import router from './routes/index';

const app = express();

app.use(express.json());
app.use('/products', router.productRouter);
app.use('/orders', router.ordersRouter);

export default app;
