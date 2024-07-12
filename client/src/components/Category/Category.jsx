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

  return (
    <div className="all-containers">
      <div className="all-video-containers">
        <Swiper
          className="swiper"
          modules={[Navigation, Pagination, Autoplay, Scrollbar, EffectFade]}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor
          centeredSlides
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {cat.map((category) => (
            <SwiperSlide key={category.Id_category_list} className="slide">
              <div className="cat-video-container">
                <video muted loop autoPlay className="cat-video">
                  <source src="hello.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-container">
                <h1 className="video-h1">Gems</h1>
                <h2>{category.title}</h2>
              </div>
            </SwiperSlide>
          ))}
          ...
        </Swiper>
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
