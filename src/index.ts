import express, { type Application } from 'express';
import dotenv from 'dotenv';
import { ProductRoute } from './app/models/product/product.routes.js';
import { CategoryRoute } from './app/models/category/category.routes.js';


dotenv.config();
const app:Application = express();

app.use(express.json());
app.use('/api/product', ProductRoute);
app.use('/api/category', CategoryRoute);


app.get('/', (req, res) => {
  res.send('Server is Properly Running...!');
});

export default app;
