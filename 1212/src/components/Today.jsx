import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, autoplay } from 'swiper/modules';
import { GrNext,GrPrevious } from "react-icons/gr";

const Today = () => {
  return (
    
    <div className='today mt20' >
      <h4>오늘출발.오늘도착.새벽도착🚚</h4>
      <h2>오늘출발</h2>
    <div className='todayBox'>
        <Swiper
        // install Swiper modules
        modules={[Navigation,autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation = {{nextEl:'swipernext',prevEl:'swiperprev'}}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide1.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide2.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide3.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide4.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide5.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide6.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide7.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide8.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide9.gif"} alt="" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slide10.gif"} alt="" /></SwiperSlide>
      
      </Swiper>
        <div className="pagenation">
          <div className="swipernext"><GrNext /></div>
          <div className="swiperprev"><GrPrevious /></div>
        </div>
      </div>
    </div>
    
  );
};

export default Today;