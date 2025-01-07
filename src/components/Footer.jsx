import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; 2025 The New Black is Black. Crafted with{" "}
        <span className="heart">❤️</span>.
      </p>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/thenewblack_isblack/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="social-icon"
          >
            <path d="M7.75 2C4.56 2 2 4.56 2 7.75v8.5C2 19.44 4.56 22 7.75 22h8.5c3.19 0 5.75-2.56 5.75-5.75v-8.5C22 4.56 19.44 2 16.25 2h-8.5zm0 1.5h8.5c2.09 0 3.75 1.66 3.75 3.75v8.5c0 2.09-1.66 3.75-3.75 3.75h-8.5C5.66 19.5 4 17.84 4 15.75v-8.5C4 4.66 5.66 3 7.75 3zm9 2.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-5.25 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 1.5a4 4 0 110 8 4 4 0 010-8z" />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@thenewblackisblack?_t=ZM-8srynoV2jED&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="social-icon"
          >
            <path d="M12 2a2.25 2.25 0 012.25 2.25v15a3.25 3.25 0 11-6.5 0V10h2.25v9.25a1 1 0 002 0v-15H14a5.25 5.25 0 105.25 5.25h-2A3.25 3.25 0 1114 7.75V4.25A2.25 2.25 0 0112 2z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
