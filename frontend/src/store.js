import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,userRegisterReducer  } from './reducers/userReducers'
  import { orderCreateReducer, orderHistoryReducer,
  orderDetailsReducer, orderPayReducer, } from './reducers/orderReducers'

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer, 
  orderDetails: orderDetailsReducer, 
  orderPay: orderPayReducer,
  orderHistory: orderHistoryReducer //receives order history for profile page
});

const cartItemsFromStorage = localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems')) 
  : [];


const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};


const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

  const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

  //For the profile page
// const orderHistoryFromStorage = localStorage.getItem("orderHistoryItems")
//   ? JSON.parse(localStorage.getItem("orderHistoryItems"))
//   : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage
  },
  //userLogin: { userInfo: userInfoFromStorage }, //look at later
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;