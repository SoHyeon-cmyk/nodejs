import React, { useState } from 'react';
import './App'

const App1 = () => {
  const [names , setNames] = useState(['집' , '가고싶다'])
  const [input, setInput] = useState('')
  const upLoad= () =>{
    setNames((prevState)=>{
      console.log('이전 데이터:' , prevState)
      return [input, ...prevState]
    })

  }
  
  const InputChange = (e) =>{
    setNames(e.target.value)
  }

  return (
    <div className='App'> 
      <input type="text" value={input} onChange={InputChange}/>
      <button onClick={upLoad}>추가</button>
      {
        names.map((name, i )=>{
          return <p key={i}>{name}</p>
        })
      }
    </div>
  );
};

export default App1;