import React from 'react';
import Head from './Head';

const Layaut = ({ children }) => {
  return (
    <div>
      <Head />
      {children}
    </div>
  );
};

export default Layaut;
