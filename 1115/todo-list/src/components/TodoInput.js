import React, {useState, useCallback} from 'react'
import './TodoInput.scss';
import {MdAdd} from 'react-icons/md'

//App컴포넌트에서 onInput함수를 props로 받음
const TodoInput = ({onInput}) => {
  //입력값을 관리할 수 있도록 useState를 사용하여 value상태를 정의
  const [value, setValue] = useState('')
  //input에 글자를 입력할 때 컴포넌트가 리렌더링될 때마다 
  //함수로 새로 만들지 않고, 한번만 함수를 만들고 재사용할 수 있도록 useCallback훅을 사용함
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  },[])

  const onSubmit = useCallback((e) => {
    e.preventDefault(); //submit이벤트는 브라우저에서 새로고침을 발생시킴, 이를 방지하기 위해 호출
    //onInput함수에 현재 useState를 통해 관리하고 있는 value값을 파라미터로 넣어서 실행
    onInput(value);
    setValue('')
  },[onInput,value])
    
  return (
    <form className='TodoInput' onSubmit={onSubmit}>

      <input
       placeholder='할 일을 입력하세요' 
       value={value}
       onChange={onChange}
       />
      <button type='submit'><MdAdd/></button>

    </form>
  )
}

export default TodoInput