import './App.css';
import axios from 'axios'
import {useState} from "react"

function App() {
  const [data, setData] = useState(null);
  //데이터를 받아오기 위해 비동기 함수 생성
  const onClick = async () =>{
    try{
      //response에 뉴스정보를 받아옴
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=588d97cc617f470cb626ce72f304f817')
      setData(response.data)
    }catch(e){ //응답오류시 오류객체 콘솔출력
      console.log(e)
    }
  }
  return (
    <div className="App">
      <div>
        <button onClick={onClick}>블러오기</button>
      </div>
      {/* data가 있으면 textarea태그 표시, 없으면 표시x */}
      {data && (
        <textarea
        rows={7}
        value={JSON.stringify(data)}
        readOnly={true}
        />
      )}
    </div>
  );
}

export default App;

// 588d97cc617f470cb626ce72f304f817