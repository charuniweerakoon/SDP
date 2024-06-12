import express from 'express';
import cors from 'cors';
import {PORT} from './env.js';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import customerRoutes from './router/customer-router.js';
// import serviceRoutes from './router/service-router.js';
import addProductRoutes from './router/add-product-router.js';
import updateProductRoutes from './router/update-product-router.js';
import deleteProductRoutes from './router/delete-product-router.js';
import addStaffRoutes from './router/add-staff-router.js';
import updateStaffRoutes from './router/update-staff-router.js';
import deleteStaffRoutes from './router/delete-staff-router.js';
import addSupplierRoutes from './router/add-supplier-router.js';
import updateSupplierRoutes from './router/update-supplier-router.js';
import deleteSupplierRoutes from './router/delete-supplier-router.js';
import addServiceRoutes from './router/add-service-router.js';
import updateServiceRoutes from './router/update-service-router.js';
import deleteServiceRoutes from './router/delete-service-router.js';
import getNextStaffIdRoutes from './router/staffidRouter.js';


const app = express();

dotenv.config();

app.use(cors());


app.use(bodyParser.json());
app.use(express.json());

app.use('/api/customers', customerRoutes);
// app.use('/api/service',serviceRoutes);
app.use('/api/addProduct',addProductRoutes);
app.use('/api/updateProduct',updateProductRoutes);
app.use('/api/deleteProduct',deleteProductRoutes);
app.use('/api/addStaff',addStaffRoutes);
app.use('/api/updateStaff',updateStaffRoutes);
app.use('/api/deleteStaff',deleteStaffRoutes);
app.use('/api/addSupplier',addSupplierRoutes);
app.use('/api/updateSupplier',updateSupplierRoutes);
app.use('/api/deleteSupplier',deleteSupplierRoutes);
app.use('/api/addService', addServiceRoutes);
app.use('/api/updateService', updateServiceRoutes);
app.use('/api/deleteService', deleteServiceRoutes);
app.use('/api/getNextStaffId', getNextStaffIdRoutes);

app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});


