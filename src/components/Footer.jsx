import React from 'react';
import '../styles.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>© {currentYear} Biz Sale. All rights reserved.</p>
    </div>
  );
}

export default Footer;
