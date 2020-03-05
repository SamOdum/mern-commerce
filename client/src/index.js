import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// const title = 'React Webpack Babel Starter';

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
);

module.hot.accept();
