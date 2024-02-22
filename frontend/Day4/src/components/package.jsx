// import React from 'react';
import '../assets/css/pricing.css'; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithubSquare, faCodepen, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
import { faUser,  faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';

function PricingPage() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
      <section className="first">
        <h2><span>Check</span>Edge</h2>
        <span> </span>
        <div className="onConner">
          <h2><span>001</span>Challenge</h2>
          <a href="https://www.facebook.com/ngowagtrung" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
            <span className="tooltiptext">Facebook</span>
          </a>
          <span></span>
          <a href="https://github.com/wagtrung" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} />
            <span className="tooltiptext">GitHub</span>
          </a>
          <a href="https://codepen.io/wagtrung/collections" target="_blank">
            <FontAwesomeIcon icon={faCodepen} />
            <span className="tooltiptext">CodePen</span>
          </a>
          <span></span>
          <a href="https://www.behance.net/ngowagtrung" target="_blank">
            <FontAwesomeIcon icon={faBehanceSquare} style={{ color: 'rgb(1, 10, 138)' }} />
            <span className="tooltiptext">Behance</span>
          </a>
          <a href="https://99designs.com/profiles/3377103" target="_blank">
            <img src="https://www.lindahenslee.com/wp-content/uploads/2018/04/99designs-icon.png" alt="" />
            <span className="tooltiptext">99designs</span>
          </a>
        </div>
      </section>

      <div className="container">
        <div className="column">
          <div className="header">
            <FontAwesomeIcon icon={faUser} />
            <h2><span>WagTrung</span>basic</h2>
          </div>
          <div className="money">
            <h4>$ <span> 190 </span></h4>
          </div>
          <div className="feature">
            <ul>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faTimesCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faTimesCircle} />Aliquip adipisicing </li>
            </ul>
          </div>
          <div className="bu">
            <a href="https://codepen.io/wagtrung/collections" target="_blank">buy here<span></span></a>
          </div>
        </div>
        <div className="column">
          <div className="header">
            <FontAwesomeIcon icon={faUser} />
            <h2><span>WagTrung</span>basic</h2>
          </div>
          <div className="money">
            <h4>$ <span> 190 </span></h4>
          </div>
          <div className="feature">
            <ul>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faTimesCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faTimesCircle} />Aliquip adipisicing </li>
            </ul>
          </div>
          <div className="bu">
            <a href="https://codepen.io/wagtrung/collections" target="_blank">buy here<span></span></a>
          </div>
        </div><div className="column">
          <div className="header">
            <FontAwesomeIcon icon={faUser} />
            <h2><span>WagTrung</span>basic</h2>
          </div>
          <div className="money">
            <h4>$ <span> 190 </span></h4>
          </div>
          <div className="feature">
            <ul>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faCheckCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faTimesCircle} />Aliquip adipisicing </li>
              <li><FontAwesomeIcon icon={faTimesCircle} />Aliquip adipisicing </li>
            </ul>
          </div>
          <div className="bu">
            <a href="https://codepen.io/wagtrung/collections" target="_blank">buy here<span></span></a>
          </div>
        </div>s

        {/* Additional columns (similar structure) */}
      </div>
    </div>
  );
}

export default PricingPage;
