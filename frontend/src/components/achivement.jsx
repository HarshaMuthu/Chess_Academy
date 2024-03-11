// import React from 'react';
import '../assets/css/ach.css';
import teacher1Image from '../assets/images/teacher1.jpeg';
import teacher2Image from '../assets/images/teacher2.jpeg';
import teacher3Image from '../assets/images/teacher3.jpeg';
import NavbarL from './navbarl';

function Achive() {
  

  return (
    <div>
      <div><NavbarL/></div>
      <div className="bod_body">
        <div className="ev">
          <h2>Meet your teachers</h2>
        </div>
        <div className="event__section">
          <div className="event__card">
            <img src={teacher1Image} alt="Teacher 1" className="teacher-image" />
            <h3>Ms.Deepika</h3>
            <p>With over a decade of tournament experience, Ms.Deepika specializes in teaching advanced chess strategies, helping students elevate their game.</p>
          </div>
          <div className="event__card">
            <img src={teacher2Image} alt="Teacher 2" className="teacher-image" />
            <h3>Mr.Kavin</h3>
            <p>Mr.Kavin fosters young talent with her personalized coaching, creating an encouraging space for students to explore and excel in chess.</p>
          </div>
          <div className="event__card">
            <img src={teacher3Image} alt="Teacher 3" className="teacher-image" />
            <h3>Mrs.Anusree</h3>
            <p>A cognitive science researcher and chess enthusiast, Mrs.Anusree imparts not only chess mastery but also insights into strategic decision-making, making him a sought-after mentor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achive;
