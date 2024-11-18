import React from 'react'
import { Link, Outlet } from 'react-router-dom' 

const Articles = () => {
  return (
    <>
      {/* /중첩된 라우트를 렌더링 할때 사용 , 경로에 따라 렌더링 할 수 있는 컴포넌트를 찾아서 그 결과를 렌더링*/}
      <Outlet/>
      
    <ul>
      <li><Link to = "/articles/1">게시글 1</Link></li>
      <li><Link to = "/articles/2">게시글 2</Link></li>
      <li><Link to = "/articles/3">게시글 3</Link></li>
    </ul>
    </>
  )
}

export default Articles