/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const InfoIcon = ({ iconClass, iconContent }) => (
  <li>
    <span className={iconClass} />
    {iconContent}
  </li>
);

export const InfoIconLink = ({ dest, iconClass, iconContent }) => (
  <li>
    <Link to={dest}>
      <span className={iconClass} />
      {iconContent}
    </Link>
  </li>
);

export default InfoIcon;
