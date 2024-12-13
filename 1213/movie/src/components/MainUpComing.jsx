import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MainUpComing = () => {
   const [upComingMovies, setUpComingMoives]=useState([]);
   const [isLoading, setLoading]=useState(true);

   const getMovies= async () => {
      try{
         const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=ad272d7f5267ff8f1d7bee9e6e497e31&language=ko`);
         setUpComingMoives(response.data.results)
         // console.log(response)
         setLoading(false)

      }catch(err){
         console.error('Error:',err);
         setLoading(false)
      }
   }
   useEffect(()=>{
      getMovies();
   }, [])

   const getRandomMovie=()=>{
      const randomIndex=Math.floor(Math.random()*upComingMovies.length);
      return upComingMovies[randomIndex]
   }
   const randomMovie=getRandomMovie();
   return (
      <div className='upComing'>
         {
            isLoading?(<div className='loading'>로딩중..</div>):(
               <div className="upMovie">
                  <div className="upComingImg">
                  <img src={`https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path}`} alt={randomMovie.title} />
                  </div>
                  <div className="upComingInfo">
                     <div className="upInfoImg"><img src={`https://image.tmdb.org/t/p/w300/${randomMovie.poster_path}`} alt={randomMovie.title} /></div>
                     <div className="upInfoText">
                        <p className="title">{randomMovie.title}</p>
                        <p className="overview">{randomMovie.overview}</p>
                        <p className="date">{randomMovie.release_date}</p>
                     </div>
                  </div>
               </div>
            )
         }
         
      </div>
   );
};

export default MainUpComing;