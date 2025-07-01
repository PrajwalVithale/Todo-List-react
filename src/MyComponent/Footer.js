import React from 'react';

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    padding: "15px 0",
    borderTop: "1px solid #495057",
    textAlign: "center"
  };

  return (
    <footer style={footerStyle} className="footer-animate">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p className="mb-1">&copy; {new Date().getFullYear()} Prajwal's Todo App</p>
        <p className="mb-0">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffc107", textDecoration: "none" }}
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
