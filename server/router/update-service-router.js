import express from 'express';
import {updateServiceController} from '../controller/update-service-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addcustomerController);
//get customer
router.put('/updateServiceController',updateServiceController)

export default router;