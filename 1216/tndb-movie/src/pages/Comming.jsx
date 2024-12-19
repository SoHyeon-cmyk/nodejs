import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {useParams } from 'react-router-dom';


const Comming = () => {
  const APIKEY =process.env.REACT_APP_API_TNDB_KEY
  const {id} =useParams();
  const [isLoading, setLoading]=useState(true);
  const [comming, setComming] = useState(null);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${APIKEY}?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`)
  .then(res=>{
      console.log(res)
      setComming(res.data);
      setLoading(false);
    })
  },[id]);

  return (
    <div>
      {
        isLoading ? (<div className="loding" >로딩중...</div>) : (
          <div className='movie'>
            <div className="movieBox">
              <img src={`https://image.tmdb.org/t/p/w500/${comming.backdrop_path}`} alt="" />
            </div>
            <div className="textBox">
              <div className="textBoxTitle">{comming.title}</div>
              <div className="textBoxOriginalTitle">{comming.original_title}</div>
              <div className="textBoxOverview">{comming.overview}</div>
              <div className="textBoxGenres">
                {comming.genres.map(genre=> (<span key={genre.id}>{genre.name}</span>))}
              </div>
              <div className="textBoxDate">{comming.release_date}</div>
              {/* <div className="textBoxAverage">⭐ {comming.vote_average}</div> */}

            </div>
          </div>
        )
      }
    </div>
  );
};

export default Comming;