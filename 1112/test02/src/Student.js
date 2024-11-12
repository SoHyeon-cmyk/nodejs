import {useState} from 'react'

export const Student = () => {

  const [student, SetStudent] = useState({
    name:"",
    age:"NaN",
    gender:"",
    language:"JavaScript"
  })
  
  //각 입력창 값이 입력되면 handler함수를 호출하여 Student객체의 프로퍼티 값을 변경
  const handler = (e) => SetStudent({...student,[e.target.name]:e.target.value})
  //기존 student객체를 분해해서 할당, 변경이 안된 프로퍼티 값들은 그대로 할당, 변경된 값만 재할당
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
  
  
  
    return (
      // 전송버튼을 누르면 handleSubmit함수 호출
      <form onSubmit={handleSubmit}
        style={{ maxWidth: '400px', margin: 'auto', outline: '1px solid red' }}>
  
  
  
        <h1>입력 폼</h1>
        <div style={{ marginBottomL: '1rem' }}>
          <label htmlFor="name">이름</label>
          <input
            type='text'
            id='name'
    
            onChange={handler}
            required />
        </div>
  
        <div style={{ marginBottomL: '1rem' }}>
          <label htmlFor='age'>나이</label>
          <input
            type='number'
            id='age'
  
            onChange={handler}
            required />
        </div>
  
        <div className='control'>
      <label>
        <input type='radio' name='gender' 
        onChange={handler}
        checked={student.gender === '남성'}/>
        <span>남성</span>
      </label>
      <label>
        <input type='radio' name='gender' 
        onChange={handler}
        checked={student.gender === '여성'}/>
        <span>여성</span>
      </label>
  
        </div>
  
  
  
  
  
  
  
  
        <div style={{ marginBottomL: '1rem' }}>
          <label htmlFor='language'>프로그래밍 언어</label>
          <select
            type='text'
            id='language'
            
            onChange={handler}
            required>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="React">React</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
          </select>
        </div>
  
        <button type='submit'>전송</button>
  
        <hr />
  
        <h1>입력된 값</h1>
        <div className='control'>이름:{student.name}</div>
        <div className='control'>나이:{student.age}</div>
        <div className='control'>성별:{student.gender}</div>
        <div className='control'>선택과목:{student.language}</div>
      </form>
    )
  }

export default Student