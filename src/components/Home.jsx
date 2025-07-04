import React, { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from '@mui/material';
import { add, toggleSelected, handleActions, updateText, activebutton } from '../store/logic/logic';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const [inpValue, setinpValue] = useState('');
  const todoitem = useSelector((state) => state.todo.value);
  const history = useSelector((state) => state.todo.history);
  const newitem = useSelector((state) => state.todo.newValue);
  const isActive = useSelector((state) => state.todo.activebutton)
  const dispatch = useDispatch();

  useEffect(() => {
    if (newitem) {
      setinpValue(newitem)
    }
  }, [newitem]);

  const handleActionDone = () => {
    dispatch(handleActions())
    if (isActive !== 'Edit') {
      dispatch(activebutton(null))
    }
  }

  return (
    <div className="flex flex-col gap-6 items-center w-full my-10 px-4 pt-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-center">
        TaskFlow
      </h1>

      <div className="flex items-center gap-2 w-full max-w-md bg-white p-2 rounded-2xl border-2 border-blue-600 shadow-md">
        <span className="text-3xl font-bold select-none mb-2 text-slate-500">+</span>
        <input
          className="w-full h-full outline-none"
          onChange={(e) => setinpValue(e.target.value)}
          value={inpValue}
          placeholder="Add New Task"
        />

        {isActive === 'Edit' ? (
          <Button
            onClick={() => {
              if (inpValue.trim()) {
                dispatch(updateText(inpValue));
                setinpValue('');
                dispatch(activebutton(null));
              }
            }}
            variant="contained"
            color="success"
            sx={{ height: '100%' }}
          >
            Update
          </Button>
        ) :
          <Button
            onClick={() => {
              if (inpValue.trim()) {
                dispatch(add(inpValue));
                setinpValue('');
              }
            }}
            variant="contained"
            color="primary"
            sx={{ height: '100%' }}
          >
            ADD
          </Button>}

      </div>

      <div className="hidden max-lg:flex flex-row justify-center max-sm:gap-5 flex-wrap gap-10 text-white font-semibold">

        <button
          onClick={() => !isActive && dispatch(activebutton('Completed'))}
          className={`
      w-[100px] h-12 rounded-xl transition-all duration-300 hover:scale-105
      bg-lime-500
      ${isActive && isActive !== 'Completed' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    `}
        >
          Completed
        </button>

        <button
          onClick={() => !isActive && dispatch(activebutton('Edit'))}
          className={`
      w-[100px] h-12 rounded-xl transition-all duration-300 hover:scale-105
      bg-blue-600
      ${isActive && isActive !== 'Edit' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    `}
        >
          Edit
        </button>

        <button
          onClick={() => !isActive && dispatch(activebutton('Delete'))}
          className={`
      w-[100px] h-12 rounded-xl transition-all duration-300 hover:scale-105
      bg-red-600
      ${isActive && isActive !== 'Delete' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    `}
        >
          Delete
        </button>

        <button
          onClick={() => !isActive && dispatch(activebutton('History'))}
          className={`
      w-[100px] h-12 rounded-xl transition-all duration-300 hover:scale-105
      bg-gray-600
      ${isActive && isActive !== 'History' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    `}
        >
          History
        </button>

      </div>


      {isActive !== null &&
        <div className='relative w-full overflow-hidden my-2 gap-5 z-100 h-15 flex justify-center'>
          <div className='flex justify-center items-center cursor-pointer border-1 rounded-2xl hover:text-white hover:bg-blue-600 h-[80%] text-blue-600 transition-all w-20 px-5 font-semibold my-2' onClick={handleActionDone}>{isActive === 'History' ? 'Delete' : 'Done'}</div>
          <div className='flex justify-center items-center cursor-pointer border-1 rounded-2xl hover:text-white hover:bg-red-600 h-[80%] text-red-600 transition-all w-20 px-5 font-semibold my-2' onClick={() => dispatch(activebutton(null))}>Cancel</div>
        </div>
      }
      <div className="w-full max-w-6xl relative h-[300px]">
        <div
          className="h-full overflow-y-auto custom-scroll"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent)',
            maskImage: 'linear-gradient(to bottom, black 85%, transparent)',
          }}
        >

          <TableContainer component={Paper} className="shadow-xl">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {isActive !== null && <TableCell padding="checkbox" />}
                  <TableCell sx={{ fontWeight: 'bold' }}>No</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Task Description</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(isActive === 'History' ? history : todoitem).map((item, i) => ( 
                  <TableRow className={`${item.completed === true ? 'line-through' : ''}`} key={i}>
                    {isActive !== null && (
                      <TableCell padding="checkbox">
                        <Checkbox checked={item.selected || false} onChange={() => dispatch(toggleSelected(i))} />
                      </TableCell>
                    )}
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{item.text}</TableCell>
                    <TableCell>{item.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </div>
  );
};

export default Home;
