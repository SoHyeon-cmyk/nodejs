import React from 'react';

const Book = (prpos) => {
  return (
    <div>
      <h1>{`이 책의 저자는 ${prpos.name}입니다.`}</h1>
      <h2>{`이책의 총 ${prpos.numOfPage}페이지로 이루어져 있습니다.`}</h2>
    </div>
  );
};

export default Book;