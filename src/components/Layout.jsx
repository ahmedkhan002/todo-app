import React from 'react';
import Home from './Home';
import Sidebar from './Sidebar'; 

const Layout = () => {
  return (
    <>
      <div className="w-full mx-auto h-full flex gap-[2%] flex-wrap content-start">
        <div className="w-1/4 h-full max-lg:hidden">
          <Sidebar />
        </div>

        <div className="grow h-full">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
