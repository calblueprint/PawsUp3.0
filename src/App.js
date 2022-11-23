/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddPawsList from './components/AddPawsList/AddPawsList';
import CycledPaws from './components/CycledPaws/CycledPaws';
import Secret from './components/Secret/Secret';
import SubmittedPaws from './components/SubmittedPaws/SubmittedPaws';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="screen">
              <AddPawsList />
            </div>
          }></Route>
        <Route
          path="/secret"
          element={
            <div className="screen">
              <Secret />
            </div>
          }></Route>
        <Route
          path="/submitted"
          element={
            <div className="screen">
              <SubmittedPaws />
            </div>
          }></Route>
        <Route
          path="/cycled"
          element={
            <div className="screen">
              <CycledPaws />
            </div>
          }></Route>
      </Routes>
    </Router>
  );
}

export default App;
