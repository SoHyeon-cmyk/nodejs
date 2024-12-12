import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./Topnav.module.css"
import { SiMoonrepo } from "react-icons/si";


const Topnav= () => {
  let navigate = useNavigate()
  return (
    <div>
      <nav>
        <ul>
          <li className='Logo'>
            <Link onClick={()=>{navigate('/')}}>아뜨랑스</Link>
            <span><SiMoonrepo/></span>
          </li>
          <li>
            <Link onClick={()=>{navigate('/')}} >home</Link>
          </li>
          <li>
            <Link onClick={()=>{navigate('/best')}}>Best</Link>
          </li>
          <li>
            <Link onClick={()=>{navigate('/new')}} >New</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Topnav;