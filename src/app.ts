import express from 'express';
import router from './routes/index';

const app = express();

app.use(express.json());
app.use('/products', router.productRouter);

export default app;
