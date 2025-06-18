import React from 'react';

const Sidebar = () => {
  return (
    <div
      className="hidden lg:flex fixed left-0 top-0 h-screen max-w-[300px] min-w-[250px] bg-white z-10 flex-col items-center justify-center gap-6 text-white font-semibold text-lg px-4"
      style={{
        boxShadow: '4px 0 12px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <button className="bg-lime-500 w-full h-12 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90">
        Completed
      </button>
      <button className="bg-blue-600 w-full h-12 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90">
        Edit
      </button>
      <button className="bg-red-600 w-full h-12 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90">
        Delete
      </button>
      <button className="bg-gray-600 w-full h-12 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90">
        History
      </button>
    </div>
  );
};

export default Sidebar;
