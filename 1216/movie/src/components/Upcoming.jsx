import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Upcoming = ({title,release_date,average,posterPath}) => {
  const [isLoading, setLoading] = useState(true);
  const [nextMovie, setNextMovie] = useState([]);
  const getMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`);
      setNextMovie(response.data.results)
      console.log(response)
      setLoading(false)

    } catch (err) {
      console.error('Error:', err);
      setLoading(false)
    }
  }
  useEffect(() => {
    getMovies();
  }, [])
  
  return (
    <div className="coming">
      <h2>예정작</h2>
      {
        isLoading ? (<div className='loading'>로딩중...</div>) :(<div className='comingWrap'>
          {
            nextMovie.map((nextMovie,i) =>{
              
              <Swiper modules={Autoplay}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className='nextMovieMwrap' key={i}      spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                640: {
                spaceBetween: 20,
                slidesPerView: 3,
                },
                320: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                  },768: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                    },1240: {
                      spaceBetween: 20,
                      slidesPerView: 5,
                      },
              }}
              >

                 <SwiperSlide>
                  
                  <Link to ={`coming/${nextMovie.id}`}/>
                  <div className="nextmovieBox">
                    <div className="nextMoiveImg">
                      <img src={`https://image.tmdb.org/t/p/w500/${nextMovie.poster_path}`} alt={nextMovie.title} />
                    </div>
                    <div className="nextMovieText">
                      <p>{nextMovie.title}</p>
                      <p>{nextMovie.release_date}</p>
                    </div>
                  </div>
                  </SwiperSlide>
              </Swiper>
            })
          }
        </div>)
      }
    </div>
  )
};

export default Upcoming;