import express from 'express';
import {updateProductController} from '../controller/update-product-controller.js';

const router = express.Router();

router.put('/updateProductController',updateProductController)

export default router;
