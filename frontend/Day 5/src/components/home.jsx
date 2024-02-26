import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/home.css'
import Navbar from './navbar';
import '../assets/images/home2.jpg';
import Slideshow from './slide';

function Home() {

  return (
  <div>
    <div>
      <Navbar/>
      <Slideshow/>
    </div>
   {/* Sec slide */}

    <div className="chess-course-container">
      <div className="chess-course-header">
        <div className="chess-course-header-image">
          <img src="home2.jpg" alt="Chess player" />
        </div>
        <div className="chess-course-header-content">
          <h1 className="chess-course-title">Your Child Can Become a Chess Champion</h1>
          <p className="chess-course-subtitle">
            Through our interactive online chess lessons, your child will learn the
            skills and strategies they need to succeed.
          </p>
        </div>
      </div>
      <div className="chess-course-content">
        <div className="chess-course-content-section">
          <h2 className="chess-course-content-section-title">Structured Activities</h2>
          <p className="chess-course-content-section-text">
            Our programs are designed by grandmasters and include a variety of
            activities that will help your child improve their chess skills,
            including:
          </p>
          <ul className="chess-course-content-section-list">
            <li>Interactive chess lessons</li>
            <li>Tactical puzzles</li>
            <li>Practice games against other students</li>
            <li>Chess tournaments</li>
          </ul>
        </div>
        <div className="chess-course-content-section">
          <h2 className="chess-course-content-section-title">
            Boost Confidence and Overall Skills
          </h2>
          <p className="chess-course-content-section-text">
            In addition to learning chess, our students also develop important
            life skills such as:
          </p>
          <ul className="chess-course-content-section-list">
            <li>Critical thinking</li>
            <li>Problem-solving</li>
            <li>Concentration</li>
            <li>Sportsmanship</li>
          </ul>
        </div>
      </div>
      {/* <div className="chess-course-call-to-action">
        <button className="chess-course-call-to-action-button">Learn More</button>
      </div> */}
    </div>
    </div>
  );
}

export default Home;

