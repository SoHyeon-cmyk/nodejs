import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Mainslide = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('/public/data/image.json') // JSON 파일 경로
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error loading images:', error));
  }, []);


  return (
  <>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./image/banner01.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./image/banner02.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./image/banner03.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./image/banner04.png" alt="" /></SwiperSlide>
      </Swiper>
   
    </>



  );
};

export default Mainslide;