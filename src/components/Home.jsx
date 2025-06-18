import React from 'react';
import {
  TextField,
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

const tasks = [
  { id: 1, description: 'The Sliding Mr. Bones (Next Stop, Pottersville)', created: 'Malcolm Lockyer' },
  { id: 2, description: 'Witchy Woman', created: 'The Eagles' },
  { id: 3, description: 'Shining Star', created: 'Earth, Wind, and Fire' },
  { id: 4, description: 'Uptown Funk', created: 'Bruno Mars' },
  { id: 5, description: 'Bohemian Rhapsody', created: 'Queen' },
  { id: 6, description: 'Smells Like Teen Spirit', created: 'Nirvana' },
];

const Home = () => {
  return (
    <div className="flex flex-col gap-6 items-center h-screen w-full px-4 pt-4">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-center">
        TaskFlow
      </h1>

      {/* Input */}
      <div className="flex items-center gap-2 w-full max-w-md bg-white p-2 rounded-2xl border-2 border-blue-600 shadow-md">
        <span className="text-3xl font-bold select-none mb-2 text-slate-500">+</span>
        <TextField
          variant="standard"
          placeholder="Add New Task"
          fullWidth
          InputProps={{ disableUnderline: true }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ height: '100%' }}
        >
          ADD
        </Button>
      </div>

<div className='hidden max-lg:flex flex-row justify-center max-sm:gap-5 flex-wrap gap-10 text-white font-semibold'>
    <button className="bg-lime-500 w-[100px] h-12 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90">
        Completed
      </button>
      <button className="bg-blue-600 w-[100px] h-12 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90">
        Edit
      </button>
      <button className="bg-red-600 w-[100px] h-12 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90">
        Delete
      </button>
      <button className="bg-gray-600 w-[100px] h-12 rounded-xl transition-all duration-300 hover:scale-105 hover:opacity-90">
        History
      </button>
      </div>

      {/* Table */}
      <div className="w-full max-w-6xl h-[300px] mt-4 overflow-hidden relative">
        <div
          className="h-full overflow-y-auto custom-scroll"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
          }}
        >
          <TableContainer component={Paper} className="shadow-xl">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>No</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Task Description</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}}>Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>{task.id}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.created}</TableCell>
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
