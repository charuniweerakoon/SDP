import express from 'express';
import cors from 'cors';
import {PORT} from './env.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import customerRoutes from './router/customer-router.js';
import serviceRoutes from './router/service-router.js';
import addProductRoutes from './router/add-product-router.js';
import updateProductRoutes from './router/update-product-router.js';
import deleteProductRoutes from './router/delete-product-router.js';
const app = express();
dotenv.config();

app.use(cors());


app.use(bodyParser.json());

app.use('/api/customers', customerRoutes);
app.use('/api/service',serviceRoutes);
app.use('/api/addProduct',addProductRoutes);
app.use('/api/updateProduct',updateProductRoutes);
app.use('/api/deleteProduct',deleteProductRoutes);

app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});


