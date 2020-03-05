import React from 'react';
import Topbar from '../components/TopBar';
import MiddleInner from '../components/MiddleInner';
// import HeaderInner from './HeaderInner';

const Header = () => (
  <header className="header shop">
    <Topbar />
    <MiddleInner />
    {/* <HeaderInner /> */}
  </header>
);

export default Header;
