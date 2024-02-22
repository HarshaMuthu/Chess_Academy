import '../assets/css/profile.css';
import logo from '../assets/images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function ProfilePage() {
  return (
    <div>
      {/* Navbar top */}
      <div className="navbar-top">
        <div className="title">
          <h1>Profile</h1>
        </div>

        {/* Navbar */}
        <ul>
          {/* <li>
            <a href="#message">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </li>
          <li>
            <a href="#notification">
              <FontAwesomeIcon icon={faBell} size="2x" />
            </a>
          </li> */}
          <li>
  </li>
          <li>
          <a href="#sign-out">
          <span>Logout </span>
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
        </a>
            
          </li>
        </ul>
        {/* End */}
      </div>
      {/* End */}

      {/* Sidenav */}
      <div className="sidenav">
        <div className="profile">
          <img src={logo} alt="" width="100" height="100" />

          <div className="name">
            ChessEdge
          </div>
          <div className="job">
          Master Your Moves, Rule the Board!
          </div>
        </div>

        <div className="sidenav-url">
          <div className="url">
            <a href="#profile" className="active">Profile</a>
            <hr align="center" />
          </div>
          <div className="url">
            <a href="#settings">Home</a>
            <hr align="center" />
          </div>
        </div>
      </div>
      {/* End */}

      {/* Main */}
      <div className="main">
        <h2>IDENTITY</h2>
        <div className="card">
          <div className="card-body">
            <i className="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>XXXXX</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>XXXX@gmail.com</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>India</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>98765443210</td>
                </tr>
                <tr>
                  <td>Level</td>
                  <td>:</td>
                  <td>I</td>
                </tr>
                <tr>
                  <td>Batch</td>
                  <td>:</td>
                  <td>njkad</td>
                </tr>
                <tr>
                  <td>Academy Branch</td>
                  <td>:</td>
                  <td>DDDD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
      </div>
      {/* End */}
    </div>
  );
}

export default ProfilePage;
