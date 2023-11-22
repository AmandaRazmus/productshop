import mongoose from "mongoose";



const connectDB = async () => {

  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    });
    console.log(`MongoDb Connected: ${conn.connection.host}`)
  } catch(error){
    console.error(`Error: ${error.message}`)
    process.exit(1);
  }
}


export default connectDB

/*const { MongoClient, ServerApiVersion } = import('mongodb');
const uri = mongoose.connect(process.env.MONGO_URI);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
