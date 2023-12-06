import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_RESET,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_RESET,  
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
  ORDER_HISTORY_FAIL,   
} from '../constants/orderConstants';

//orderCreateReducer is used in the placeOrderHandler in PlaceOrderScreen.js
export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      }
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      } //payload is the data returned from the backend
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

//orderDetailsReducer is used in the OrderScreen.js
export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state, //copies data so there is a trail
        loading: true,
      }
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload, //overwrites old data
      }
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
      //resetting the orderDetails
    case ORDER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
}

//orderPayReducer is used in the orderPayHandler in OrderScreen.js
export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
}

//orderHistoryReducer is used in the OrderHistoryScreen.js
export const orderHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_HISTORY_REQUEST:
      return { isloading: true };
    case ORDER_HISTORY_SUCCESS:
      return { isloading: false, historyOrder: action.payload };
    case ORDER_HISTORY_FAIL:
      return { isloading: false, isError: action.payload };
    default:
      return state;
  }
}