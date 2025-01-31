// import React, { useState } from 'react';
// import data from '../data.js';
import Card from '../Card.jsx';
import Today from '../components/Today.jsx';

const Main = () => {
  // let [shopping]=useState(data);
  return (
    <div>
      {/*  <div className="main-bg" style={{backgroundImage:'url('+bg+')'}}></div>
       */}
      <div className="main-bg">
        <img src={process.env.PUBLIC_URL + "/img/img.jpg"} alt="mainImg" />
      </div>
      <main className="mt20">
        <div className="title">
          <h3>아뜨랑스는</h3>
          <p>
            화면너머의 여러분에게 따뜻한 쇼핑메이트이고 싶습니다. <br />
            일상에 스며드는 실용적인 옷들부터 <br />
            가장 빛이 나야하는 순간까지 언제나 함께 하겠습니다.
          </p>
        </div>
        <div className="in">
          <h2>겨울마중</h2>
          <h1>in 스위스</h1>
          <div className="row">
            {/*  <Card  shopping={shopping[0]} i={1}/>
            <Card  shopping={shopping[1]} i={2}/>
            <Card  shopping={shopping[2]} i={3}/> */}
            {/* {shopping.map((item, idx) => {
              return <Card shopping={shopping[idx]} i={idx + 1} key={idx} />;
            })} */}
            <Card />
          </div>
        </div>
        <Today />
      </main>
    </div>
  );
};

export default Main;
