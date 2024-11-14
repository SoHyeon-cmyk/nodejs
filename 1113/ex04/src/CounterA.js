import React from 'react'


function CounterA({value,increase}){


  console.log("CounterA호출됨")
  // const [value, setValue] = useState(0);

  return(
    <div className='box'>
      <h1>CounterA</h1>
      <button onClick={increase}>{value}</button>
    </div>
  )
}

export default CounterA