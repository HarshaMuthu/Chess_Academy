import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg';
import profile from '../assets/images/profile.jpeg';
import '../assets/css/nav.css'; 

function NavbarL() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">ChessEdge</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/homel" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/achievements" className="nav-link">Achievements</Link>
        </li>
        <li className="nav-item">
          <Link to="/package" className="nav-link">Package</Link>
        </li>
        <li className="nav-item">
          <Link to="/reg" className="nav-link">Register</Link>
        </li>
      </ul>
      <div className="right-section">
        <Link to="/profile">
          <img src={profile} alt="Profile" className="profile-image" />
        </Link>
        <span className="profile-name">Name</span>
      </div>
    </nav>
  );
}

export default NavbarL;
