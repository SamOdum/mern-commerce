import React from 'react';

import './App.scss';
import Header from './containers/Header';
import HeroSlider from './containers/HeroSlider';
import SmallBanner from './containers/SmallBanner';
import ProductArea from './containers/ProductArea';
import MediumBanner from './containers/MediumBanner';
import MostPopular from './containers/MostPopular';
import ShopHomeList from './containers/ShopHomeList';
import CountDown from './containers/CountDown';
import ShopBlog from './containers/ShopBlog';
import ShopServices from './containers/ShopServices';
import ShopNewsletter from './containers/ShopNewsletter';
import Footer from './containers/Footer';
import HeaderInner from './components/HeaderInner';

const App = () => (
  <>
    <Header />
    <HeaderInner />
    <HeroSlider />
    <SmallBanner />
    <ProductArea />
    <MediumBanner />
    <MostPopular />
    <ShopHomeList />
    <CountDown />
    <ShopBlog />
    <ShopServices />
    <ShopNewsletter />
    <Footer />
  </>
);

export default App;
