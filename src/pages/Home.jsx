import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import './Home.css'; // Add your CSS file here if necessary
import FirstPage from './FirstPage';

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


function Home() {
  const [filters, setFilters] = useState({ maxPrice: '', minRating: '' });
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const { maxPrice, minRating } = filters;
    const price = parseFloat(maxPrice) || Infinity;
    const rating = parseFloat(minRating) || 0;

    const filtered = booksData.filter(
      (book) => book.price <= price && book.rating >= rating
    );
    setFilteredBooks(filtered);
  };

  const removeFilters = () => {
    setFilters({ maxPrice: '', minRating: '' });
    setFilteredBooks(booksData);
  };

  const styles = {
    container: {
      padding: '20px',
    },
    filterSection: {
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column', // Stack inputs and buttons in a column by default
      alignItems: 'center',
    },
    filterWrapper: {
      display: 'flex',
      flexDirection: 'row', // Align inputs and buttons horizontally by default
      justifyContent: 'center',
      flexWrap: 'wrap', // Allow wrapping on smaller screens
      gap: '15px', // Add some space between elements
    },
    inputField: {
      padding: '10px',
      margin: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '200px',
    },
    button: {
      padding: '10px 20px',
      margin: '5px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    applyButton: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
    removeButton: {
      backgroundColor: '#6c757d',
      color: '#fff',
    },
    bookList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    noBooksMessage: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#888',
      marginTop: '30px',
    },
    bookCardContainer: {
      margin: '20px',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    bookCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div style={styles.container}>
      {/* Filters Section */}
      <div style={styles.filterSection}>
        <div style={styles.filterWrapper}>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            style={styles.inputField}
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="minRating"
            placeholder="Min Rating"
            style={styles.inputField}
            value={filters.minRating}
            onChange={handleFilterChange}
          />
          <button
            style={{ ...styles.button, ...styles.applyButton }}
            onClick={applyFilters}
          >
            Apply Filters
          </button>
          <button
            style={{ ...styles.button, ...styles.removeButton }}
            onClick={removeFilters}
          >
            Remove Filters
          </button>
        </div>
      </div>

      {/* Book List Section */}
      <div style={styles.bookList}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              style={styles.bookCardContainer}
              onMouseOver={(e) => e.currentTarget.style.transform = styles.bookCardHover.transform}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <p style={styles.noBooksMessage}>No books match the filter criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Home;