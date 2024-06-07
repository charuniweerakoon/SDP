import express from 'express';
import {addCustomerController} from '../controller/customer-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addcustomerController);
//get customer
router.post('/addCustomerController',addCustomerController)

export default router;