// import { useEffect,useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/css/login.css';
// import $ from 'jquery';
// import Axios from 'axios';
// function Login() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   // const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       setError('Invalid email format');
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     try {
//       const response = await Axios.post('http://localhost:8080/chess/new', {
//         name,
//         email,
//         password,
//         roles: 'USER',
//       });
//       console.log(response.data);
//       console.log('Signup successful');
//       // navigate('/LoginForm'); // Redirect to login page after successful signup
//     } catch (error) {
//       console.error('Error registering user:', error);
//       setError('Error signing up');
//     }}
  // useEffect(() => {
  //   $(".login-form").hide();
  //   $(".login").css("background", "none");

  //   $(".login").click(function () {
  //     $(".signup-form").hide();
  //     $(".login-form").show();
  //     $(".signup").css("background", "none");
  //     $(".login").css("background", "#fff");
  //   });

  //   $(".signup").click(function () {
  //     $(".signup-form").show();
  //     $(".login-form").hide();
  //     $(".login").css("background", "none");
  //     $(".signup").css("background", "#fff");
  //   });

  //   $(".btn").click(function () {
  //     $(".input").val("");
  //   });
  // }, []);

//   return (
//     <div className="wrapper">
//       <div className="container">
        
//         <div className="signup">Sign Up</div>
//         <div className="login">Log In</div>

//         {/* <form className="signup-form" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Your Email Address" className="input" required /><br />
//           <input type="password" placeholder="Password" className="input" required /><br />
//           <input type="password" placeholder="Confirm Password" className="input" required /><br />
//           <div className="btn"><button>Create account</button></div>
//         </form> */}

//         <form className="login-form">
//           <input type="text" placeholder="Email or Username" className="input" required /><br />
//           <input type="password" placeholder="Password" className="input" required /><br />
//           <Link to="/homel" className="btn"><button>Login</button></Link>
//           <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
//                   <div className="border-bottom w-100 ml-5"></div>
//                   <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
//                   <div className="border-bottom w-100 mr-5"></div>
//                 </div>
//           <Link to="/admin" className="btn">
//             <button>Admin Login</button>
//           </Link>
//         </form>
         
//       </div>
//       <div className="youtube"></div>
//     </div>
//   );
// }


// export default Login;

import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/css/login.css';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    // login();
    try {
      const response = await Axios.post('http://localhost:8080/chess/authenticate', {
        username: name,
        password: password, 
      });
      localStorage.setItem('token',response.data)
      console.log(response.data);

      navigate('/Homel');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // const handleReg = () => {
  //   register();
  // };

  // const register = () => {
  //   var x = document.getElementById('login');
  //   var y = document.getElementById('register');
  //   var z = document.getElementById('btn');

  //   x.style.left = '-450px';
  //   y.style.left = '50px';
  //   z.style.left = '110px';
  // };
  //   const login = () => {
  //   var x = document.getElementById('login');
  //   var y = document.getElementById('register');
  //   var z = document.getElementById('btn');

  //   x.style.left = '50px';
  //   y.style.left = '450px';
  //   z.style.left = '0px';
  // };

  const validateInputs = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!isPasswordStrong(password)) {
      alert('Password must be at least 8 characters with a mix of uppercase and lowercase characters.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = (password) => {
    return password.length >= 8;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      try {
        const response = await Axios.post('http://localhost:8080/chess/new', {
          name,
          email,
          password,
          roles: 'USER',
        });
        console.log(response.data);
        // login();  
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  const openSignUp=()=>{
    document.getElementById("register").style.display="block";
    document.getElementById("login").style.display="none";
  }

  const openLogIn=()=>{
    document.getElementById("register").style.display="none";
    document.getElementById("login").style.display="block";
  }

  return (
    <div className="wrapper">
      <div className="container">
        {/* <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" onClick={handleLogin}>
            Log In
          </button>
          <button type="button" className="toggle-btn" onClick={handleReg}>
            Register
          </button> */}
          <div className="signup" onClick={openSignUp}>Sign Up</div>
         <div className="login" onClick={openLogIn}>Log In</div>
        {/* </div> */}
        
        <form id="login" className="login-form" style={{display:"none"}} onSubmit={handleLogin}>
          <input
            type="text"
            className="input"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className='btn'><button type="submit" className="btn">
            Login
          </button></div>
          <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                   <div className="border-bottom w-100 ml-5"></div>
                   <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                   <div className="border-bottom w-100 mr-5"></div>
                 </div>
          <Link to="/admin" className="btn">
             <button>Admin Login</button>
           </Link>
        </form>
        
        <form id="register" className="input-group">
          <input type="text" className="input" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
          <input
            type="text"
            className="input"
            placeholder="Email"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Enter a valid email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" className="input" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          
          <div className='btn'><button type="button" className="btn" onClick={handleRegister}>
            Login
          </button></div>
        </form>
      </div>
    </div>
  );
};

export default Login;