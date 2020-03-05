import React from 'react';

const HeaderInner = () => (
  <div className="header shop">
    <div className="header-inner">
      <div className="container">
        <div className="cat-nav-head">
          <div className="row">
            <div className="col-lg-3">
              <div className="all-category">
                <h3 className="cat-heading">
                  <i className="fa fa-bars" aria-hidden="true" />
                  CATEGORIES
                </h3>
                <ul className="main-category">
                  <li>
                    <a href="#0">
                      New Arrivals
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </a>
                    <ul className="sub-category">
                      <li><a href="00">accessories</a></li>
                      <li><a href="00">best selling</a></li>
                      <li><a href="#0">top 100 offer</a></li>
                      <li><a href="#0">sunglass</a></li>
                      <li><a href="#0">watch</a></li>
                      <li><a href="#0">man’s product</a></li>
                      <li><a href="#0">ladies</a></li>
                      <li><a href="#0">westrn dress</a></li>
                      <li><a href="#0">denim </a></li>
                    </ul>
                  </li>
                  <li className="main-mega">
                    <a href="#0">
                      best selling
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </a>
                    <ul className="mega-menu">
                      <li className="single-menu">
                        <a href="#0" className="title-link">Shop Kid&apos;s</a>
                        <div className="image">
                          <img src="https://via.placeholder.com/225x155" alt="#0" />
                        </div>
                        <div className="inner-link">
                          <a href="#0">Kids Toys</a>
                          <a href="#0">Kids Travel Car</a>
                          <a href="#0">Kids Color Shape</a>
                          <a href="#0">Kids Tent</a>
                        </div>
                      </li>
                      <li className="single-menu">
                        <a href="#0" className="title-link">Shop Men&apos;s</a>
                        <div className="image">
                          <img src="https://via.placeholder.com/225x155" alt="#0" />
                        </div>
                        <div className="inner-link">
                          <a href="#0">Watch</a>
                          <a href="#0">T-shirt</a>
                          <a href="#0">Hoodies</a>
                          <a href="#0">Formal Pant</a>
                        </div>
                      </li>
                      <li className="single-menu">
                        <a href="#0" className="title-link">Shop Women&apos;s</a>
                        <div className="image">
                          <img src="https://via.placeholder.com/225x155" alt="#0" />
                        </div>
                        <div className="inner-link">
                          <a href="#0">Ladies Shirt</a>
                          <a href="#0">Ladies Frog</a>
                          <a href="#0">Ladies Sun Glass</a>
                          <a href="#0">Ladies Watch</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#0">accessories</a></li>
                  <li><a href="#0">top 100 offer</a></li>
                  <li><a href="#0">sunglass</a></li>
                  <li><a href="#0">watch</a></li>
                  <li><a href="#0">man’s product</a></li>
                  <li><a href="#0">ladies</a></li>
                  <li><a href="#0">westrn dress</a></li>
                  <li><a href="#0">denim </a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="menu-area">
                {/* <!-- Main Menu --> */ }
                <nav className="navbar navbar-expand-lg">
                  <div className="navbar-collapse">
                    <div className="nav-inner">
                      <ul className="nav main-menu menu navbar-nav">
                        <li className="active"><a href="#0">Home</a></li>
                        <li><a href="#0">Product</a></li>
                        <li><a href="#0">Service</a></li>
                        <li>
                          <a href="#0">
                            Shop
                            <i className="ti-angle-down" />
                            <span className="new">New</span>
                          </a>
                          <ul className="dropdown">
                            <li><a href="shop-grid.html">Shop Grid</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                          </ul>
                        </li>
                        <li><a href="#0">Pages</a></li>
                        <li>
                          <a href="#0">
                            Blog
                            <i className="ti-angle-down" />
                          </a>
                          <ul className="dropdown">
                            <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {/* <!--/ End Main Menu --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderInner;
