import React from 'react';
import {useSelector , useDispatch} from 'react-redux'
import {addCount} from './Store'

const Cart = () => {
  let state = useSelector((state)=>{return state})
  console.log(state.cart[0].name)
  let dispatch = useDispatch()
  return (
  
    <div className='cart'>
      {state}의 장바구니
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a,i)=>
          <tr key={i}>
            <td>{state.cart[i].id}</td>
            <td>{state.cart[i].name}</td>
            <td>{state.cart[i].count}</td>
            <td><button onClick={()=>{dispatch(addCount(state.cart[i]))}}>+</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;