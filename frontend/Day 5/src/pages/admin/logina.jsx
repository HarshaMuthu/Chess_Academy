import  { useEffect } from 'react';
import '../../assets/css/logina.css'; // Import your CSS file here
import $ from 'jquery'; // Import jQuery

function Adlogin() {
  useEffect(() => {
    const staticPanel = $('.panel--static');
    const slidingPanel = $('.panel--sliding');
    
    const signupBtn = staticPanel.find('.btn.signup');
    const loginBtn = staticPanel.find('.btn.login');
    
    const signupContent = slidingPanel.find('.panel__content.signup');
    const loginContent = slidingPanel.find('.panel__content.login');

    signupBtn.on('click', function() {
        loginContent.hide('fast');
        signupContent.show('fast');
        slidingPanel.animate({
            'left': '4%'
        }, 550, 'easeInOutBack');
    });

    loginBtn.on('click', function() {
        signupContent.hide('fast');
        loginContent.show('fast');
        slidingPanel.animate({
            'left': '54%'
        }, 550, 'easeInOutBack');
    });
  }, []);

  return (
    <div className="panel panel--static">
      <div className="panel__content left">
        {/* <h1 className="panel__heading">Don't have an account?</h1> */}
        <p className="panel__copy">Ethical celiac hashtag taxidermy squid. Wayfarers distillery narwhal, kombucha jean shorts selvage meggings.</p>
        <button type="button" className="btn btn--secondary signup">Sign up</button>
      </div>
      <div className="panel__content right">
        <h1 className="panel__heading">Have an account?</h1>
        <p className="panel__copy">Ethical celiac hashtag taxidermy squid. Wayfarers distillery narwhal, kombucha jean shorts selvage meggings.</p>
        <button type="button" className="btn btn--secondary login">Log in</button>
      </div>

      <div className="panel panel--sliding">
        <div className="panel__content signup">
          <h1 className="panel__heading">Sign up</h1>
          <form id="signup">
            <input type="text" placeholder="Full name" className="input input--name" />
            <input type="text" placeholder="Email" className="input input--email" />
            <input type="password" placeholder="Choose Password" className="input input--password" />
            <input type="password" placeholder="Confirm Password" className="input input--password" />
            <button type="submit" className="btn btn--primary">Sign up</button>
          </form>
        </div>
          
        <div className="panel__content login">
          <h1 className="panel__heading">Log in</h1>
          <form id="login">
            <input type="text" placeholder="Email" className="input input--email" />
            <input type="password" placeholder="Password" className="input input--password" />
            <button type="submit" className="btn btn--primary">Log in</button>
            {/* <a href="/">Forgot password?</a> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adlogin;
