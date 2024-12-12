import React, { useState,useContext, useEffect } from 'react';
import {DataContext} from '../Shopping'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// let YellowBon = style.button{
//   background:yellow
//   color:black;

// }

const Detail = () => {
  let {id}= useParams()
  const {shopping} = useContext(DataContext)
let [count , setCount] = useState(0)
let [alert, setAlert] = useState(true)
useEffect(()=>{
  let timer = setTimeout(()=>{
    setAlert(false);
    return () => {
      clearTimeout(timer)
    }
  },3000)
},[]) 
  return (
  <>
  {
    alert === true ? <div className='alert'>3초이내 구매시 할인</div> : null
  }
    <div className='detail'>
    <div className='col'>
      <img src={process.env.PUBLIC_URL + shopping[id].img} alt={shopping[id].title} width= '80%' />
    </div>
    <div className='row'>
      <h4 className="mt20">{shopping[id].title}</h4>
      <p>{shopping[id].description}</p>
      <p>{shopping[id].price}</p>
<Link to='/cart' >
        <button className='btn'>주문하기</button>
</Link>
    </div>
    </div>
    <button onClick={() =>{}}>주문하기</button>
    </>
  );
};

export default Detail;