import express from 'express';
import {updateStaffController} from '../controller/update-staff-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addcustomerController);
//get customer
router.put('/updateStaffController',updateStaffController)

export default router;