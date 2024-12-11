import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shopping.css'
import data from './data';
import Card from './Card';


const Shopping = () => {
  let [shopping]= useState(data);
  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">아뜨랑스</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="main-bg" style={{backgroundImage:'url('+bg+')'}}></div> */}
      {/* <div className="main-bg">
      <img src={process.env.PUBLIC_URL + 'img/image.png'} alt="main_img" />
      </div> */}

      <div className="mainBg"></div>
      <main className="mt20">
        <div className="title">
          <h3>아뜨랑스는</h3>
          <p>화면너머의 여러분에게 따뜻한 쇼핑메이트이고 싶습니다.
            <br/>
            일상에 스며드는 실용적인 옷들부터
          <br/>
            가장 빛이 나야하는 순간까지 언제나 함께 하겠습니다.
          </p>
        </div>
        <div className="in">
          <h2>겨울마중❄️</h2>
          <h1>in 스위스</h1>
          <div className="col">
        {/* <Card shopping={shopping[0]} i = {1}/>
        <Card shopping={shopping[1]} i = {2}/>
        <Card shopping={shopping[2]} i = {3}/> */}
        {shopping.map((item,idx)=>{
          return(
            <Card shopping={shopping[idx]} i = {idx} key={idx}/>
            
          )
        })
      }
          </div>
        </div>
      </main>
    </div>
  );
};


export default Shopping