import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YourOrders() {
  const [orders, setOrders] = useState([]);
  const [username, setUsername] = useState(null);

  // Fetch orders from the server
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    console.log("Username from localStorage: ", storedUsername); // Log the username
    setUsername(storedUsername);
  
    if (!storedUsername) {
      console.error("Username is missing!");
      return;
    }
  
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Fetch orders when username is available
  useEffect(() => {
    if (username) {
      const fetchOrders = async () => {
        try {
          const response = await axios.get(`https://bookhaven1.onrender.com/orders?username=${username}`);
          
          // Sort orders by date, showing the most recent first
          const sortedOrders = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
          setOrders(sortedOrders);
          
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      fetchOrders();
    }
  }, [username]); // Runs whenever username is set

  

  if (orders.length === 0) {
    return <p style={{ textAlign: 'center', fontSize: '18px', color: '#888' }}>No orders found.</p>;
  }

  // Inline styling
  const containerStyle = {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '24px',
  };

  const orderCardStyle = {
    marginBottom: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  const orderNumberStyle = {
    fontSize: '18px',
    color: '#007bff',
    fontWeight: 'bold',
  };

  const orderDateStyle = {
    fontSize: '14px',
    color: '#888',
    marginTop: '5px',
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

  const orderDetailsStyle = {
    fontSize: '16px',
    marginTop: '10px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const totalPriceStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '10px',
  };

  const shippingInfoStyle = {
    fontSize: '16px',
    color: '#555',
    marginTop: '10px',
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleString(undefined, options);
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Your Orders</h3>
      
      {orders.map((order, index) => (
        <div key={order._id} style={orderCardStyle}>
          <h5 style={orderNumberStyle}>Order #{orders.length-index}</h5>
          <p style={orderDateStyle}><strong>Order Date:</strong> {formatDate(order.date)}</p>
          
          <ul style={listGroupStyle}>
            {order.items.map((item) => (
              <li key={item.id} style={listItemStyle}>
                <span>{item.title} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          
          <p style={totalPriceStyle}>
            <strong>Total:</strong> ${order.total.toFixed(2)}
          </p>
          
          <div style={orderDetailsStyle}>
            <p><strong>Shipping Address:</strong> {order.customer.address}, {order.customer.city}, {order.customer.zip}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default YourOrders;
