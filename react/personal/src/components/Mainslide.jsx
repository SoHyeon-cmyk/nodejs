import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { RiPauseMiniFill } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Mainslide = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);//페이지네이션
  const [swiper, setSwiper] = useState(null);//슬라이드용
  const swiperRef = useRef(null);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false); //제어버튼
  const [isActive, setIsActive] = useState(false) //active button

  const prev = () => {
    swiper?.slidePrev();

  }
  const next = () => {
    swiper?.slideNext();

  }
  const autoPlayToggle = () => {
    if (swiper && swiper.autoplay) {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        setIsAutoplayPaused(true);
      } else {
        swiper.autoplay.start();
        setIsAutoplayPaused(false);
      }
    }

    setIsActive(!isActive);

  }

  return (
    <div className={`mySwiper mainslider`}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1500}
        autoplay={
          {
            delay: 3000,
            disableOnInteraction: false,
          }
        }
        loop
        onSwiper={(swiper) => {swiperRef.current = swiper }}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        className='textSlide'
      >
        <SwiperSlide><img src="/" alt="img1" /></SwiperSlide>
        <SwiperSlide><img src="/" alt="img2" /></SwiperSlide>
        <SwiperSlide><img src="/" alt="img3" /></SwiperSlide>
        <SwiperSlide><img src="/" alt="img4" /></SwiperSlide>

      </Swiper>

      <div className="page_box">
        <div className="page">
          <div className="swiper_progress_bar">
            <div className='slider-bar'>
              <div className="fill"></div>
            </div >
          </div>
          <div className="swiper-pagination">
            <span>0{swiperIndex + 1}</span>
            <span> / </span>
          </div>
          <div className="swiper_btn">
            <div className="swiperPrevBtn" onClick={prev}><GrFormPreviousLink /></div>
            <div className="btn-auto">
              <div className="btn-stop" onClick={autoPlayToggle}>
                {
                  isActive ? <CiPlay1 /> : <RiPauseMiniFill />
                }

              </div>
            </div>
            <div className="swiperNextBtn" onClick={next}><GrFormNextLink /></div>


          </div>
        </div>
      </div>


    </div>
  );
};

export default Mainslide;