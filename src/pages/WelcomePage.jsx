import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function WelcomePage() {
  const styles = {
    container: {
      fontFamily: "'Roboto', sans-serif",
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      color: '#333',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      color: '#2c3e50',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    leadText: {
      color: '#7f8c8d',
      marginBottom: '2rem',
    },
    button: {
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '0.8rem 2rem',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none',
    },
    sectionTitle: {
      color: '#2980b9',
      fontWeight: 'bold',
      marginTop: '1.5rem',
      marginBottom: '1rem',
    },
    list: {
      paddingLeft: '1rem',
    },
    footer: {
      marginTop: '3rem',
      color: '#95a5a6',
    },
    socialLinks: {
      fontWeight: 'bold',
      color: '#3498db',
      textDecoration: 'none',
    },
  };

  return (
    <div className="container mt-5" style={styles.container}>
      <h1 className="text-center mb-4" style={styles.header}>
        Welcome to Book Haven
      </h1>
      <p className="text-center lead" style={styles.leadText}>
        Your one-stop destination for a world of books, where every page turns into an adventure!
      </p>

      <p className="text-center">
        <Link to={`/login-signup`} style={styles.button}>
          Login or Signup
        </Link>{' '}
        to start SHOPPING!!!
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <h3 style={styles.sectionTitle}>About Us</h3>
          <p>
            At <strong>Book Haven</strong>, we believe that books are more than just ink on paper. They are
            windows to new worlds, doors to adventures, and keys to knowledge. Whether you're a fiction
            fanatic, a non-fiction nerd, or just looking for your next great read, we have something for
            everyone.
          </p>
        </div>

        <div className="col-md-6">
          <h3 style={styles.sectionTitle}>Why Choose Us?</h3>
          <ul style={styles.list}>
            <li>Wide range of books across all genres.</li>
            <li>Handpicked collections by book lovers, for book lovers.</li>
            <li>Exciting discounts and offers on bestsellers.</li>
            <li>Fast and reliable delivery to your doorstep.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <h4 style={styles.sectionTitle}>Explore Our Collection</h4>
        <p style={styles.leadText}>
          Browse through our vast collection of books and discover your next favorite story. We promise you
          a seamless shopping experience, because at <strong>Book Haven</strong>, your satisfaction is our
          priority.
        </p>
      </div>

      <div className="text-center mt-5" style={styles.footer}>
        <h5>Contact Us</h5>
        <p>Email: <a href="mailto:support@bookhaven.com" style={styles.socialLinks}>support@bookhaven.com</a> | Phone: +1 (123) 456-7890</p>
        <p>
          Follow us on{' '}
          <a href="#" style={styles.socialLinks}>
            Facebook
          </a>{' '}
          |{' '}
          <a href="#" style={styles.socialLinks}>
            Twitter
          </a>{' '}
          |{' '}
          <a href="#" style={styles.socialLinks}>
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
