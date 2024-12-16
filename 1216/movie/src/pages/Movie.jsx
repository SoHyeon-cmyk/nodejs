import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const Movie = () => {
  const {id}= useParams();
  const [isLoading, setLoading]=useState(true);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`)
    .then(res=>{

    })
  },[])
  return (
    <div>
    isLoading ? (<div className='loding'> 로딩중... </div>) : (
      <div className="movie">
        <div className="movieBox">
          <img src={``} />
        </div>
      </div>
    )
    </div>
  );
};

export default Movie;