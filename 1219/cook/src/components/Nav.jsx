import React, { useContext } from 'react'; //상위컴포넌트에서 props 내려받기
import { DataContext } from '../App';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const {data,loading} = useContext(DataContext)

  if(loading){
    return <h1 className='loading'>데이터 로딩 중</h1>
  }
  const categories = [...new Set(data.map((item)=>item.RCP_PAR2))]//중복값 제외, 고유 값은 set 객체로 생성
  //새로운 배열로 만들어 categoies변수에 반환

  const activeStyle = {
    color:'#f00',
    textShadow:'2px 2px 5px #000'
  }

  return (
    <div className='nav'>
      <div className="inner">
        <ul className="menu">
          <li>
          <NavLink to='' style={({isActive})=>(isActive ? activeStyle : undefined)}>All</NavLink>
          </li>
            {
              categories.map((category)=>(
                <li key={category.RCP_SEQ}>
                  <NavLink to={`category/${category}`} style={({isActive})=>(isActive ? activeStyle : undefined)}>{category}</NavLink>
                </li>
              ))
            }

        </ul>
      </div>
    </div>
  );
};

export default Nav;