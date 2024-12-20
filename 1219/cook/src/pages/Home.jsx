import React, { useContext, useState } from 'react';
import { DataContext } from '../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import List from '../components/List';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Home = () => {
  const { data } = useContext(DataContext)
  const [swiper, setSwiper] = useState(null)

  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }
  return (
    <div>
      <div className="home">
        <div className="title">
          <h2>추천 레시피</h2>
        </div>
        <Swiper className='swiperMain'
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}>

          {
            data.slice(11, 30).map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.ATT_FLIE_NO_MK} alt={item.HASH_TAG} />

              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

      <div className="home">
        <div className="title">
          <h2>추천 레시피</h2>
        </div>
        <div className="homeList">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            {
              data.slice(0, 10).map((item) => (
                <SwiperSlide key={item.id}>
                  <List data={[item]} />
                </SwiperSlide>
              ))
            }

          </Swiper>
          <div className="swiper_btn">
            <div className="swiperPrevBtn" onClick={handlePrev}><MdArrowBackIos /></div>
            <div className="swiperNextBtn" onClick={handleNext}><MdArrowForwardIos /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;