import React from 'react';
import {useSelector} from 'react-redux'

const Cart = () => {
  let state = useSelector((state)=>{return state})
  console.log(state.cart[0].name)
  return (
    <div className='cart'>
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
            <td><button>+</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;