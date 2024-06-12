import express from 'express';
import {addSupplierController} from '../controller/add-supplier-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addSupplierController);
//get customer
router.post('/addSupplierController',addSupplierController)

export default router;