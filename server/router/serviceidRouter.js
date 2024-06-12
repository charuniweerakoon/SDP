import express from 'express';
import {getNextServiceIdController} from '../controller/serviceidController.js'

const router = express.Router();
// const { getNextStaffIdController } = require('./staffidController');

// Define the route for getting the next job card ID
router.get('/next-service-id', getNextServiceIdController);

export default router;
