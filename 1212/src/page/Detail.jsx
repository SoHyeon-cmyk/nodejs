import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {DataContext} from '../Shopping';
import {Link} from 'react-router-dom';
/* import styled from 'styled-components'; */


/* let YellowBtn = styled.button `
  background:yellow;
  color: black;
  padding: 10px;
`

let YellowBtn1 = styled.button `
  background:${props => props.bg};
  color: ${props => props.bg === 'blue' ? 'white':'black'};
  padding: 10px;
` */

const Detail = (props) => {
  let {id} =useParams();
  const {shopping}= useContext(DataContext);

  let [count, setCount] = useState(0);
  let [alert, setAlert]=useState(true);
  useEffect(()=>{
   let timer=setTimeout(()=>{
    setAlert(false);
    return () =>{
      clearTimeout(timer)
    }
   },3000)
  },[])
  return (
    <>
    {
      alert===true? <div className='alert'>3초이내 구매시 할인</div>:null
    }
    <div className='detail'>
      <div  className='col'>
        <img src={shopping[id].img} alt={shopping[id].title} />
      </div>
      <div className="row">
          <h4 className="mt20">{shopping[id].title}</h4>
          <p>{shopping[id].description}</p>
          <p>가격: {shopping[id].price}</p>
         <Link to='/cart'>
           <button className='btn'>주문하기</button>
         </Link>
          {/* <YellowBtn1 bg="blue">주문하기</YellowBtn1> */}
      </div> 
    </div>
    </>
  );
};

export default Detail;