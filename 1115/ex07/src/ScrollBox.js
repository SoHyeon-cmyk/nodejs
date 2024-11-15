import React , { useEffect, useRef} from 'react'
import styled from 'styled-components'


const Div = styled.div`
border:1px solid #ccc;
padding:5px;
overflow-y:scroll;
width:${props => props.w};
height:${props => props.h};
// 외부에서 전달받은 w,h값으로 대입
`
//children은 스크롤박스 컴포넌트의 자식컴포넌트를 전달받음
const ScrollBox = ({width, height, children}) => {

  //컴포넌트 렌더링후 divref에 할당된 요소 위치로 이동
  useEffect(()=> divRef.current?.scrollIntoView())
  //?. = divre.current가 null이거나 undifinded일 경우 오류가 발생하지 않게 함


  const divRef = useRef(null) //이변수에 대입된 값은 컴포넌트가 언마운트 될때까지 유지
  return (

       <Div w={width} h= {height}> 
       {children}
       {/* divref로 div 요소를 넣음 */}
      <div ref={divRef}></div>
    </Div>
  )
}

export default ScrollBox