import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      padding: "2rem",
      backgroundColor: "#1f2937",
      color: "#ffffff",
      textAlign: "center",
      minHeight: "100vh",
    },
    hero: {
      padding: "3rem 1rem",
      backgroundColor: "#4f46e5",
      color: "#ffffff",
      borderRadius: "8px",
      marginBottom: "2rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    heroTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    heroText: {
      fontSize: "1.2rem",
      lineHeight: "1.6",
      marginBottom: "2rem",
    },
    heroButton: {
      backgroundColor: "#e11d48",
      color: "#ffffff",
      padding: "0.8rem 2rem",
      fontSize: "1.2rem",
      fontWeight: "bold",
      borderRadius: "8px",
      textDecoration: "none",
      transition: "transform 0.2s ease, background-color 0.3s ease",
    },
    featuresContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      marginTop: "2rem",
    },
    featureCard: {
      backgroundColor: "#374151",
      padding: "1.5rem",
      borderRadius: "8px",
      textAlign: "left",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    featureTitle: {
      color: "#facc15",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    featureText: {
      color: "#d1d5db",
      fontSize: "1rem",
    },
    footer: {
      marginTop: "3rem",
      padding: "2rem 1rem",
      backgroundColor: "#111827",
      color: "#9ca3af",
      textAlign: "center",
    },
    footerLink: {
      color: "#e11d48",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to Book Haven</h1>
        <p style={styles.heroText}>
          Discover the joy of reading with a curated collection of books for every genre. Whether you’re a
          casual reader or a bibliophile, Book Haven is your perfect destination.
        </p>
        <Link to="/login-signup" style={styles.heroButton}>
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <h2>Why Choose Book Haven?</h2>
      <div style={styles.featuresContainer}>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>📚 Extensive Collection</h3>
          <p style={styles.featureText}>
            Browse thousands of titles across fiction, non-fiction, and more. Find your next great read today.
          </p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>💰 Exclusive Discounts</h3>
          <p style={styles.featureText}>
            Enjoy unbeatable prices and special offers on top-selling books every day.
          </p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>🚚 Quick Delivery</h3>
          <p style={styles.featureText}>
            Get your favorite books delivered to your doorstep with fast and reliable service.
          </p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureTitle}>❤️ Curated Picks</h3>
          <p style={styles.featureText}>
            Discover handpicked recommendations tailored to your taste by our team of book enthusiasts.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>Contact us at <a href="mailto:support@bookhaven.com" style={styles.footerLink}>support@bookhaven.com</a></p>
        <p>Follow us on <a href="#" style={styles.footerLink}>Facebook</a>, <a href="#" style={styles.footerLink}>Twitter</a>, and <a href="#" style={styles.footerLink}>Instagram</a>.</p>
        <p>© 2025 Book Haven. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default WelcomePage;
