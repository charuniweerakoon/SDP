import express from 'express';
import {getNextStaffIdController} from '../controller/staffidCotroller.js'

const router = express.Router();
// const { getNextStaffIdController } = require('./staffidController');

// Define the route for getting the next job card ID
router.get('/next-staff-id', getNextStaffIdController);

export default router;
