import React from "react";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container-left">
        <div className="footer-container-left-heading-container">
          <h3 className="footer-container-heading">
            Let's connect and grab a coffee ☕
          </h3>
        </div>

        <p className="footer_inquiries">
          Drop me a line for work inquiries or just say hello
        </p>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQjHJKXJrWRHrKFmJWmPKVSnljKlkFtJzwMGBZtSgmMJXdDrJWvqLPHzBjbrpsZZRxdq"
          target="_blank"
          rel="noreferrer"
          className="footer_mail"
        >
          rajanpandey865@.com
        </a>

        <p className="footer_develop">
          Developed with 💙 and a firey 🔥 macbook 💻 by Rajan Pandey
        </p>
      </div>
      <div className="footer_container-right">
        <div className="footer_container-right-link">
          <a href="/" className="footer_links">
            About
          </a>
          <a href="/" className="footer_links">
            Projects
          </a>
          <a
            href="https://medium.com/"
            rel="noreferrer"
            target="_blank"
            className="footer_links"
          >
            Blog
          </a>
        </div>
        <div className="footer_container-right-icons">
          <a
            href="https://github.com/rajan2001"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={process.env.PUBLIC_URL + "src/github.svg"}
              alt="githubIcons"
            />
          </a>
          <a
            href="https://www.instagram.com/r.a.jzz/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={process.env.PUBLIC_URL + "src/instagram.svg"}
              alt="InstaIcons"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rajan-pandey-838069218/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={process.env.PUBLIC_URL + "src/linkedin.svg"}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
