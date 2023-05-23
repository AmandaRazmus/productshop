import express from 'express'; 
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'; 
import { getProductById, getProducts } from '../controllers/productController.js'

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products/
// @access  public
router.get('/', getProducts)

router.get('/:id', getProductById)

export default router