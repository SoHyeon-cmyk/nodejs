import ScrollBox from './ScrollBox';
import { useState,useRef } from 'react';
import './App.css';
import styled from 'styled-components';



const Div = styled.div`
	padding: 20px;
	& select { padding: 5px; width: 100px; }
	& button { padding: 5px 20px; margin-left: 10px; }
`

function App() {
  //데이터 목록 상태
  const [list, setList] = useState([]);
  //색상을 저장하는 레퍼런스
  const colorRef = useRef("#ffa");

  // add버튼이 클릭되면, 이 함수가 호출됨
  const addItem = () => {
    const time = new Date().toLocaleTimeString();
    // 현재 시각 문자열이 데이터목록에 추가
    setList([...list, {time, color : colorRef.current}])
  }

  return (
    <Div>

    <select>
    <option value="#ffa">yellow</option>
				<option value="#dfd">green</option>
				<option value="#ccf">blue</option>
				<option value="#fdd">red</option>

    </select>




    <div style={{padding:"20px"}}>

    <button onClick={()=>addItem()}>AddItem</button>

      {/* 스크롤박스 컴포넌트로 넓높이 값을 props로 전달 */}
      <ScrollBox width="200px" height="500px">
        {/* 리스트 배열을 MAP함수로 데이터를 스크롤박스 자식으로 넣어줌 */}
        {list.map(item => <p>{item}</p>)}
      </ScrollBox>
    </div>
    </Div>
  );
}

export default App;
