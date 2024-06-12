// import express from 'express';
// import {addServiceController} from '../controller/service-controller.js';

// const router = express.Router();

// //add customer
// // router.post('/customer', addcustomerController);
// //get customer
// router.post('/addServiceController',addServiceController)

// export default router;

import express from 'express';
import {addProductController} from '../controller/add-product-controller.js';

const router = express.Router();

router.post('/addProductController',addProductController)

export default router;
