import React, { useEffect } from 'react';


const App = () => {
  useEffect(()=>{
    fetch('https://jsonplacehoder.typicode.com/').then((res)=>res.json()).then((res)=>console.log(res))
  },[])
  return (
    <div>
      
    </div>
  );
};

export default App;