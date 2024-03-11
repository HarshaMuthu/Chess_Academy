import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './pages/auth/Login';
import About from './components/about';
import Homel from './components/home2';
import NavbarL from './components/navbarl';
import Register from './components/register';
import PricingPage from './components/package';
import AdminLogin from './pages/admin/adlog';
import CrudApp from './pages/admin/crud';
import Achive from './components/achivement';
import Profile from './components/profiledet';
import Adminbar from './pages/admin/sidebar';
import Testimonials from './components/achivement';
import Student from './pages/admin/student';

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
          <Route path="/test" element={<Testimonials/>}/>

          <Route path="/ach" element={<Achive/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/side" element={<Adminbar/>}/>
           <Route path="/reg" element = {<Register/>} /> 
           <Route path="/crud" element = {<CrudApp/>} /> 
           <Route path="/student" element = {<Student/>} /> 


        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;