import React,{useState,useRef} from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios';

const CareerRow = (props) => {
  // 만일 isEdit에 true가 들어있으면 해당 행이 편집모드임을 의미
  // false면 편집모드x
  const [isEdit, setIsEdit] = useState(false);
  //useRef훅을 사용하여 company, position, start_date, end_date입력필드에 대한 참조를 각각 생성
  const conpanyInputRef = useRef();
  const positionInputRef = useRef();
  const start_dateInputRef = useRef();
  const end_dateInputRef = useRef();
//useRef로 최적화

  const e = props.career;
  const {checkedRowId ,onSelect, onDeleteRow} = props
//상태를 수정상태로 변경하는 함수
const onEditState = () =>{
  setIsEdit(true);
}
const onEditClick = async (id) =>{
  try{
    await axios.put
    alert()
  }
  catch{

  }  
}



  return (
    <tr key={e.id}>
      <td>{isEdit ? <input ref={conpanyInputRef} defaultValue={e.company}
        type="checkbox" 
        checked={checkedRowId.includes(e.id)}
        onChange={(event) => onSelect(event, e.id)}/>: e.company}</td>
      <td>{isEdit ? <input defaultValue={e.company}/> : e.company}</td>
      <td>{isEdit ? <input defaultValue={e.position}/>:e.position}</td>
      <td>
        {e.start_date} - {e.end_date} 
      </td>
      {/*게시글을 삭제할때 id값을 인자로 전달 */}
      <td
        onClick={() => onDeleteRow(e.id)}
        style={{
          display:'flex', justifyContent: 'center'
        }}>
      </td>
    </tr>
  )
}

export default CareerRow