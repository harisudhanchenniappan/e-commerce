import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cart() {
  const [cart, setCart] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editQuantity, setEditQuantity] = useState(1);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  // Fetch cart items from the server
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    console.log("Username from localStorage: ", storedUsername); // Log the username
    setUsername(storedUsername);
  
    if (!storedUsername) {
      console.error("Username is missing!");
      return;
    }
  
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`https://bookhaven1.onrender.com/cart?username=${storedUsername}`);
        console.log("Cart items:", response.data); // Log the response to check the data
        setCart(response.data); // Update the cart state with fetched data
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
  
    fetchCartItems();
  }, [username]);

  // Fetch cart item
  const fetchCartItem = async () => {
    try {
      const response = await axios.get(`https://bookhaven1.onrender.com/cart?username=${username}`, {
        params: { username },
      });
      setCart(response.data); // Update the cart state with fetched data
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  // Update an item's quantity
  const handleEdit = async (id) => {
    try {
      await axios.put(`https://bookhaven1.onrender.com/cart`, { id: id, quantity: editQuantity });
      fetchCartItem();
      setEditItemId(null); // Close the edit mode
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  // Delete an item from the cart
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this item?');
    if (!isConfirmed) return; // Exit if user cancels the confirmation

    try {
      await axios.delete('https://bookhaven1.onrender.com/cartDel', { data: { id } });
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
    fetchCartItem();
  };

  // Calculate the total price of all items in the cart
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Navigate to the Buy Now page
  const handleBuyNow = () => {
    navigate('/first-page/buy-now', { state: { cart, total } });
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
  };

  const thStyle = {
    padding: '12px 15px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    textAlign: 'center',
  };

  const tdStyle = {
    padding: '12px 15px',
    textAlign: 'center',
    border: '1px solid #ddd',
    verticalAlign: 'middle',
  };

  const buttonStyle = {
    marginRight: '10px',
    padding: '8px 12px',
    fontSize: '14px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hoverEffect = {
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h3 style={{ color: '#333', marginBottom: '20px' }}>Shopping Cart</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>Quantity</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Total</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={tdStyle}>{item.title}</td>
                  <td style={tdStyle}>
                    {editItemId === item.id ? (
                      <input
                        type="number"
                        value={editQuantity}
                        min="1"
                        onChange={(e) => setEditQuantity(Number(e.target.value))}
                        style={{
                          width: '60px',
                          padding: '5px',
                          textAlign: 'center',
                          borderRadius: '4px',
                          border: '1px solid #ddd',
                        }}
                      />
                    ) : (
                      item.quantity
                    )}
                  </td>
                  <td style={tdStyle}>${item.price.toFixed(2)}</td>
                  <td style={tdStyle}>${(item.price * item.quantity).toFixed(2)}</td>
                  <td style={tdStyle}>
                    {editItemId === item.id ? (
                      <>
                        <button
                          style={{
                            ...buttonStyle,
                            backgroundColor: '#28a745',
                            color: 'white',
                          }}
                          onClick={() => handleEdit(item.id)}
                        >
                          Save
                        </button>
                        <button
                          style={{
                            ...buttonStyle,
                            backgroundColor: '#6c757d',
                            color: 'white',
                          }}
                          onClick={() => setEditItemId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          style={{
                            ...buttonStyle,
                            backgroundColor: '#007bff',
                            color: 'white',
                          }}
                          onClick={() => {
                            setEditItemId(item.id);
                            setEditQuantity(item.quantity);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          style={{
                            ...buttonStyle,
                            backgroundColor: '#dc3545',
                            color: 'white',
                          }}
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 style={{ color: '#333', marginTop: '20px' }}>
            Total: ${total.toFixed(2)}
          </h4>
          <button
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '12px 20px',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              marginTop: '20px',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease',
            }}
            disabled={cart.length === 0}
            onClick={handleBuyNow}
          >
            <Link to='/first-page/buy-now' style={{textDecoration:'none',color:'white'}}>
            Buy Now
            </Link>
           
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
