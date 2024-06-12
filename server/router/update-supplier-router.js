import express from 'express';
import {updateSupplierController} from '../controller/update-supplier-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', updateSupplierController);
//get customer
router.put('/updateSupplierController',updateSupplierController)

export default router;