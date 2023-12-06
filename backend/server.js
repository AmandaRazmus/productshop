import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';

const app = express(); // initialize express
dotenv.config(); // allows us to use .env file
connectDB(); // connect to database

app.use(express.json()); // allows us to accept json data in the body
app.use('/api/products', productRoutes); //use the productRoutes when we hit /api/products. 
app.use('/api/users', userRoutes); 
app.use('/api/orders', orderRoutes);
app.get('/api/config/paypal', (req, res)=>  
  res.send(process.env.PAYPAL_CLIENT_ID) // send the paypal client id to the frontend
);

const __dirname = path.resolve(); // set dirname to current directory
if (process.env.NODE_ENV === 'production'){ // if we are in production mode
  app.use(express.static(path.join(__dirname, '/frontend/build'))) // set static folder
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')) // any route that is not the api routes, we want to load the index.html file
  })
}

app.use(errorHandler); 
const PORT = process.env.PORT; // set port to 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`)); // listen on port 5000