import React from 'react';
// import './TopBar.scss';

const Topbar = () => (
  <div className="topbar">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-12">
          {/* <!-- Top Left --> */}
          <div className="top-left">
            <ul className="list-main">
              <li>
                <i className="ti-headphone-alt" />
                {' '}
                +234 (803) 801-582-4554
              </li>
              <li>
                <i className="ti-email" />
                {' '}
                support@crmart.com
              </li>
            </ul>
          </div>
          {/* <!--/ End Top Left --> */}
        </div>
        <div className="col-lg-7 col-md-12 col-12">
          {/* <!-- Top Right --> */}
          <div className="right-content">
            <ul className="list-main">
              <li>
                <i className="ti-location-pin" />
                {' '}
                Store location
              </li>
              <li>
                <i className="ti-alarm-clock" />
                {' '}
                <a href="#daily-deal">Daily deal</a>
              </li>
              <li>
                <i className="ti-user" />
                {' '}
                <a href="#my-account">My account</a>
              </li>
              <li>
                <i className="ti-power-off" />
                <a href="login.html#">Login</a>
              </li>
            </ul>
          </div>
          {/* <!-- End Top Right --> */}
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
