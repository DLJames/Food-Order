import React from 'react';

const defaultContext = {
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {}
};

export default React.createContext(defaultContext);

