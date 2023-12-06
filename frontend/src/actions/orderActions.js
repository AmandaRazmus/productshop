import axios from 'axios';
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST, 
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
  ORDER_HISTORY_FAIL 
} from '../constants/orderConstants';


//when you press place order button, it will perform this action
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    }); //dispatch the action to the reducer

    const {
      userLogin: { userInfo },
    } = getState(); //this gets the userLogin state from store.js

// console.log("GetState() from OrderActions.js:", getState().userLogin)

    const config = { 
      headers: {
        'Content-Type': 'application/json', //this is the header for the body
        Authorization: `Bearer ${userInfo.token}`, //this is the token from the userLogin state
      },
    } 
  
    const { data } = await axios.post(`/api/orders`, order, config); //this is the POST request to the backend

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    }); //dispatch the action to the reducer
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }); //dispatch the action to the reducer
  }
} 

//this GETS the details of the order. Doesnt have body
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    }); //dispatch the action to the reducer

    const {
      userLogin: { userInfo },
    } = getState(); //this gets the userLogin state from store.js

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/${id}`, config); 

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    }); //dispatch the action to the reducer
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }); //dispatch the action to the reducer
  }
}

//get orderID and result from paypal. Is a PUT so API routes with body of payment result
export const payOrder = (orderId, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ORDER_PAY_REQUEST,
    }); 

    const {
      userLogin: { userInfo },
    } = getState(); 

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/orders/${orderId}/pay`,
      paymentResult,
      config
    ); //this is the PUT request to the backend

    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data,
    })


  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }); 
  }
} 


//This is for getting order history for the login user in ProfileScreen.js
export const getHistoryOrder = (id) => async (dispatch, getState) => {
  try {
    dispatch({type: ORDER_HISTORY_REQUEST}); 

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/orders/history/${id}`, config); //this is the GET request to the backend

    dispatch({
      type: ORDER_HISTORY_SUCCESS,
      payload: data,
    });

  }  catch (error) {
    dispatch({
      type: ORDER_HISTORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }); 
  }
}

