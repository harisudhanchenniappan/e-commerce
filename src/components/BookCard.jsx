import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  const styles = {
    cardContainer: {
      width: '18rem',
      marginBottom: '2rem',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderBottom: '1px solid #ddd',
    },
    cardBody: {
      padding: '1.5rem',
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '0.5rem',
    },
    cardText: {
      fontSize: '1rem',
      color: '#666',
      margin: '0.3rem 0',
    },
    price: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#007bff',
      margin: '0.5rem 0',
      marginBottom:'10px'
    },
    button: {
      backgroundColor: '#007bff',
      margin:'2px',
      color: '#fff',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    cardContainerHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    }
  };

  return (
    <div 
      className="card h-100" 
      style={styles.cardContainer}
      onMouseOver={(e) => e.currentTarget.style.transform = styles.cardContainerHover.transform}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img 
        src={book.image} 
        className="card-img-top" 
        alt={book.title} 
        style={styles.cardImage} 
      />
      <div className="card-body" style={styles.cardBody}>
        <h5 className="card-title" style={styles.cardTitle}>{book.title}</h5>
        <p className="card-text" style={styles.cardText}>Author: {book.author}</p>
        <p className="card-text" style={styles.cardText}>Rating: {book.rating}</p>
        <p className="card-text" style={styles.cardText}>Price: <span style={styles.price}>${book.price.toFixed(2)}</span></p>
        <div style={{margin:'20px'}}>
        <Link 
          to={`/first-page/book/${book.id}`} 
          className="btn btn-primary" 
          style={styles.button}
          
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          View Details
        </Link>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
