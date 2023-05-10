import React, {useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios'; //products.js now go through here
import Product from '../components/Product';



const HomeScreen = () => {
  useEffect(() => { //useEffect is a hook that does something before the UI goes to the client
    const fetchProducts = () => {
      const {data} = axios.get('/api/products')

    }
    
  })


  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((p) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen