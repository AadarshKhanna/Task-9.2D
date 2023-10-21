import React from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom'; // Import Routes
import First_Img from './First_Img';
import CardList from './CardList';
import CardList1 from './CardList1';
import Sign from './Sign.jsx';
import End from './End';
import Login from './Login';
import Signup from './Signup';
import SubscriptionPage from './SubscriptionPage';
import Completion from './Completion';
import U_val from './u_val';
import Home from './Home/Home.js';

function App() {
  return ( 
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subscriptionpage" element={<SubscriptionPage />} />
        <Route path="" element={<Main />} />
        <Route path="/completion" element={<Completion />} />
        <Route path="/u_val" element={<U_val />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

function Main() {
  return (
    <div>
      <First_Img />
      <CardList />
      <CardList1 />
      <Sign />
      <End />
    </div>
  );
}

export { App, Main };
export default App;
