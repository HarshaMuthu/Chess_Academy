import '../assets/css/profile.css';
import { useState } from 'react';
import logo from '../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function ProfilePage() {
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St, Cityville',
    phoneNumber: '123-456-7890',
  });
  const [isEditing, setEditing] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div>
      {/* Navbar top */}
      <div className="navbar-top">
        <div className="title">
          <h1>Profile</h1>
        </div>

        {/* Navbar */}
        <ul>
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
  <Link to="/homel">Home</Link>
  <hr align="center" />
</div>
        </div>
      </div>
      {/* End */}

      {/* Main */}
      {/* <div className='body1'>
        <h1>User Profile</h1>
        {isEditing ? (
          <div className='form1'>
            <form onSubmit={handleSubmit}>
              <label className='label1'>
                Name:<span className="tab"/>
                <input type="text" className='input1' name="name" value={userDetails.name} onChange={handleChange} />
              </label>
              <br/>
              <label className='label1'>
                Email:<span className="tab"/>
                <input type="email" className='input1' name="email" value={userDetails.email} onChange={handleChange} />
              </label>
              <br/>
              <label className='label1'>
                Address:<span className="tab"/>
                <input type="text" className='input1' name="address" value={userDetails.address} onChange={handleChange} />
              </label >
              <br/>
              <label className='label1'>
                Phone Number:<span className="tab"/> 
                <input className='input1' type="tel" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
              </label>
              <br/><br/>
              <button className='buttonx' type="submit">Save Changes</button>
            </form>
          </div>
        ) : (
          <div className='display'>
            <p className='p1'><b>Name:  </b>{userDetails.name}</p>
            <p className='p1'><b>Email:  </b> {userDetails.email}</p>
            <p className='p1'><b>Address:  </b> {userDetails.address}</p>
            <p className='p1'><b>Phone Number:  </b> {userDetails.phoneNumber}</p>
            <br/>
            <button className="buttonY"onClick={() => setEditing(true)}>Edit</button>
          </div>
        )}
      </div> */}
      {/* End Main */}
    </div>
  );
}

export default ProfilePage;
