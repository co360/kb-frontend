import React from "react";

import MyCarousel from "../../../components/User/Home/MyCarousel";
import Products from "../../../components/User/Home/Products";
import Planes from "../../../components/User/Home/Planes";
import About from "../../../components/User/Home/About";
import ContactForm from "../../../components/User/Home/ContactForm";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home-carousel d-lg-none d-xl-none d-md-none">
        <MyCarousel />
      </div>
      <div className="container my-3">
        <Products />
        <Planes />
      </div>
      <About />
      <ContactForm />
    </div>
  );
};

export default Home;
