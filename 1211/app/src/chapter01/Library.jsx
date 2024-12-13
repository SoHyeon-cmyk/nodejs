import React from 'react';
import Book from './Book';

const Library = (props) => {
  return (
    <div>
      <Book name="아아아아악"num0fPage={500} />
      <Book name="타임스크립트"num0fPage={5000} />
    </div>
  );
};

export default Library;