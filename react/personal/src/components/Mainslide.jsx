import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Mainslide = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/" alt="img1" /></SwiperSlide>
        <SwiperSlide><img src="/" alt="img2" /></SwiperSlide>
        <SwiperSlide><img src="/" alt="img3" /></SwiperSlide>
        <SwiperSlide><img src="/" alt="img4" /></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Mainslide;