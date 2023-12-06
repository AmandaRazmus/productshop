import asyncHandler from 'express-async-handler'; 
import Product from '../models/productModel.js'; 

// when we hit /api/products, we want to run the getProducts function from the controller
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}) 
  res.json(products) // return the products as json
}); 

// when we hit /api/products/:id, we want to run the getProductById function from the controller
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product){ // if the product exists return it as json
    res.json(product); 
  } else {
    res.status(404).json({message: 'Product not found'}); // if the product does not exist, return a 404 error
  }
}) 

export { getProducts, getProductById };