import React, { useEffect, useState } from 'react';
import MainUpComing from '../components/MainUpComing';
import Search from '../components/Search';
import axios from 'axios';
import Card from '../components/Cards';
import Upcoming from '../components/Upcoming';


const Home = () => {
  const [appMovie, setAppMovie] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [visibleMovies, setVisibleMovies] = useState(5);
  const moviesPerPage = 5;

  const getMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`);
      setAppMovie(response.data.results)
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

  const handleLoadMore = () => {
    setVisibleMovies((prevVisible) => {
      return (
        prevVisible + moviesPerPage

      )
    })
  }
  return (
    <div className='home'>
      <MainUpComing />
      <Search />
      <div className="mainContainer mt30">
        <h2>상영작</h2>
        <div className="mainMovie">
          {
            isLoading ? (<div className='loding'> 로딩중... </div>) : (
              <div>
                <div className='movie'>
                  {
                    appMovie.slice(0, visibleMovies).map(aM => (
                      <Card
                        key={aM.id}
                        id={aM.id}
                        title={aM.title}
                        release_date={aM.release_date}
                        average={aM.vote_average}
                        posterPath={aM.poster_path}
                      />
                    ))
                  }

                </div>
                {
                  appMovie.length > visibleMovies && (
                    < div className='more' >
                      <button className='theMore' onClick={handleLoadMore}>더보기</button>
                    </ div >
                  )
                }
              </div>
            )
          }
        </div>
      </div>
          <Upcoming/>

      </div>
  );
};

export default Home;