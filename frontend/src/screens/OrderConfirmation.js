import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { CART_RESET } from "../constants/cartConstants";

const OrderConfirmation = () => {
const orderInfo = useSelector((state) => state.orderCreate);
  const {data, error} = orderInfo;
  //console.log('paypal data:', data) 

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const orderDetails = useSelector((state) => state.orderDetails);
  const {order} = orderDetails;
  console.log(order._id);

  useEffect(() => {
    dispatch({type: CART_RESET});
  }, [dispatch])

  return (
    <div className="h-100 d-flex align-items-center justify-content-center ">
          <div className="text-center thankbox p-5">
          <h1 className="thankyou">Thank you for you order!</h1>
          <p >Your order was completed successfully.</p>
          <p>You can visit <Link to={`/order/${order._id}`}>here </Link>to check the status of your order.</p>
          </div>
    </div>
  )
}

export default OrderConfirmation;