import express from 'express';
import { getProductById, getProducts } from '../controllers/productController.js'; // import the functions from the controller

const router = express.Router(); // initialize express router

// @desc    Fetch all products
// @route   GET /api/products/
// @access  public
router.get('/', getProducts); // when we hit /api/products, we want to run the getProducts function from the controller

// @desc    Fetch single product by id
// @route   GET /api/products/:id
// @access  public
router.get('/:id', getProductById); // when we hit /api/products/:id, we want to run the getProductById function from the controller

export default router;