/* eslint-disable import/no-unresolved */

import { useLoaderData, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  EffectFade,
} from "swiper/modules";
import bracelets from "../../assets/images/videos/homepage/home_bracelet.mp4";
import Bagues from "../../assets/images/videos/homepage/home_ring.mp4";
import Colliers from "../../assets/images/videos/homepage/home_necklace.mp4";
import Boucles from "../../assets/images/videos/homepage/home_earring.mp4";
import Montres from "../../assets/images/videos/homepage/home_watch.mp4";

import "swiper/css/bundle";

import "./category.css";

function Category() {
  const cat = useLoaderData();
  const navigate = useNavigate();
  const port = import.meta.env.VITE_API_URL;

  const handleCategories = async (data) => {
    try {
      const response = await fetch(
        `${port}/api/product/product-by-category/${data.Id_category_list}`
      );
      const result = await response.json();
      if (response.ok) {
        navigate(`/items/${data.title}/${data.Id_category_list}`, {
          state: result,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const showVideo = (video) => {
  switch(video){
  case "Bracelets": return bracelets
  case "Bagues": return Bagues
  case "Colliers": return Colliers
  case "Boucles d'oreilles": return Boucles
  case "Montres": return Montres
  default: return Boucles
  }
  }
// 

  const videoTitle = (data) => {
    navigate(`/items/${data.title}/${data.Id_category_list}`);
  };

  return (
    <div className="all-containers">
      <div className="all-video-containers">
        <Swiper
          className="swiper"
          modules={[Navigation , Pagination, Autoplay, Scrollbar, EffectFade]}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor
          centeredSlides
          loop
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
        >
          {cat.map((category) => (
            <SwiperSlide key={category.Id_category_list} className="slide">
              <div className="cat-video-container">
                <video muted loop autoPlay className="cat-video">
                  <source src={showVideo(category.title)} type="video/mp4" />
                </video>
              </div>
              <div className="text-container">
                <h1 className="video-h1">Gems</h1>
                <h2 onClick={() => videoTitle(category)} role="presentation">
                  {category.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
          
           </Swiper>
        <span className="point"><h2>Nos categories </h2></span>
      </div>
      {cat.map((category) => (
        <div key={category.Id_category_list} className="category-container">
          <div
            onClick={() => handleCategories(category)}
            onKeyDown={handleCategories}
            role="presentation"
            style={{ backgroundImage: `url(${category.picture})` }}
            className="category-image"
          >
            <h1 className="category-title">{category.title}</h1>
            <h2 className="order-title">{category.details}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
