import express from 'express';
import { authUser, getUserProfile, updateUserProfile, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router(); 

// @desc    Authenticate user and generate token
// @route   POST /api/users/login
// @access  public
router.post('/login', authUser); //when we hit /api/users/login, we want to run the authUser function from the controller

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
router.route('/').post(registerUser); //when we hit /api/users, we want to run the registerUser function from the controller

// @desc    Get the user profile
// @route   GET /api/users/profile
// @access  Private
router.route('/profile') //when we hit /api/users/profile, we want to run the getUserProfile function from the controller
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router;