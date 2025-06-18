import React from 'react';
import Home from './Home';
import Sidebar from './Sidebar'; // make sure name matches your file

const Layout = () => {
  return (
    <>
      <div className="w-full mx-auto h-full flex gap-[2%] flex-wrap content-start">
        {/* Sidebar (only shown on md and above) */}
        <div className="w-1/4 h-full max-lg:hidden">
          <Sidebar />
        </div>

        {/* Home (takes remaining space) */}
        <div className="grow h-full">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
