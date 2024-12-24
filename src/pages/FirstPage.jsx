import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      localStorage.removeItem('username'); // Remove username from localStorage
      alert('You have been signed out.');
      navigate('/'); // Redirect to Home or Login page
    }
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '2px solid #ddd',
    },
    storeName: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      margin: 0,
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
    },
    link: {
      textDecoration: 'none',
      color: '#007bff',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#0056b3',
    },
    signOutButton: {
      backgroundColor: 'transparent',
      border: '1px solid #dc3545',
      color: '#dc3545',
      fontWeight: 'bold',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
    },
    signOutHover: {
      backgroundColor: '#dc3545',
      color: '#fff',
    },
    outletContainer: {
      padding: '2rem',
    },
  };

  return (
    <>
      <nav style={styles.navbar}>
        {/* Left: Store Name */}
        <h1 style={styles.storeName}>Book Haven</h1>

        {/* Right: Navigation Links */}
        <div style={styles.navLinks}>
          <Link
            to="/first-page"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = styles.link.color)}
          >
            Home
          </Link>
          <Link
            to="/first-page/cart"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = styles.link.color)}
          >
            Cart
          </Link>
          <Link
            to="/first-page/orders"
            style={styles.link}
            onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
            onMouseOut={(e) => (e.target.style.color = styles.link.color)}
          >
            Your Orders
          </Link>
          <button
            style={styles.signOutButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = styles.signOutHover.backgroundColor;
              e.target.style.color = styles.signOutHover.color;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = styles.signOutButton.backgroundColor;
              e.target.style.color = styles.signOutButton.color;
            }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </nav>
      <div style={styles.outletContainer}>
        <Outlet />
      </div>
    </>
  );
}

export default FirstPage;
