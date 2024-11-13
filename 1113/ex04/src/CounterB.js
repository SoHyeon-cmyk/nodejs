import { useState } from 'react'


function CounterB(){


  console.log("CounterA호출됨")
  const [value, setValue] = useState(0);

  return(
    <div className='box'>
      <h1>CounterB</h1>
      <button onClick={()=> setValue (value + 1)}>{value}</button>
    </div>
  )
}

export default CounterB