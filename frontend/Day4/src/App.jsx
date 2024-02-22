import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import PricingPage from './components/package';
// import Login from './pages/auth/Login';
// import ProfilePage from './components/profile';
// import { Landing } from './components/landing';
// import { Dashboard } from '@mui/icons-material';
// import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          {/* <Route path="/" element = {<Login/>} />  */}
          {/* <Route path="/signup" element = {<} /> */}
          {/* <Route path="/" element={<ProfilePage/>}/> */}
          {/* <Route path="/" element={<Dashboard/>}/> */}
           {/* <Route path="/" element = {<Navbar/>} />  */}
           {/* <Route path="/home" element={<Landing/>} /> */}
           {/* <Route path="/" element = {<Home/>} />  */}
           <Route path="/" element = {<PricingPage/>} /> 

        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;