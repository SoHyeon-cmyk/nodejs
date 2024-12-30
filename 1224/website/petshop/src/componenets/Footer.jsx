import React from 'react';
import { PiDogFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="foot-addr">
          <div className="footLogo"><PiDogFill />pet</div>
          <address>경기도 안산시 동서코아 301호 3층 전체</address>
          <div className="copy">&copy; 2024 All Copy Right ..</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;