import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/login.css';
import $ from 'jquery';

function Login() {
  useEffect(() => {
    $(".login-form").hide();
    $(".login").css("background", "none");

    $(".login").click(function () {
      $(".signup-form").hide();
      $(".login-form").show();
      $(".signup").css("background", "none");
      $(".login").css("background", "#fff");
    });

    $(".signup").click(function () {
      $(".signup-form").show();
      $(".login-form").hide();
      $(".login").css("background", "none");
      $(".signup").css("background", "#fff");
    });

    $(".btn").click(function () {
      $(".input").val("");
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        
        <div className="signup">Sign Up</div>
        <div className="login">Log In</div>

        <form className="signup-form">
          <input type="text" placeholder="Your Email Address" className="input" required /><br />
          <input type="password" placeholder="Password" className="input" required /><br />
          <input type="password" placeholder="Confirm Password" className="input" required /><br />
          <div className="btn"><button>Create account</button></div>
        </form>

        <form className="login-form">
          <input type="text" placeholder="Email or Username" className="input" required /><br />
          <input type="password" placeholder="Password" className="input" required /><br />
          <Link to="/homel" className="btn"><button>Login</button></Link>
          <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>
          <Link to="/admin" className="btn">
            <button>Admin Login</button>
          </Link>
        </form>
         
      </div>
      <div className="youtube"></div>
    </div>
  );
}

export default Login;
