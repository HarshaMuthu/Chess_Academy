import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import {Home } from "./home";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
// import FeedForm from "./FeedForm";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const Landing = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  
  return (
    <div>
      {/* <Login/> */}
      <Navbar/>
      <Home data={landingPageData.Home} />
      {/* <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <FeedForm data={landingPageData.FeedForm} />
      <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};
