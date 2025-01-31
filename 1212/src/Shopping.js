import {createContext, useState} from 'react';
import './Shopping.css';
import Main from './page/Main';
import Navwrap from './components/Navwrap';
import { Routes, Route } from 'react-router-dom';
import Detail from './page/Detail';
import New from './page/New';
import Best from './page/Best';
import Aaa from './page/Aaa';
import Bbb from './page/Bbb';
import Not from './page/Not';
import data from './data.js';
import Cart from './page/Cart';
import Footer from './components/Footer';

const DataContext=createContext();


const Shopping = () => {
  let [shopping]=useState(data)
  return (
    <DataContext.Provider value={{shopping}}>
      <div>
        <Navwrap />
        <Routes>
           <Route path="/" element={ <Main />} />  
           <Route path="/detail/:id" element={<Detail />} />
           <Route path="/new" element={<New />}>
              <Route path="aaa" element={<Aaa />}/>
              <Route path="bbb" element={<Bbb />}/>
           </Route>
           <Route path="/best" element={<Best />} />
           <Route path="*" element={<Not />} />
           <Route path="/cart" element={<Cart />} />
        </Routes>
       <Footer />
      </div>
    </DataContext.Provider>
  );
};


export default Shopping;
export {DataContext}