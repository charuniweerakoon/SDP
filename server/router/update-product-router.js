import express from 'express';
import {updateProductController} from '../controller/update-product-controller.js';

const router = express.Router();

router.post('/updateProductController',updateProductController)

export default router;
