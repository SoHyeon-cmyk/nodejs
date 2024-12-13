import React from 'react';
import { RiMovie2Line } from "react-icons/ri";
import { Link , NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const activeStyle = {

  }
  let navigate = useNavigate()
  return (
    <div className='navbar'>
       <h2 className='logo'><Link to="/"><RiMovie2Line /></Link></h2>
      <div className='nav'>
        <ul>
          <li>
          <NavLink to="/" style={({isActicve})=>(isActicve ? activeStyle : undefined)} >Home</NavLink>
          <NavLink to="/movie" style={({isActicve})=>(isActicve ? activeStyle : undefined)} >Movies</NavLink>
          <NavLink to="/events" style={({isActicve})=>(isActicve ? activeStyle : undefined)} > Events</NavLink>
          <NavLink to="/users" style={({isActicve})=>(isActicve ? activeStyle : undefined)} >Users</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;