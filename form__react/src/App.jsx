import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Users from './components/Users/Users';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
    return (
        <div className='container'>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Form />} />
              <Route path='/users' element={<Users />} />
            </Routes>
          </BrowserRouter>
        </div>
    )
}

export default App;
