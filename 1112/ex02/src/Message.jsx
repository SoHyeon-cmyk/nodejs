import React from 'react'

//App컴포넌트에서 전달받은 속성을 props파라미터 객체를 통해 조회
const Message = (props) => {
  //props로 전달받은 color값을 msgStyle의 color프로퍼티 값으로 할당
  const msgStyle = {color : props.color, fontSize:props.size}
  return (
    <div style={msgStyle}>
      {props.value}{/*props의 value값으로 텍스트를 표시*/}
    </div>
  )
}

export default Message