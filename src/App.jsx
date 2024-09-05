import React from 'react';
import Heading from './components/Header.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Table from './components/Table.jsx';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-8">
      <Heading />
      <div className="flex justify-between items-start w-full px-10 mt-10">
        <Leaderboard />
        <Table />
      </div>
    </div>
  );
}

export default App;
