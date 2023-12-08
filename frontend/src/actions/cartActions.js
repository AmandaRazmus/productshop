import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD,  } from '../constants/cartConstants';

//when you press add to cart button, it will perform this action
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); 
}

//when you press remove from cart button, it will perform this action
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
} 

//get the shipping address from the form in ShippingScreen.js
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });  //dispatch the action to the reducer

  localStorage.setItem('shippingAddress', JSON.stringify(data)); //save the shipping address to local storage
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });   //dispatch the action to the reducer

  localStorage.setItem('paymentMethod', JSON.stringify(data)); //save the payment method to local storage
}