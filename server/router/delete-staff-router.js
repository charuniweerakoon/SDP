import express from 'express';
import {deleteStaffController} from '../controller/delete-staff-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addcustomerController);
//get customer
router.delete('/deleteStaffController',deleteStaffController)

export default router;