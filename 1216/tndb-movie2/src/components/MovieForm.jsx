import React, { useState } from 'react';




const MovieForm = ({ addMovie }) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [titleError, setTitleError] = useState('')//제목에러상태관리
  const [yearError, setYearError] = useState('')//개봉년도에러상태관리

  const resetForm = () => {
    setMovieTitle('')
    setMovieYear('')
  }

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if(!movieTitle){
      setTitleError('제목을 입력해주세요.')
      validated=false;
    }   if(!movieYear){
      setTitleError('개봉년도를 입력해주세요.')
      validated=false;
    }
    return
  }
  const resetErrors = () => {
    setTitleError();
    setYearError();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
    addMovie({
      id: Date.now(),
      title: movieTitle
      , year: movieYear
      
    })
    resetForm()
    
  }
}
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='영화 제목을 입력하세요' value={movieTitle} onChange={e => setMovieTitle(e.target.value) } />
        <br />
        <div className="error">{titleError}</div>
        <input type="text" placeholder='개봉 년도를 입력하세요' value={movieYear} onChange={e => setMovieYear(e.target.value)} />
        <br />
        <div className="error">{yearError}</div>
        <button type='submit'>추가</button>
      </form>

    </div>
  );
};

export default MovieForm;