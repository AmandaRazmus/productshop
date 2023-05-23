import express from "express";
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js' //makes private API call
import { addOrderItems, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";


// @desc    Create a new order
// @route   POST /api/orders
// @access  private
router.route('/').post(protect, addOrderItems) //we go to addorderitems after verifying user token which will take order info from screen and submit it

// @desc    lookup new order
// @route   GET /api/orders/:id
// @access  private
router.route('/:id').get(protect, getOrderById) //in controller
 
// @desc    update order to paid
// @route   PUT /api/orders/:id 
// @access  private
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router