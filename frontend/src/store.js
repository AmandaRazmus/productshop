import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,userRegisterReducer  } from './reducers/userReducers';
  import { orderCreateReducer,
  orderDetailsReducer, orderPayReducer, } from './reducers/orderReducers';

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
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] // if cartItems is in local storage, parse it, else set it to empty array
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') 
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}; // if paymentMethod is in local storage, parse it, else set it to empty object

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}; // if shippingAddress is in local storage, parse it, else set it to empty object


const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null; // if userInfo is in local storage, parse it, else set it to null

const initialState = {
  cart: { 
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage
  },
  userLogin: { userInfo: userInfoFromStorage }, 
}; // set initial state to empty object

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});     // create store

export default store;