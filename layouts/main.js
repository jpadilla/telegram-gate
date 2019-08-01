import '../styles/app.css';

import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => (
  <div className="container mx-auto px-2 py-4 sm:p-0">
    <div className="flex flex-col justify-center">
      <div className="container mx-auto max-w-2xl">{children}</div>
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default React.memo(MainLayout);
