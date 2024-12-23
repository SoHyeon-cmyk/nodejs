import React, { useEffect, useState } from 'react';
import Timer from './components/Timer';

const Timer1 = () => {
  const [showTimer , setShowTimer] = useState(false)

  return (
    <div>
      {
        showTimer && <Timer1/>
      }
      <Timer/>
      <button onClick={()=>{setShowTimer(!showTimer)}}>toggle timer</button>
    </div>
  );
};


export default Timer1;
