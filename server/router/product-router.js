import express from 'express';
import {addProductController} from '../controller/product-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addcustomerController);
//get customer
router.post('/addProductController',addProductController)

export default router;

