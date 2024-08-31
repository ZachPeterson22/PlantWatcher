import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Plant from './Plant';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path ='/' element={<App />}/>
      <Route path ='/plant/:plantId' element={<Plant />}/>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
