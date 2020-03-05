import React from 'react';

const MiddleInner = () => (
  <div className="middle-inner">
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-12">
          {/* <!-- Logo --> */}
          <div className="logo">
            <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
          </div>
          {/* <!--/ End Logo --> */}
          {/* <!-- Search Form --> */}
          <div className="search-top">
            <div className="top-search"><a href="#0" aria-label="search"><i className="ti-search" /></a></div>
            {/* <!-- Search Form --> */}
            <div className="search-top">
              <form className="search-form">
                <input type="text" placeholder="Search here..." name="search" />
                <button value="search" type="button" aria-label="search"><i className="ti-search" /></button>
              </form>
            </div>
            {/* <!--/ End Search Form --> */}
          </div>
          {/* <!--/ End Search Form --> */}
          <div className="mobile-nav" />
        </div>
        <div className="col-lg-8 col-md-7 col-12">
          <div className="search-bar-top">
            <div className="search-bar">
              <select>
                <option selected="selected">All Category</option>
                <option>watch</option>
                <option>mobile</option>
                <option>kid’s item</option>
              </select>
              <form>
                <input name="search" placeholder="Search Products Here....." type="search" />
                <button type="button" className="btnn" aria-label="search"><i className="ti-search" /></button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-12">
          <div className="right-bar">
            {/* <!-- Search Form --> */}
            <div className="sinlge-bar">
              <a href="#cart" className="single-icon"><i className="fa fa-heart-o" aria-label="search" /* aria-hidden="true" */ /></a>
            </div>
            <div className="sinlge-bar">
              <a href="#cart" className="single-icon"><i className="fa fa-user-circle-o" aria-label="search" /* aria-hidden="true" */ /></a>
            </div>
            <div className="sinlge-bar shopping">
              <a href="#cart" className="single-icon">
                <i className="ti-bag" />
                {' '}
                <span className="total-count">2</span>
              </a>
              {/* <!-- Shopping Item --> */}
              <div className="shopping-item">
                <div className="dropdown-cart-header">
                  <span>2 Items</span>
                  <a href="#cart">View Cart</a>
                </div>
                <ul className="shopping-list">
                  <li>
                    <a href="#remove" className="remove" title="Remove this item" aria-label="search"><i className="fa fa-remove" /></a>
                    <a className="cart-img" href="#remove"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                    <h4><a href="#ring">Woman Ring</a></h4>
                    <p className="quantity">
                      1x -
                      <span className="amount">&#8358;99.00</span>
                    </p>
                  </li>
                  <li>
                    <a href="#remove" className="remove" title="Remove this item" aria-label="search"><i className="fa fa-remove" /></a>
                    <a className="cart-img" href="#remove"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                    <h4><a href="#woman">Woman Necklace</a></h4>
                    <p className="quantity">
                      1x -
                      <span className="amount">&#8358;35.00</span>
                    </p>
                  </li>
                </ul>
                <div className="bottom">
                  <div className="total">
                    <span>Total</span>
                    <span className="total-amount">&#8358;134.00</span>
                  </div>
                  <a href="checkout.html" className="btn animate">Checkout</a>
                </div>
              </div>
              {/* <!--/ End Shopping Item --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MiddleInner;
