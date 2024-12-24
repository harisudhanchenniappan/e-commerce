import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BuyNow() {
  const { state } = useLocation();
  const { cart, total } = state || {};
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(()=>{
    setUsername(localStorage.getItem('username'))
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = {
      items: cart,
      total,
      customer: {
        address: e.target.address.value,
        city: e.target.city.value,
        zip: e.target.zip.value,
      },
      payment: {
        cardNumber: e.target.cardNumber.value,
        expiry: e.target.expiry.value,
        cvv: e.target.cvv.value,
      },
      username
    };

    try {
      // Save order in the database
      await axios.post('http://localhost:4000/orders', orderDetails);

      // Empty the cart
      await axios.delete('http://localhost:4000/clearCart');

      alert('Order placed successfully!');
      navigate('/first-page/orders'); // Redirect to the "Your Orders" page
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place the order. Please try again.');
    }
  };

  if (!cart || cart.length === 0) {
    return <p>No items to purchase.</p>;
  }

  const containerStyle = {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
  };

  const listGroupStyle = {
    marginBottom: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const listItemStyle = {
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #eee',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Order Summary</h3>
      <ul style={listGroupStyle}>
        {cart.map((item) => (
          <li key={item.id} style={listItemStyle}>
            <span>{item.title} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h4 style={{ fontFamily: 'Arial, sans-serif', color: '#333', textAlign: 'center' }}>
        Total: ${total.toFixed(2)}
      </h4>

      <form onSubmit={handleSubmit}>
        <h5 style={{ marginTop: '30px', color: '#333' }}>Shipping Details</h5>
        <div style={formGroupStyle}>
          <label htmlFor="address" className="form-label" style={{ fontSize: '14px' }}>
            Address
          </label>
          <input type="text" id="address" name="address" style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="city" className="form-label" style={{ fontSize: '14px' }}>
            City
          </label>
          <input type="text" id="city" name="city" style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="zip" className="form-label" style={{ fontSize: '14px' }}>
            ZIP Code
          </label>
          <input type="text" id="zip" name="zip" style={inputStyle} required />
        </div>

        <h5 style={{ marginTop: '30px', color: '#333' }}>Payment Details</h5>
        <div style={formGroupStyle}>
          <label htmlFor="cardNumber" className="form-label" style={{ fontSize: '14px' }}>
            Card Number
          </label>
          <input type="text" id="cardNumber" name="cardNumber" style={inputStyle} required />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="expiry" className="form-label" style={{ fontSize: '14px' }}>
            Expiry Date (MM/YY)
          </label>
          <input type="text" id="expiry" name="expiry" style={inputStyle} placeholder="MM/YY" required />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="cvv" className="form-label" style={{ fontSize: '14px' }}>
            CVV
          </label>
          <input type="text" id="cvv" name="cvv" style={inputStyle} required />
        </div>

        <button type="submit" style={buttonStyle}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default BuyNow;
