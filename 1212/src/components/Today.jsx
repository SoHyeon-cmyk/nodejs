import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { GrCaretNext, GrCaretPrevious} from "react-icons/gr";
import 'swiper/css';
import 'swiper/css/navigation';


const Today = () => {
  return (
    <div className='today mt20'>
      <h4>오늘출발.오늘도착.새벽도착 🚚</h4>
      <h2>오늘출발</h2>
     <div className='todayBox'>
       <Swiper
       modules={[Navigation, Autoplay ]}
       spaceBetween={20}
       slidesPerView={4}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       navigation={{nextEl:'.swipernext', prevEl:'.swiperprev'}}
       
       >
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider01.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider02.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider03.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider04.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider05.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider06.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider07.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider08.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider09.gif"} alt="" /></SwiperSlide>
         <SwiperSlide><img src={process.env.PUBLIC_URL + "/img/slider10.gif"} alt="" /></SwiperSlide>
       </Swiper>
       <div className="pagenation">
         <div className="swipernext"><GrCaretNext /></div>
         <div className="swiperprev"><GrCaretPrevious /></div>
       </div>
     </div>
    </div>
  );
};

export default Today;