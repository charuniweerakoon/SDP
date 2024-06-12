import express from 'express';
import {deleteServiceController} from '../controller/delete-service-controller.js';

const router = express.Router();

router.delete('/deleteServiceController',deleteServiceController)

export default router;
