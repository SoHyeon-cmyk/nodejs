import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div className='header'>
      <div className="header-inner">
        <div className="logo">
          <Link to="/"><img src={process.env.PUBLIC_URL+"/public/image/logo.png"} alt="" /></Link>
        </div>
        <div className="nav">
          <ul className='loginAndsignup'>
            <li><Link to="#">로그인</Link></li>
            <li><Link to="#">회원가입</Link></li>
          </ul>
          <ul className="menu">
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;