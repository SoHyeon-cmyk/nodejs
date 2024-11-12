import { Fragment, useState } from 'react';
import './App.css';



  const Greeting = () => {
  const [isLoggedIn ,setisLoggedIn] = useState(false)




  return (
    
    <Fragment>
      <div>
      <input type='checkbox'
          checked={isLoggedIn}
          onChange={(e) => setisLoggedIn(e.target.checked)}/>
   {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </div>

  </Fragment>


  );
}

export default Greeting;
