const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    
});

const cartSchema= new mongoose.Schema({
    id:{type: Number, required: true},
    title:{type: String, required: true},
    price:{type: Number, required: true},
    quantity:{type: Number, required: true},
    username:{type: String, required: true}
   
})

const orderSchema = new mongoose.Schema({
    items: [
      {
        id: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    customer: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      zip: { type: String, required: true },
    },
    payment: {
      cardNumber: { type: String, required: true },
      expiry: { type: String, required: true },
      cvv: { type: String, required: true },
    },
    date: { type: Date, default: Date.now },
    username:{type: String, required: true}
  });
  
  const UserModel = mongoose.model('User', userSchema);
  const CartModel = mongoose.model('Cart', cartSchema);
  const OrderModel = mongoose.model('Order', orderSchema);
  
  module.exports = { UserModel, CartModel, OrderModel };