import React from 'react';

import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
  } from 'react-icons/md';
  import cn from 'classnames';
  import './TodoListItem.scss';
  

//  //받아온 todo객체를 구조 분해 할당으로 할당으로 각각 id, text변수와 checked변수에 나눠 할당
//  const TodoListItem = ({todo ,onRemove, onToggle}) => {
//   const {id, text, checked} = todo;

//   return (
//     <div className="TodoListItem">
//       {/* {checked ? 'checkbox' : ""}    ↓와 같음*/}
//       <div 
//       className={cn('checkbox', {checked})}
//       onClick={() => {onToggle(id)}}
//       > 
//         {/* checked가 true면 체크된 체크박스 아이콘, false면 체크안된 아이콘 */}
//         {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
//         <div className="text">{text}</div>
//       </div>
//       {/* 삭제버튼을 누르면 TodoListItem에서 onRemove함수에 자신이 가진 id를 넣어서 삭제함수 호출 */}
//       <div className="remove" onClick={()=> onRemove(id)}>
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   )
// }



  const TodoListItem = ({ todo, onRemove, onToggle,style }) => {
    const { id, text, checked } = todo;
  
    return (
      <div className="TodoListItem-virtualized" style={style}>
        <div className='TodoListItem'>
        <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
        </div>
      </div>
    );
  };
  
  export default React.memo(TodoListItem);