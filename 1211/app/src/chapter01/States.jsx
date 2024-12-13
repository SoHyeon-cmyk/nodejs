import React,{useState} from 'react';

const States = () => {
  const [message,setMessage] = useState('')
  return (
    <div>
      <button>입장</button>
      <button>퇴장</button>
    </div>
  );
};

export default States;