const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());


// Middleware
const db = 'mongodb+srv://flowerbooking:flowerbooking@cluster0.xvcmgoc.mongodb.net/flowerbooking?retryWrites=true&w=majority';

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(e)
  console.log(`No connection: ${e}`);
});

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone:{ type: String, required: true },
    address:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    repass: { type: String, required: true }
  });
  const productSchema = new mongoose.Schema({
    pname:{type:String,required: true},
    price:{type:String,required: true},
    image:{type:String,required: true}
  });

  const paymentSchema = new mongoose.Schema({
    cardNumber: String,
    expiryDate: String,
    cvv: String,
    name: String,
  });





  
  const User=mongoose.model("User",userSchema);
  
  module.exports=User;

  const product=mongoose.model("product",productSchema);
  
  module.exports=product;

  const Payment = mongoose.model('Payment', paymentSchema);
  module.exports=Payment;
  
  app.post("/register", async (request, response) => {
      const user = new User(request.body);
    
      try {
        await user.save();
        response.send(user);
      } catch (error) {
        response.status(500).send(error);
      }
  });

  app.post("/add-product", async (request, response) => {
    const products = new product(request.body);
  
    try {
      await products.save();
      response.send(products);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post('/payment', async (request, response) => {
    const payment = new Payment(request.body);
    try {
  
      // Save the payment object to the database
      await payment.save();
      response.send(payment);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  app.get('/user', async (req, res) => {
    try {
      // Retrieve users from MongoDB
      const users = await User.find();
      
      // Send users as a response
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/product', async (req, res) => {
    try {
      // Retrieve users from MongoDB
      const users = await product.find();
      
      // Send users as a response
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  
  app.get('/payments', async (req, res) => {
    try {
      // Retrieve payments from MongoDB
      const payments = await Payment.find();
      console.log(payments)
      
      // Send payments as a response
      res.json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      
      const isMatch = await bcrypt.compare(password, user.password);
      const isAdmin = email === "bhargavi123@gmail.com" && password === "bharu1234"
      console.log(isAdmin)
      // if (!isMatch) {
        // return res.status(401).json({ message: 'Invalid email or password' });
       //}
     
      if(isAdmin){
        const jwtToken = jwt.sign({ userId: user._id }, 'mysecretkey2');
        return res.json({ user, jwtToken });
      }else{
        const token = jwt.sign({ userId: user._id }, 'mysecretkey1');
        console.log(token)
        return res.json({ user, token });
      }
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server Error' });
    }
  });


  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });