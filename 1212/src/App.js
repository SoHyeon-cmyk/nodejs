import './App.css';
import React, {useState} from 'react';

/* import State from './chapter01/State';
import MyComponent from './MyComponent'; */


 
function App() {
 let [post, setPost] = useState(['안산맛집', '서초 맛집', '종로맛집']);
/*  let [cnt, setCnt] = useState(0); */
 let [modal, setModal]=useState(false);
 let [likes, setLikes]=useState(Array(post.length).fill(0));
let [input, setInput]=useState('');

 const setPostLikes=(index, newLikes)=>{
   setLikes(prevLikes => {
      const newLikesArray=[...prevLikes];
      newLikesArray[index] = newLikes;
      return  newLikesArray;
   })
 }

 
  return (

    <div className="App">
      <div className="black-nav">
        <h4>블로그만들어볼까요</h4>
      </div>
      {
        post.map(function(item, i){
          return(
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal)}} style={{color:'blue', fontSize:'20px'}}>{item} <span style={{color:'red'}} onClick={(e)=>{ e.stopPropagation(); setPostLikes(i, likes[i]+1)}}> ❤</span> {likes[i]}</h4>
              <p>2024년 12월 11일</p>
              <button onClick={()=>{
                let copy=[...post];
                copy.splice(i, 1);
                setPost(copy)
              }}>삭제</button>

            </div>
          )
        })
      }
     
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value); console.log(input)}} />
      <button onClick={()=>{
        let copy=[...post];
        copy.unshift(input);
        setPost(copy)
      }}>글쓰기</button>
      

      {/* <div className='list'>
        <h4 style={{color:'blue', fontSize:'20px'}}>{post[0]} <span style={{color:'red'}} onClick={()=>{setCnt(cnt+1)}}> ❤</span> {cnt}</h4>
        <h4>글제목</h4>
        <p>2024년 12월 11일</p>
      </div>
      <div className='list'>
        <h4 style={{color:'blue', fontSize:'20px'}}>{post[1]}</h4>
        <h4>글제목</h4>
        <p>2024년 12월 11일</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}} style={{color:'blue', fontSize:'20px'}}>{post[2]}</h4>
        <h4>글제목</h4>
        <p>2024년 12월 11일</p>
      </div> */}
      {
        modal === true ? <Modal/> : null
      }
    </div>
    
  );
}
function Modal(){
  return(
    <div className="modal">
  <h2>글제목</h2>
  <p>날짜</p>
  <p> 상세 내용 </p>
</div>
  )
}

export default App;
