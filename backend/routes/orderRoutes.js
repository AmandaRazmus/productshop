import express from 'express'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'

// @desc    Create a new order
// @route   POST /api/orders/
// @access  private
router.route('/').post(protect, addOrderItems)

// @desc    get order by Id
// @route   GET /api/orders/:id
// @access  private
router.route('/:id').get(protect, getOrderById)

// @desc    Update order to paid
// @route   PUT /api/orders/:id
// @access  private
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router