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
        <a
          href="https://ar.pinterest.com/Thenewblackisblack/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="social-icon"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.65 8.89 8.44 9.72-.03-.69-.06-1.75.1-2.47.14-.48.57-.98 1.1-.98 1.44 0 2.57-1.26 2.57-3.07 0-2.15-1.49-3.07-2.97-3.07-1.44 0-2.42 1.01-2.42 2.41 0 .95.36 1.58.94 1.58.57 0 1.03-.29 1.03-.96 0-.45-.2-.77-.51-.77-.23 0-.44.17-.44.48 0 .63.39 1.03.97 1.03.5 0 .91-.42.91-.96 0-1.14-.78-2.03-2.05-2.03-1.56 0-2.52 1.11-2.52 2.53 0 .95.33 1.62 1.06 1.62 1.15 0 2.03-.93 2.03-2.06 0-.78-.56-1.45-1.48-1.45-1.06 0-1.84.86-1.84 2.05 0 .64.26 1.17.73 1.17 1.15 0 1.96-1.37 1.96-2.63 0-2.04-1.78-3.5-3.53-3.5z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
