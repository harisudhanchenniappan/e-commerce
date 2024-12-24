import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const booksData = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.7, price: 10.99, summary: 'A novel set in the Jazz Age.', image: 'https://via.placeholder.com/150' },
  { id: 2, title: '1984', author: 'George Orwell', rating: 4.9, price: 12.99, summary: 'A dystopian novel about totalitarianism.', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.8, price: 8.99, summary: 'A story of racial injustice.', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.6, price: 9.99, summary: 'A romantic novel of manners.', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.3, price: 11.99, summary: 'A story about teenage rebellion.', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Moby-Dick', author: 'Herman Melville', rating: 4.1, price: 14.99, summary: 'A quest for vengeance against a white whale.', image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', rating: 4.9, price: 13.99, summary: 'An adventure in Middle-earth.', image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'War and Peace', author: 'Leo Tolstoy', rating: 4.8, price: 19.99, summary: 'A story of Russian society during the Napoleonic era.', image: 'https://via.placeholder.com/150' },
  { id: 9, title: 'Brave New World', author: 'Aldous Huxley', rating: 4.7, price: 10.99, summary: 'A dystopian novel about a futuristic society.', image: 'https://via.placeholder.com/150' },
  { id: 10, title: 'The Alchemist', author: 'Paulo Coelho', rating: 4.5, price: 9.99, summary: 'A journey of self-discovery.', image: 'https://via.placeholder.com/150' },
  { id: 11, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', rating: 4.8, price: 16.99, summary: 'A psychological exploration of guilt.', image: 'https://via.placeholder.com/150' },
  { id: 12, title: 'The Odyssey', author: 'Homer', rating: 4.7, price: 12.49, summary: 'An epic journey of a hero.', image: 'https://via.placeholder.com/150' },
  { id: 13, title: 'Jane Eyre', author: 'Charlotte Brontë', rating: 4.6, price: 8.99, summary: 'A story of resilience and love.', image: 'https://via.placeholder.com/150' },
  { id: 14, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', rating: 4.5, price: 10.49, summary: 'A tale of vanity and moral corruption.', image: 'https://via.placeholder.com/150' },
  { id: 15, title: 'Wuthering Heights', author: 'Emily Brontë', rating: 4.3, price: 11.49, summary: 'A story of passionate but doomed love.', image: 'https://via.placeholder.com/150' },
  { id: 16, title: 'Les Misérables', author: 'Victor Hugo', rating: 4.8, price: 17.99, summary: 'A tale of injustice and redemption.', image: 'https://via.placeholder.com/150' },
  { id: 17, title: 'Animal Farm', author: 'George Orwell', rating: 4.8, price: 8.99, summary: 'A satirical allegory about power.', image: 'https://via.placeholder.com/150' },
  { id: 18, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', rating: 4.9, price: 18.49, summary: 'A philosophical exploration of morality.', image: 'https://via.placeholder.com/150' },
  { id: 19, title: 'A Tale of Two Cities', author: 'Charles Dickens', rating: 4.6, price: 9.99, summary: 'A novel of sacrifice during the French Revolution.', image: 'https://via.placeholder.com/150' },
  { id: 20, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', rating: 4.9, price: 22.99, summary: 'An epic fantasy adventure.', image: 'https://via.placeholder.com/150' },
];

function BookDetails() {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
  }, []);

  const handleAddToCart = () => {
    axios.post('http://localhost:4000/addToCart', {
      id: (Math.random() * 10000).toFixed(0),
      title: book.title,
      price: book.price,
      quantity: quantity,
      username: username,
    });
    window.alert(`Added ${quantity} of ${book.title} to the cart`);
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '20px',
    },
    col: {
      flex: '1',
      minWidth: '300px',
    },
    image: {
      maxWidth: '100%',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    details: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
    },
    detailText: {
      margin: '10px 0',
      fontSize: '1.1rem',
      color: '#555',
    },
    quantityInput: {
      width: '80px',
      padding: '8px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{book.title}</h1>
      <div style={styles.row}>
        <div style={styles.col}>
          <img src={book.image} alt={book.title} style={styles.image} />
        </div>
        <div style={styles.col}>
          <div style={styles.details}>
            <p style={styles.detailText}><strong>Author:</strong> {book.author}</p>
            <p style={styles.detailText}><strong>Rating:</strong> {book.rating}</p>
            <p style={styles.detailText}><strong>Price:</strong> ${book.price.toFixed(2)}</p>
            <p style={styles.detailText}><strong>Summary:</strong> {book.summary}</p>
            <div style={styles.detailText}>
              <label>Quantity:</label>
              <input
                type="number"
                style={styles.quantityInput}
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <button
              onClick={handleAddToCart}
              style={styles.button}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
