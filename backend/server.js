import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';

const favicon = require('serve-favicon')
const app = express();
dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res)=> 
  res.send(process.env.PAYPAL_CLIENT_ID)
)

// Returns a middleware to serve favicon 
app.use(favicon(__dirname + '/favicon.ico')); 

// API endpoint to serve index  
app.get('/', (_, res)=> res.sendFile(__dirname + '/index.html')) 


app.use(errorHandler)
 
// Start the server 
app.listen(8080, console.log('server is running on port 5000'))