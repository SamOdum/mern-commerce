import React from 'react';

const SmallBanner = () => (
  <section className="small-banner section">
    <div className="container-fluid">
      <div className="row">
        {/* <!-- Single Banner  --> */ }
        <div className="col-lg-4 col-md-6 col-12">
          <div className="single-banner">
            <img src="https://via.placeholder.com/600x370" alt="#" />
            <div className="content">
              <p>Man&apos;s Collectons</p>
              <h3>
                Summer travel
                <br />
                {' '}
                collection
              </h3>
              <a href="#0">Discover Now</a>
            </div>
          </div>
        </div>
        {/* <!-- /End Single Banner  --> */ }
        {/* <!-- Single Banner  --> */ }
        <div className="col-lg-4 col-md-6 col-12">
          <div className="single-banner">
            <img src="https://via.placeholder.com/600x370" alt="#" />
            <div className="content">
              <p>Bag Collectons</p>
              <h3>
                Awesome Bag
                <br />
                {' '}
                2020
              </h3>
              <a href="#0">Shop Now</a>
            </div>
          </div>
        </div>
        {/* <!-- /End Single Banner  --> */ }
        {/* <!-- Single Banner  --> */ }
        <div className="col-lg-4 col-12">
          <div className="single-banner tab-height">
            <img src="https://via.placeholder.com/600x370" alt="#" />
            <div className="content">
              <p>Flash Sale</p>
              <h3>
                Mid Season
                <br />
                {' '}
                Up to
                <span> 40%</span>
                {' '}
                Off
              </h3>
              <a href="#0">Discover Now</a>
            </div>
          </div>
        </div>
        {/* <!-- /End Single Banner  --> */ }
      </div>
    </div>
  </section>
);

export default SmallBanner;
