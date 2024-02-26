import '../assets/css/about.css'; // Import the CSS file
import chessCourseImage from '../assets/images/about.jpg'; // Import the image
import NavbarL from './navbarl';

function About() {
  return (
    <div>
      <div>
        <NavbarL/>
      </div>
    <div className="chess-course-container">
      <div className="chess-course-content">
        <div className="chess-course-header">
          <h1 className="chess-course-title">About the course</h1>
        </div>
        <p className="chess-course-description">
          Chess is a cordial game that involves two minds competing against one another. With the course curated with the expertise of GrandMaster, we offers students an enthralling chess coaching with practical and championship-level approach.
        </p>
        <p className="chess-course-description">
        Students will learn the movements of each piece, the most common checkmate patterns, special moves like castling, the basics of the opening, and unique tricks.
        </p>
        
        <p className="chess-course-benefits">
          Every child will get personal attention and feedback in small groups and see visible difference in their game in just 4 weeks!
        </p>
      </div>
      <div className="chess-course-image">
        <img src={chessCourseImage} alt="Chess Course" />
      </div>
    </div>
    </div>
  );
}

export default About;
