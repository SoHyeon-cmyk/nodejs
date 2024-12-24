import React from 'react';

const Footer = ({isdark, setDark}) => {
  return (
    <footer className='footer'
    style={{
      backgroundColor:isdark ? 'black' : 'lightgray'
    }}>
      <button className='button'>Color Mode</button>
    </footer>
  );
};

export default Footer;