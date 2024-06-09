import express from 'express';
import {addServiceController} from '../controller/service-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addcustomerController);
//get customer
router.post('/addServiceController',addServiceController)

export default router;