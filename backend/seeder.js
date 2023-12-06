import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import connectDB from './config/db.js';

dotenv.config(); 
connectDB();

const importData = async () => { // import the data
  try{
    await Product.deleteMany(); // delete all products
    await User.deleteMany(); // delete all users

    const createdUsers = await User.insertMany(users); // insert the users into the database
    const adminUser = createdUsers[0]._id; // get the id of the first user

    const sampleProducts = products.map(product => { // add the admin user to each product
      return {...product, user: adminUser}; // return the product with the admin user
    })

    await Product.insertMany(sampleProducts); // insert the products into the database
    console.log('Data imported!'); // log that the data was imported
    process.exit(); // exit the process

  } catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

const destroyData = async () =>{
  try{
    await Product.deleteMany(); // delete all products
    await User.deleteMany(); // delete all users

    console.log('Data destroyed!');
    process.exit();
  }catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (process.argv[2] === '-d'){ // if the argument is -d, destroy the data
  destroyData(); 
} else {
  importData();
}