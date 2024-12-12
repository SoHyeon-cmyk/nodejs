import React, { createContext } from 'react';
import './Shopping.css';
import Main from './page/Main.jsx';
import Topnav from './components/Topnav.jsx';
import {Route,Routes} from 'react-router-dom'
import Detail from './page/Detail.jsx';
import New from './page/New.jsx';
import Best from './page/Best.jsx';
import Not from './page/Not.jsx';
import Cart from './Cart.jsx';


const DataContext = createContext



const Shopping = () => {
  return (
    <Topnav>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail/:id' element={<Main/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/best' element={<Best/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Topnav>
  );
};


export default Shopping;