import React from 'react';  // Import React
import { Route,  BrowserRouter, Routes } from 'react-router-dom';  // Import Route and BrowserRouter
import Home from './pages/home' // Import your components
import Login from './pages/login';
import Booking from './pages/booking';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/"  element={<Home/>} />

       
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
       <Route path='/booking' element={<Booking/>} />
       </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
