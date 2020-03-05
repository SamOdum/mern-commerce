import React from 'react';

const Footer = () => (
  <footer className="footer">
    { /* <!-- Footer Top --> */ }
    <div className="footer-top section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12">
            { /* <!-- Single Widget --> */ }
            <div className="single-footer about">
              <div className="logo">
                <a href="index.html"><img src="images/logo2.png" alt="#" /></a>
              </div>
              <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
              <p className="call">
                Got Question? Call us 24/7
                <span><a href="tel:123456789">+234 (803) 801-582-4554</a></span>
              </p>
            </div>
            { /* <!-- End Single Widget --> */ }
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            { /* <!-- Single Widget --> */ }
            <div className="single-footer links">
              <h4>Information</h4>
              <ul>
                <li><a href="#0" aria-label="">About Us</a></li>
                <li><a href="#0" aria-label="">Faq</a></li>
                <li><a href="#0" aria-label="">Terms & Conditions</a></li>
                <li><a href="#0" aria-label="">Contact Us</a></li>
                <li><a href="#0" aria-label="">Help</a></li>
              </ul>
            </div>
            { /* <!-- End Single Widget --> */ }
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            { /* <!-- Single Widget --> */ }
            <div className="single-footer links">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#0" aria-label="">Payment Methods</a></li>
                <li><a href="#0" aria-label="">Money-back</a></li>
                <li><a href="#0" aria-label="">Returns</a></li>
                <li><a href="#0" aria-label="">Shipping</a></li>
                <li><a href="#0" aria-label="">Privacy Policy</a></li>
              </ul>
            </div>
            { /* <!-- End Single Widget --> */ }
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            { /* <!-- Single Widget --> */ }
            <div className="single-footer social">
              <h4>Get In Tuch</h4>
              { /* <!-- Single Widget --> */ }
              <div className="contact">
                <ul>
                  <li>12 - 4th Ave, State Housing Estate.</li>
                  <li>Calabar, Nigeria.</li>
                  <li>info@crmart.com</li>
                  <li>+234 (803) 801-582-4554</li>
                </ul>
              </div>
              { /* <!-- End Single Widget --> */ }
              <ul>
                <li><a href="#0" aria-label="facebook"><i className="ti-facebook" /></a></li>
                <li><a href="#0" aria-label="twitter"><i className="ti-twitter" /></a></li>
                <li><a href="#0" aria-label="google plus"><i className="ti-google" /></a></li>
                <li><a href="#0" aria-label="instagram"><i className="ti-instagram" /></a></li>
              </ul>
            </div>
            { /* <!-- End Single Widget --> */ }
          </div>
        </div>
      </div>
    </div>
    { /* <!-- End Footer Top --> */ }
    <div className="copyright">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="left">
                <p>
                  Copyright © 2020
                  <a href="http://www.crmart.com" target="_blank" rel="noopener noreferrer"> CR-Mart</a>
                  {' '}
                  -  All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="right">
                <img src="images/payments.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
