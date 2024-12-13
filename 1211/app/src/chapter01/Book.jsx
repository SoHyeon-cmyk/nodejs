import React from 'react'

const Book = (props) => {
  return (
    <div>
      <h1>{`이 책의 저자는 ${props.name}이다.`}</h1>
      <h2>{`이 책의 총 ${props.num0fPage}페이지로 이루어져 있습니다.`}</h2>
    </div>
  )
}

export default Book