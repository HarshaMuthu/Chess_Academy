import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './pages/auth/Login';
import About from './components/about';
import Homel from './components/home2';
import NavbarL from './components/navbarl';
import ProfilePage from './components/profile';
import Register from './components/register';
import PricingPage from './components/package';
import AdminLogin from './pages/admin/adlog';
// import Profile from './components/profiledet';
import CrudApp from './pages/admin/crud';
// import Adlogin from './pages/admin/logina';
// import { Landing } from './components/landing';
// import { Dashboard } from '@mui/icons-material';
// import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
           <Route path="/" element = {<Home/>} /> 
          <Route path="/login" element = {<Login/>} /> 
           <Route path="/about" element = {<About/>} /> 
           <Route path="/homel" element = {<Homel/>} /> 
           <Route path="/navl" element = {<NavbarL/>} /> 
           <Route path="/package" element = {<PricingPage/>} /> 
           <Route path="/admin" element = {<AdminLogin/>} />
          <Route path="/profile" element={<ProfilePage/>}/>
          {/* <Route path="/profile" element={<Profile/>}/> */}
          
           <Route path="/reg" element = {<Register/>} /> 
           <Route path="/crud" element = {<CrudApp/>} /> 


        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;