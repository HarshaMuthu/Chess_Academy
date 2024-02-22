import logo from '../assets/images/logo.jpeg';
import profile from '../assets/images/profile.jpeg';
import '../assets/css/nav.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">ChessEdge</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Achievements</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Package</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Register</a>
        </li>
      </ul>
      <div className="right-section">
        <img src={profile} alt="Profile" className="profile-image" />
        <span className="profile-name">Name</span>
      </div>
    </nav>
  );
}

export default Navbar;
