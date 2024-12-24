const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {UserModel, CartModel, OrderModel } = require('./Schema');
const { connectDB } = require('./db');

const app = express();



app.use(cors());
app.use(bodyParser.json());


connectDB();

app.get('/',(req,res)=>{
    res.send('server started successfully')
  })

app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {

        const existingUser = await UserModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists.' });
        }


        const newUser = new UserModel({ username, password, email });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
        console.log('user created successfully')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ username });
  
      if (!user || user.password !== password) {
        return res.status(400).json({ error: 'Invalid username or password.' });
      }
  
      res.status(200).json({ message: 'Login successful!', user });
      console.log('User logged in successfully');
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
  });

app.post('/addToCart', async(req,res)=>{
    const {id, title, price, quantity,username}= req.body;

    const existingBook = await CartModel.findOne({ title });
    if(existingBook){
        CartModel.findOneAndUpdate({title:existingBook.title},
            {$set:{quantity:existingBook.quantity+quantity}}
        )
    }

    const newCart= new CartModel({id, title, price, quantity,username});
    await newCart.save();
    res.status(201).json({ message: 'Added to cart successfully!' });
    console.log('Added to cart successfully')
})

app.get('/cart', async (req, res) => {
    const { username } = req.query; // Get username from query parameters
    try {
        const cartItems = await CartModel.find({ username: username });
        res.json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
});

  app.put('/cart', async (req, res) => {
    //const { id } = req.params;
    const { id, quantity } = req.body;
  
    if (quantity == null || quantity < 1) {
      return res.status(400).json({ error: 'Invalid quantity' });
    }
  
    try {
      const updatedItem = await CartModel.findOneAndUpdate(
        {id:id},
        { quantity },
        { new: true } // Returns the updated document
      );
  
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: 'Error updating item' });
    }
  });
  
  // Delete a cart item
  app.delete('/cartDel', async (req, res) => {
    const { id } =req.body;
  
    try {
      // Use findOneAndDelete to delete the item based on its unique identifier
      const deletedItem = await CartModel.findOneAndDelete({ id: id });
  
      // Check if item was found and deleted
      if (!deletedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      // Return a success message
      res.json({ message: 'Item deleted', item: deletedItem });
    } catch (error) {
      console.error('Error deleting cart item:', error);  // Log the error for debugging
      res.status(500).json({ error: 'Error deleting cart item' });
    }
  });

  app.delete('/clearCart', async (req, res) => {
    try {
      await CartModel.deleteMany({});
      res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
      console.error('Error clearing cart:', error);
      res.status(500).json({ error: 'Failed to clear cart' });
    }
  });

  app.post('/orders', async (req, res) => {
    const { items, total, customer, payment,username } = req.body;
  
    try {
      const newOrder = new OrderModel({
        items,
        total,
        customer,
        payment,
        username,
        date: new Date(),
      });
  
      await newOrder.save();
  
      // Clear the cart after order placement
      await CartModel.deleteMany({});
      res.status(201).json({ message: 'Order placed successfully!' });
      console.log('Order placed successfully');
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: 'Failed to place order' });
    }
  });
  
  // Fetch order history
  app.get('/orders', async (req, res) => {
    const {username}=req.query
    try {
      const orders = await OrderModel.find({ username: username });
      res.json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  });
  
  

app.listen(4000, () => {
   
    console.log(`Server running on port `);
});