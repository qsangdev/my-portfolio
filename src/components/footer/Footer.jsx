import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">QS</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/ngqngsng"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="ui uil-instagram"></i>
          </a>
          <a
            href="https://github.com/qsangdev"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="https://fb.com/shenlong.sang"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; QS. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
