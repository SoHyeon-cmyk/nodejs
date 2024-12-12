import React from 'react';
import Book from './Book';


const Library = (prpos) => {
  return (
    <div>
      <Book name="리액트 처음 배우기" numOfPage={500} />
      <Book name="타입스크립트 어려워" numOfPage={300} />

    </div>
  );
};

export default Library;