import React, {useState} from 'react'
//스타일 컴포넌트 API 임포트
import styled from 'styled-components';

const StyleComponents = () => {
  //배경색으로 적용할 색상 코드
  const [color, setColor] = useState("#ffa");
  
  //배경색을 color상태로 적용
  const Div = styled.div`
    border: 1px solid gray;
    box-shadow: 5px 5px 5px gray;
    padding: 40px;
    margin: 20px;
    display: inline-block;
    background-color:${color}; 
  `;

  const H1 = styled.h1`
    margin: 10px;
  `;

  const Select = styled.select`
    padding: 4px;
    width: 150px;
    font-size: 12px;
  `;
  return (
    <Div>
      <H1>Color</H1>
      <Select 
        onChange={e => setColor(e.target.value)}
        value={color}
      >
        <option value="#ffa">yellow</option>
        <option value="#dfd">green</option>
        <option value="#ccf">blue</option>
        <option value="#fdd">red</option>
      </Select>
    </Div>
  )
}

export default StyleComponents