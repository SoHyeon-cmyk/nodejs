import { useState } from 'react'

const UserForm = () => {
  const [name, SetName] = useState('')
  const [age, SetAge] = useState('')
  const [language, SetLanguage] = useState('React')
  const [gender, SetGender] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    // 경고창
    alert(`Name: ${name}\nAge: ${age}\nLanguage: ${language}`)
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
          value={name}
          onChange={(e) => SetName(e.target.value)}
          required />
      </div>

      <div style={{ marginBottomL: '1rem' }}>
        <label htmlFor='age'>나이</label>
        <input
          type='number'
          id='age'
          value={age}
          onChange={(e) => SetAge(e.target.value)}
          required />
      </div>

      <div className='control'>
    <label>
      <input type='radio' name='gender' 
      onChange={(e) => SetGender('남성')}
      checked={gender === '남성'}/>
      <span>남성</span>
    </label>
    <label>
      <input type='radio' name='gender' 
      onChange={(e) => SetGender('여성')}
      checked={gender === '여성'}/>
      <span>여성</span>
    </label>

      </div>








      <div style={{ marginBottomL: '1rem' }}>
        <label htmlFor='language'>프로그래밍 언어</label>
        <select
          type='text'
          id='language'
          value={language}
          onChange={(e) => SetLanguage(e.target.value)}
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
      <div className='control'>이름:{name}</div>
      <div className='control'>나이:{age}</div>
      <div className='control'>성별:{gender}</div>
      <div className='control'>선택과목:{language}</div>
    </form>
  )
}

export default UserForm