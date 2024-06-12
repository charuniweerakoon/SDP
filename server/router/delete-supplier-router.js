import express from 'express';
import {deleteSupplierController} from '../controller/delete-supplier-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', deleteSupplierController);
//get customer
router.delete('/deleteSupplierController',deleteSupplierController)

export default router;
