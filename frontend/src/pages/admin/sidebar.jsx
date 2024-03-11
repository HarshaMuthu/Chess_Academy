import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';
// import profile from '../../assets/images/profile.jpeg';
import '../../assets/css/nav.css'; 

function Adminbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">ChessEdge</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/crud" className="nav-link">Academy Details</Link>
        </li>
        <li className="nav-item">
          <Link to="/courses" className="nav-link">Courses</Link>
        </li>
        <li className="nav-item">
          <Link to="/student" className="nav-link">Student Info</Link>
        </li>
        
      </ul>
      <div className="right-section">
        <li className="nav-item">
          <Link to="/" className="nav-link">Logout</Link>
        </li>
      </div>
    </nav>
  );
}

export default Adminbar;
