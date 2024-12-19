import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../components/User'




const Users = () => {
  
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false)
  const [selectUser, setSelectUser] = useState(null)
  
const userInfo = (info) =>{
  setSelectUser(info)
}


  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => setUsers(response.data))
  },[])

  

  return (
    <div className='user'>
      <h1>User List</h1>
      {
        users.map( user =>(
          <div className='userCard'>
            <div className="active" onClick={()=>{setModal(!modal)}}>{user.name}</div>


            {
              modal === true ? (<Modal userInfo={selectUser}/>):null
            }
              
          </div>
        ))
      }




      {/* <Link to={`/users/${user.id}`}>
        {user.name}
      </Link> */}

    </div>
  );
};
function Modal () {
  return(
    <div className='modal'> 
      <p>이메일</p>
      <p>휴대폰</p>
      <p>웹사이트</p>
    </div>
  )
}

export default Users;