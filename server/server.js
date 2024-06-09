import express from 'express';
import cors from 'cors';
import {PORT} from './env.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import customerRoutes from './router/customer-router.js';
import serviceRoutes from './router/service-router.js'
const app = express();
dotenv.config();

app.use(cors());


app.use(bodyParser.json());

app.use('/api/customers', customerRoutes);
app.use('/api/service',serviceRoutes);

app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
