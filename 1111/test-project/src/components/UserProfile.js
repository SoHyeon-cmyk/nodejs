import React from 'react'

const UserProfile = () => {
  //person객체를 생성
  const person = {
    name: "홍길동", age : 20
  }
  //표현식은 {}안에 작성
  return (
    <p>Name : {person.name}, Age: {person.age}</p>
  )
}

export default UserProfile