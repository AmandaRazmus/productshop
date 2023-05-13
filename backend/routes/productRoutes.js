import express from 'express'; 
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js'; 


const router = express.Router()

//this is going to the MongoDB and getting the products from the database through the Product model
router.get('/', asyncHandler(async(req, res) => {
   const products = await Product.find({})
   res.json(products)
}))

//this is going to the MongoDB and getting the products from the database using the id
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product){
    res.json(product)
    }else{
        res.status(404).json({message: 'Product not found'})
    }
}))

export default router