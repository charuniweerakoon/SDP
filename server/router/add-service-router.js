import express from 'express';
import {addServiceController} from '../controller/add-service-controller.js';

const router = express.Router();

router.post('/addServiceController',addServiceController)

export default router;
