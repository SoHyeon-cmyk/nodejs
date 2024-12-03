import React, { useEffect, useState } from 'react'
import { AddBox } from '../style/career.styles'
// import DeleteSweepIcon from '@mui/icons-material/DeleteSweepIcon'

const CareerViewTable = () => {
  const [careerList, setCareerList] = useState();
  useEffect(() => {
    const fetchCareerList = async() =>{
      try{}catch(err){}
    }
  })
  return (
    <secton>
      <AddBox style={{marginBottom:'50px'}}/>
      <thead>
        <tr>
          <th><input type='checkbox'></input></th>
          <th> 직책(활동내용)</th>
          <th> 활동 일자</th>
          {/* <th><DeleteSweepIcon/></th> */}
        </tr>
        <tr>
          <th>시작일</th>
          <th>종료일</th>
        </tr>
      </thead>
      <tbody>
        {careerList.map(e) => 
        
         <tr key={e.id} >
        <tr>
          <td><input/></td>
          <td><input/></td>
          <td><input type='date'/></td>
          <td><input type='date'/></td>
        </tr>
        }
        
      </tbody>
      
      {/* <tfoot>
        <tr>
          <td colSpan={4}>
            <button>추가</button>
          </td>
        </tr>
      </tfoot> */}
    </secton>
  )
}

export default CareerViewTable