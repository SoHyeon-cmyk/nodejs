import React from 'react';
import { Outlet } from 'react-router-dom';

const New = () => {
  return (
    <div>
      <h4>새상품</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default New;