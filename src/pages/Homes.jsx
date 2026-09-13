import React from "react";
import HomeHero from "../components/home-page/HomeHero";
import CarouselPromo from "../components/home-page/CarouselPromo";
import promo1 from "../assets/Promo1.png";
import promo2 from "../assets/Promo2.png";
import promo3 from "../assets/Promo3.png";
import CardContent from "../components/home-page/CardContent";
import HomeRecomendation from "../components/home-page/HomeRecomendation";
import AreaKos from "../components/home-page/AreaKos";
import HomeAbout from "../components/home-page/HomeAbout";

const Homes = () => {
  return (
    <>
      <HomeHero />
      <CarouselPromo
        images={[
          { src: promo1, alt: "Promo Agustus" },
          { src: promo2, alt: "Promo September" },
          { src: promo3, alt: "Promo Oktober" },
        ]}
      />
      <CardContent />
      <HomeRecomendation />
      <AreaKos />
      <HomeAbout />
    </>
  );
};

export default Homes;
