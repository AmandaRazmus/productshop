import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { getHistoryOrder } from "../actions/orderActions";
import { identity } from "lodash";
import bcrypt from 'bcryptjs'

//this is for encrypting password
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash
const salt = bcrypt.genSaltSync(10)

const ProfileScreen = () => {
  const passwordInputRef = useRef()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);



  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const id = userInfo._id;
  // console.log("id", id);

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  //This is for getting order history
  const orderHistory = useSelector((state) => state.orderHistory);
  const { isLoading, historyOrder, isError } = orderHistory;
  console.log("orderHistory:", orderHistory);



  useEffect(() => {
    //this is for getting order history of the logged-in user.
    dispatch(getHistoryOrder(userInfo._id));

    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, user, navigate]);

  const submitHandler = (e) => {
    const password = passwordInputRef.current.value
    const hashedPassword = bcrypt.hashSync(password, salt)
    console.log(hashedPassword)

    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password:hashedPassword }));
    }
  };

  return (
    <Row>
      <Col md={4} className="mr-5">
        <h1 className="mt-5 mr-5 profileText">User Profile</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              ref = {passwordInputRef}
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-3">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={8} className="mb-4">
        <h1 className="mt-5 profileText">My Orders</h1>
        {!historyOrder ? (
          <Message>No Order</Message>
        ) : (
          <>
            {historyOrder.map((item, index) => {
              //This only shows the orders that are already paid by the customer. 
              if(item.isPaid) {
              return (
              <ListGroup>
                <div key={index}>
                  <h2 className="mt-4">ORDER ID: {item._id}</h2>
                  <Link to={`/order/${item._id}`}>
                  <h2 className="mt-4 profileOrderId">ORDER ID: {item._id}</h2>
                  </Link>
                  <ListGroup>
                    {item.orderItems.map((item, index) => (
                      <ListGroup.Item>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/event/${item.event}`}>{item.name}</Link>
                          </Col>
                          {/* <Col md={2} className="text-end">
                            {item.qty} x ${item.fee} = ${item.qty * item.fee}
                          </Col> */}
                        </Row>
                      </ListGroup.Item>
                    ))}
                    <ListGroup.Item className="">
                      <Row >
                        <Col>
                          <p>Paid At: {item.paidAt}</p>
                        </Col>
                        <Col>
                          {/* <p>Shipping: {item.shippingPrice}</p>
                      <p>Tax: {item.taxPrice}</p> */}
                          <p className="text-end">Total: ${item.totalPrice}</p>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </ListGroup>)}
})}
          </>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;