<!DOCTYPE html>
<html>
<body>
	
<h2>Project: </h2>
Solo project made during Kal Academy full stack coding bootcamp. Everything is hand-coded and integrated with Mongo DB database including product pages, cart, order screen, checkout and paypal integration.

<h2>Stages: </h2>

<ol type="1">
<li>Stages:

A. Initial project setup

B. Phase 1: internal frontend database file<br />
    1. Make Header, Footer, and Product components<br />
    2. Add a products.js file with static product data (to be removed later)<br />
    3. Create HomeScreen to display mapped product data<br />

C. Product screen<br />
    1. Create the first screen and setup with bootstrap components<br />
    2. Create route paths in App.js<br />
    3. useParams hook to pass id through URL<br />

D. Phase 2: Make own internal backend server<br />
    1. Initialize main project folder<br />
    2. Change the ‘start’ in .json file to “node backend/server.js”<br />
    3. Create data folder and moved products.js file (item info) from front to back end. Changed language to vanilla JS<br />
    4. Configure server.js to connect with Express and listen on custom port<br />
    5. Set Up APIs:<br />

    - [ ] Imported axios and connected products.js from backend to frontend HomeScreen<br />
    - [ ] useEffect to make backend axis call to get products data and deconstruct it to put into a variable<br />

E. Integrating frontend with backend<br />
    1. To HomeScreen, add useState hook and change useEffect to make an async await to make axios call to fetch products from backend API<br />
    2. To ProductScreen, add useState hook and change useEffect to make an async await to make axios call to fetch products from backend API based on id params <br />
    3. Install concurrently and setup frontend and backend to run at the same time<br />

F. ES Modules<br />
    1. Add “type”: “module” to backend package.json file to change the language back to React JS (export default vs. module.export) and import versus require<br />
    2. MongoDB setup<br />
    3. Create .env file <br />

G. Phase 3: Moving data to MongoDB and model data<br />
    1. Create a db.js file to use Mongoose to talk to MongoDB database<br />
    2. Write try, catch block for MongoDB connection<br />
    3. Add dotenv.config() and connectDB() to server.js file to allow access to environment variables<br />
    4. Create product and user models<br />

H. Seeding the database and adding productRoutes<br />
    1. Clean up the products/events pages before pushing to MongoDB<br />
    2. Add users data file for sample records<br />
    3. Create encrypted password hash<br />
    4. Create a seeder.js file to import sample or destroy db data and write corresponding json scripts<br />
    5. Create product routes<br />

I. Full redux flow (Replace the API calls with reducers)<br />
    1. Create a Postman collection for testing<br />
    2. Write an error handler middleware<br />
    3. Install redux js and create a store with combined reducers<br />
    4. Create product reducer with dispatch codes<br />
    5. Create loader component for spinner <br />
    6. Create message component to format error messages<br />
    7. Check what is in store via Redux Extension and check bugs in React Dev Tools<br />

J. Cart functionality<br />
    1. Create cart and product constants<br />
    2. Create cart screen<br />
    3. Add Loader and Message components to ProductScreen<br />

11. Completed cart functionality<br />
    1. Filll out CartScreen<br />
    2. Add a qty form to the product screen so the user can add products<br />
    3. Write a function to get cart items from browser storage <br />
    4. Add CartScreen to App.js<br />

K. Authenticate user<br />
    1. Install jsonwebtoken and move route logic from productRoutes into separate controllers folder. Write comments above routes<br />
    2. Write product controller<br />
    3. Make user route<br />
    4. Authenticate user in user controller<br />
    5. Write match password in UserModel<br />
    6. Create util folder and generate token with jwt<br />
    7. Check postman for login verification<br />
    8. Add incoming data to be tagged as json to server. js<br />

L. Login shipping and payment<br />
    1. Create a private route to get user profile <br />
    2. Authenticate user with AuthMiddleware<br />
    3. Make login, shipping and payment screens<br />
    4. Write save shipping address and payment methods<br />
    5. Create user actions for login request, fail or success<br />
    6. Write a checkout steps component for login, shipping, payment and placing order<br />
    7. Create form container for username and password input<br />
    8. Create user reducer<br />

M. Register and profile screened and backend API<br />
    1. Create private user route<br />
    2. Create profile  and register screens<br />

N. Place Order<br />
    1. Make an order model<br />
    2. Create order routes to add order items after verifying user token, a route to lookup an order by id and a route to update order after paid<br />
    3. Copy the order model in db and update it to show paid info<br />
    4. Write order constants, reducers, update store and actions<br />
    5. Create order screen<br />

O. Paypal integration<br />
	1. Install PayPal react js library and integrate with order screen<br />
	2. Launch, test in react developer tools, go through order process and debug<br />

P. Heroku deployment<br />
	1. Connect with password<br />
 	2. Build & deploy<br />




</ol>
