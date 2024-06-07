import express from 'express';
import cors from 'cors';
import {PORT} from './env.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import customerRoutes from './router/customer-router.js';
const app = express();
dotenv.config();

app.use(cors());


app.use(bodyParser.json());

app.use('/api/customers', customerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
