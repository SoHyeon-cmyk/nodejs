import React, { useState } from 'react';

const Content = ({isdark}) => {
  const [inputvalue, setInputValue] = useState('')
  const handleChange = (e) => {
setInputValue(e.target.value)
  }
  const handleSubmit = () => {
    alert(inputvalue)
    setInputValue('')
  }
  return (
    // <div className='content' style={{
    //   background: isdark ? 'steelblue' : 'pink',
    //   color: isdark ? 'pink' : 'steelblue',
    // }}>
    //   <p>졸려</p>
    // </div>
    <div>
      <input type="text"  value={inputvalue} onChange={handleChange}/>
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default Content;