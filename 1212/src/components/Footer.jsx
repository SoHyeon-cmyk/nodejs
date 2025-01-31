import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-inner">
          <div className="info">
            <ul>
              <li><Link to="#">이용안내</Link></li>
              <li><Link to="#">이용약관</Link></li>
              <li><Link to="#">개인정보처리방침</Link></li>
              <li><Link to="#">파트너쉽</Link></li>
              <li><Link to="#">멤버십</Link></li>
              <li><Link to="#">리크루트</Link></li>
              <li><Link to="#">모바일버전</Link></li>
            </ul> 
          </div>
          <div className="authbtn">
            <ul>
              <li>SN Fashion Group.Co.Ltd Info</li>
              <li><Link to="#">정품인증</Link></li>
              <li><Link to="#">KG 이니시스</Link></li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Footer;