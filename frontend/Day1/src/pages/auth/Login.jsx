import '../../assets/css/login.css';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
// import Signup from '../Signup/Signup';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implement your login logic here
      console.log('Logging in with:', username, password);
    };
  
    return (
      <>
        
  
        <div className="hero">
         
          <div className="form-box">
            <h1>Login</h1>
            <form id="email" className="input-group">
              <input
                type="text"
                className="input-field"
                id="email"
                placeholder="Email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="input-field"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="submit-btn" onClick={handleLogin}>
                Login
              </button>
            </form>
            <div className="signup">
              {/* <a href="" target="_blank"> */}
              <h1>Dont have an account?</h1> 
              <Link to="/signup" >
                Signup Here
                </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;