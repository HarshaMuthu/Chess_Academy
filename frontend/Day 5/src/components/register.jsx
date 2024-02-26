import '../assets/css/reg.css'
import { useState } from 'react';
import register from '../assets/images/reg.jpg'
import NavbarL from './navbarl';

// const Registration = () => {
//     const [location, setLocation] = useState('');
//     const [showOptions, setShowOptions] = useState(false);
  
//     const handleLocationChange = (e) => {
//       setLocation(e.target.value);
//       setShowOptions(true); // Show the options dropdown when a location is selected
//     };

const Registration = () => {
    const [location, setLocation] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [selectedSchedule, setSelectedSchedule] = useState('');
  
    const handleLocationChange = (e) => {
      setLocation(e.target.value);
      setShowOptions(true); // Show the options dropdown when a location is selected
      
    };
    const handleScheduleChange = (e) => {
        setSelectedSchedule(e.target.value);
      };
  return (
    <div>
        <div><NavbarL/></div>
      {/* Bootstrap CDN */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />

      {/* Fontawesome CDN */}
      <script src="https://kit.fontawesome.com/4d0b4c932e.js" crossOrigin="anonymous"></script>

      {/* Registeration Form */}
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <h1>Enhance your skills on the board</h1>
            {/* <p className="font-italic text-muted mb-0">Create a minimal registration page for getting the best traveling experience.</p> */}
            <img src={register} alt="" className="img-fluid mb-3 d-none d-md-block" />
          </div>
          {/* Main content */}
          <div id="Contact" className="col-md-7 col-lg-6 ml-auto">
            <form action="#">
              <div className="row">
                {/* First Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input id="firstName" type="text" name="firstname" placeholder="Student First Name" className="form-control bg-white border-left-0 border-md" />
                </div>
                {/* Last Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md" />
                </div>


                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input id="age" type="text" name="age" placeholder="Age" className="form-control bg-white border-left-0 border-md" />
                </div>

                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input id="std" type="text" name="std" placeholder="Standard" className="form-control bg-white border-left-0 border-md" />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input id="parname" type="text" name="parname" placeholder="Parent Name" className="form-control bg-white border-left-0 border-md" />
                </div>
                
                {/* Phone Number */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>
                  
                  <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3" />
                </div>

                {/* Location Dropdown */}
      <div className="input-group col-lg-12 mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text bg-white px-4 border-md border-right-0">
            <i className="fas fa-globe-asia"></i>
          </span>
        </div>
        <select
          id="locate"
          name="Location"
          className="form-control custom-select bg-white border-left-0 border-md"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="">Choose your Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Thoothukudi">Thoothukudi</option>
        </select>
      </div>

      {/* Options Dropdown based on selected location */}
      {showOptions && (
        <div className="input-group col-lg-12 mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text bg-white px-4 border-md border-right-0">
              <i className="fas fa-map-marker-alt"></i>
            </span>
          </div>
          <select
            id="options"
            name="Options"
            className="form-control custom-select bg-white border-left-0 border-md"
          >
            {location === 'Chennai' && (
              <>
                <option value="">Choose an option for Chennai</option>
                <option value="Option1">1</option>
                <option value="Option2">Option 2</option>
              </>
            )}
            {location === 'Coimbatore' && (
              <>
                <option value="">Choose an option for Coimbatore</option>
                <option value="OptionA">Gandhipuram</option>
                <option value="OptionB">Avinadhi Road</option>
              </>
            )}
            {location === 'Thoothukudi' && (
              <>
                <option value="">Choose an option for Thoothukudi</option>
                <option value="OptionX">Option X</option>
                <option value="OptionY">Option Y</option>
              </>
            )}
          </select>
        </div>
      )}
      <div className="input-group col-lg-12 mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white px-4 border-md border-right-0">
                <i className="fas fa-calendar-alt"></i>
              </span>
            </div>
            <select
              id="schedule"
              name="Schedule"
              className="form-control custom-select bg-white border-left-0 border-md"
              value={selectedSchedule}
              onChange={handleScheduleChange}
            >
              <option value="">Choose Schedule</option>
              <option value="Evening1">Weekends 1.5 Hours in the Evening</option>
              <option value="Morning">Weekdays Mornings</option>
              <option value="Evening2">Weekly 3 Days, 1 Hour Each in the Evening</option>
            </select>
          </div>

               
                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <a href="#" className="btn btn-primary btn-block py-2">
                    <span className="font-weight-bold">Create your account</span>
                  </a>
                </div>
                {/* Divider Text */}
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>
                {/* Social Login */}
                <div className="form-group col-lg-12 mx-auto">
        <a href="#" className="btn btn-primary btn-block py-2">
          <i className="fa fa-file mr-2"></i>
          <span className="font-weight-bold">Offline Application</span>
        </a>
      </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
