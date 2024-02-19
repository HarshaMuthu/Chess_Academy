import { useState } from 'react';
import '../../assets/css/login.css';
import { Link } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div className="lost-passwd">
          <Link to="/sign">Create an Account</Link>
        </div>
      {/* <p>Don't have an account?</p>  <Link to="/signup">Sign Up</Link> */}
    </div>
  );
}

export default Login;
