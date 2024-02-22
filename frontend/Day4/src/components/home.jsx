import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/home.css'
import Navbar from './navbar';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
  <div>
    <Navbar/>
<div className='slider'>
    <Slider {...settings}>
      <div className='slick-slide img'>
        <img src="https://media.gettyimages.com/id/1178090894/photo/two-smart-boys-playing-chess.jpg?s=612x612&w=0&k=20&c=X9aLVLJh4XWr4x6-_ql8mSeCDL-mZ8tQME3gwCmmFww=" alt="Slide 1" />
      </div>
      <div className='slick-slide img'>
        <img src="https://media.istockphoto.com/id/1457932150/photo/chess-knights-face-off.webp?b=1&s=170667a&w=0&k=20&c=dDNHkX83fYqrF85Ey0H8fvQBeucaMci4-jfAIIYYc2o=" alt="Slide 2" />
      </div>
      <div className='slick-slide img'>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbackground&psig=AOvVaw0-P9hZ-svyj6hKG9IGCw2P&ust=1708680599392000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiAnbPRvoQDFQAAAAAdAAAAABAf" alt="Slide 3" />
      </div>
    </Slider>
    </div>
    </div>
  );
}

export default Home;
