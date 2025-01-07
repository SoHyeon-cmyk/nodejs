import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation,Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Mainslide = () => {
  // const [swiperIndex, setSwiperIndex] = useState(0);//페이지네이션
  // const [swiper, setSwiper] = useState(null);//슬라이드용
  // const swiperRef = useRef(null);
  // const [isAutoplayPaused, setIsAutoplayPaused] = useState(false); //제어버튼
  // const [isActive, setIsActive] = useState(false) //active button

  // const prev = () => {
  //   swiper?.slidePrev();

  // }
  // const next = () => {
  //   swiper?.slideNext();

  // }
  // const autoPlayToggle = () => {
  //   if (swiper && swiper.autoplay) {
  //     if (swiper.autoplay.running) {
  //       swiper.autoplay.stop();
  //       setIsAutoplayPaused(true);
  //     } else {
  //       swiper.autoplay.start();
  //       setIsAutoplayPaused(false);
  //     }
  //   }

  //   setIsActive(!isActive);

  // }

  return (
    <div className={`mySwiper mainslider`}>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>


    </div>
  );
};

export default Mainslide;