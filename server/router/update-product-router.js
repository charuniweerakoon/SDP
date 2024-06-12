import express from 'express';
import {updateProductController} from '../controller/update-product-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addcustomerController);
//get customer
router.put('/updateProductController',updateProductController)

export default router;