// import { useState } from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './pages/auth/Login';
// import ProfilePage from './components/profile';
// import { Dashboard } from '@mui/icons-material';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          {/* <Route path="/" element = {<Login/>} />  */}
          {/* <Route path="/signup" element = {<} /> */}
          {/* <Route path="/" element={<ProfilePage/>}/> */}
          {/* <Route path="/" element={<Dashboard/>}/> */}
           <Route path="/" element = {<Navbar/>} /> 

        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;