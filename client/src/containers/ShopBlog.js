import React from 'react';

const ShopBlog = () => (
  <section className="shop-blog section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>From Our Blog</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          { /* <!-- Start Single Blog  --> */ }
          <div className="shop-single-blog">
            <img src="https://via.placeholder.com/370x300" alt="#" />
            <div className="content">
              <p className="date">22 July , 2020. Monday</p>
              <a href="#0" className="title">Sed adipiscing ornare.</a>
              <a href="#0" className="more-btn">Continue Reading</a>
            </div>
          </div>
          { /* <!-- End Single Blog  --> */ }
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          { /* <!-- Start Single Blog  --> */ }
          <div className="shop-single-blog">
            <img src="https://via.placeholder.com/370x300" alt="#" />
            <div className="content">
              <p className="date">22 July, 2020. Monday</p>
              <a href="#0" className="title">Man’s Fashion Winter Sale</a>
              <a href="#0" className="more-btn">Continue Reading</a>
            </div>
          </div>
          { /* <!-- End Single Blog  --> */ }
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          { /* <!-- Start Single Blog  --> */ }
          <div className="shop-single-blog">
            <img src="https://via.placeholder.com/370x300" alt="#" />
            <div className="content">
              <p className="date">22 July, 2020. Monday</p>
              <a href="#0" className="title">Women Fashion Festive</a>
              <a href="#0" className="more-btn">Continue Reading</a>
            </div>
          </div>
          { /* <!-- End Single Blog  --> */ }
        </div>
      </div>
    </div>
  </section>
);

export default ShopBlog;
