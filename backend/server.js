import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';

const app = express();
dotenv.config();
connectDB();

app.use('/api/products', productRoutes)

app.listen(5000, console.log('server is running on port 5000'))