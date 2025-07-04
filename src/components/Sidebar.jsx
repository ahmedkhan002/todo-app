import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activebutton } from '../store/logic/logic';

const Sidebar = () => {
  const isActive = useSelector((state) => state.todo.activebutton);
  const dispatch = useDispatch();

  return (
    <div
      className="hidden lg:flex fixed left-0 top-0 h-screen max-w-[300px] min-w-[250px] bg-white z-10 flex-col items-center justify-center gap-6 text-white text-lg px-4"
      style={{ boxShadow: '4px 0 12px rgba(0, 0, 0, 0.1)' }}
    >
      <button
        onClick={() => !isActive && dispatch(activebutton('Completed'))}
        className={`bg-lime-500 w-full h-12 rounded-xl transition-all duration-300 hover:scale-105 font-semibold ${
          isActive ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => !isActive && dispatch(activebutton('Edit'))}
        className={`bg-blue-600 w-full h-12 rounded-xl transition-all duration-300 hover:scale-105 font-semibold ${
          isActive ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        }`}
      >
        Edit
      </button>

      <button
        onClick={() => !isActive && dispatch(activebutton('Delete'))}
        className={`bg-red-600 w-full h-12 rounded-xl transition-all duration-300 hover:scale-105 font-semibold ${
          isActive ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        }`}
      >
        Delete
      </button>

      <button
        onClick={() => !isActive && dispatch(activebutton('History'))}
        className={`bg-gray-600 w-full h-12 rounded-xl transition-all duration-300 hover:scale-105 font-semibold ${
          isActive ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        }`}
      >
        History
      </button>
    </div>
  );
};

export default Sidebar;
