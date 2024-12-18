import React, { use, useState } from 'react';
import ListMovie from '../components/ListMovie';
import MovieForm from '../components/MovieForm';


const Movies = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([
    { title: '바람과 함께 사라지다', year: 2000 },
    { title: 'Venom', year: 2024 },
    { title: 'Moana', year: 2023 }
  ]);

  const removeMovie = (id) =>{
    setMovies(movies.filter((movie)=>{
      return movie.id !== id
    }))
  }

  const addMovie = (movie) =>{
    setMovies([
      ...movies,movie
    ])
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    setMovies([...movies,//전개연산자
      {
        title:movieTitle,
        year:movieYear
    }
  ])
  setMovieTitle('')
  setMovieYear('')
  }
  return (

    <div className='movies'>
      <h1>Movie List</h1>
      {
        
        movies.map((item, i) => {
          return (
            <ListMovie movie={item} key={i} removeMovie={removeMovie}/>
          )
        })
      }
      <MovieForm addMovie={addMovie}/>




    </div>


  );
};

export default Movies;