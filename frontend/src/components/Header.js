import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  //adds item number to cart icon
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  let totalCartItems;
  if(cartItems) {
  totalCartItems = cartItems.reduce((acc, item) => acc + item.qty, 0) 
}


  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <link rel="icon" type="image/vnd.icon" href=" (C:\Users\info_000\.vscode\Projects\ProductShop\frontend\public\favicon.ico">
      </link>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Logo</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fa-solid fa-cart-shopping"></i>
                  {totalCartItems === 0 ? null 
                : ( <span className='badge badge-warning' id='lblCartCount'>{totalCartItems}</span>)}
                  </Nav.Link>
              </LinkContainer>
              {userInfo? (
                 <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ): (<LinkContainer to="/login">
                <Nav.Link><i className='fas fa-user'></i></Nav.Link>
              </LinkContainer>)}
     
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header