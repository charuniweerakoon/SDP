import express from 'express';
import {deleteProductController} from '../controller/delete-product-controller.js';

const router = express.Router();

router.delete('/deleteProductController',deleteProductController)

export default router;
