import Layout from '@/containers/Layout';
import TicketsPage from '@/pages/TicketsPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TicketsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
