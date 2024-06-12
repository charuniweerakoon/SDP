import express from 'express';
import {addStaffController} from '../controller/add-staff-controller.js';

const router = express.Router();

//add customer
// router.post('/customer', addcustomerController);
//get customer
router.post('/addStaffController',addStaffController)

export default router;