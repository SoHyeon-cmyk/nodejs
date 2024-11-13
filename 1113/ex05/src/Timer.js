import React from 'react'
import {useState, useEffect} from 'react'


const Timer = () => {

  const [Count3, SetCount3] = useState(0)
  // var time = new Date().toLocaleTimeString()
  
  useEffect(() => console.log(`Count3: ${Count3}, time : ${new Date().toLocaleTimeString()}`))


  return (
    <div>
      <p>Count3:</p>
      <button onClick={()=>SetCount3(Count3+1)}>Increement</button>
    </div>
  )
}

export default Timer