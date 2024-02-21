// import React from 'react';
// import '../assets/css/nav.css';

// function Navbar() {
//   return (
//     <div id="top">
//     <nav className="navbar">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a href="#" className="nav-link">Home</a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">About</a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">Contact</a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">Enquiries</a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">Report</a>
//         </li>
//         <li className="nav-item search">
//           <input type="text" placeholder="Search..." className="search-box" />
//         </li>
//       </ul>
//     </nav>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import '../assets/css/nav.css';
import logo from '../assets/images/logo.jpeg';
import profile from '../assets/images/profile.jpeg'; // Import your logo image

function Navbar() {
  return (
    <div id="top">
      <nav className="navbar">
        <div className="left-section">
          <img src={logo} alt="Logo" className="logo" /> {/* Logo */}
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Enquiries</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Report</a>
          </li>
        </ul>
        <div className="right-section">
        <img src={profile} alt="Profile" className="profile-image" />
          {/* <img src="profile.jpeg" alt="Profile" className="profile-image" />  */}
          <span className="profile-name">Name</span> {/* Profile Name */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
