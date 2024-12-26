import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';



const Header = () => {
  const [activeNav, setActiveNav] = useState(1)



  return (
    <div>
      <header className='nav'>
        <NavLink><img src="" alt="Logo" /></NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={()=>{setActiveNav(1)}}>Home</NavLink>
              <NavLink to="/search" onClick={()=>{setActiveNav(2)}}>Search</NavLink>
              <NavLink to="/recipe" onClick={()=>{setActiveNav(3)}}>Recipe</NavLink>
              <NavLink to="/comunity" onClick={()=>{setActiveNav(4)}}>Comunity</NavLink>
              <NavLink to="/mypage" onClick={()=>{setActiveNav(5)}}>Mypage</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;