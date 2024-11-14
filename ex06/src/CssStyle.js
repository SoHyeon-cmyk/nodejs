import React, {useState} from 'react'
import './style.css';

const CssStyle = () => {
  //배경색을 적용하기 위한 클래스이름 상태값
  const [color, setColor] = useState('yellow');
  //클래스 이름을 담을 변수 "App "문자를 color상태와 조합하여 변수 할당 
  const divClassName = "App " + color;
  return (
    //위에서 조합한 클래스 이름을 div에 적용
    <div className={divClassName}>
      <h1>Color</h1>
      <select 
        onChange={e=>setColor(e.target.value)} 
        value={color}
      >
        <option>yellow</option>
        <option>green</option>
        <option>blue</option>
        <option>red</option>
      </select>
    </div>
  )
}

export default CssStyle