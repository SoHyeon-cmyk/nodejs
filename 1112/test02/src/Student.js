import useForm from "./useForm";

const Student = () => {
  //상태 변수 및 설정 함수 정의

  //useForm컴포넌트로 student객체와 handler를 보내줌 
  const [student, handler] = useForm({
    name:"",
    age: NaN,
    gender: "",
    language:"Javascript",
    enabled: false
  })

  //각 입력창에 값이 입력되면 handler함수를 호출하여 Student객체의 프로퍼티 값을 변경함
  // const handler = (e) => e.target.type ==="checkbox" ? 
  //  setStudent({...student, [e.target.name]: e.target.checked}) : setStudent({...student, [e.target.name]: e.target.value})
  //기존 student객체를 분해해서 할당을 하는데 변경이 안된 프로퍼티값은 그대로 복제하고 변경된 프로퍼티속성만 변경된 값으로 넣어줌
//이벤트가 발생한 요소의 타입이 체크박스면 해당 프로퍼티에 checked값을 할당하고 그렇지 않으면 value값을 할당



  //폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();//submit을 막아줌
  }

  return (
    //전송버튼(submit)을 누르면 handleSubmit함수가 호출됨
    <form onSubmit={handleSubmit}
      style={{ maxWidth: '400px', margin: 'auto', outline: '1px solid red' }}
    >
      <h1>입력폼</h1>
      <div style={{ marginBottom: '1em' }}>
        <label htmlFor="name">이름: </label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handler}
          required
        />
      </div>
      <div style={{ marginBottom: '1em' }}>
        <label htmlFor="age">나이: </label>
        <input
          type='number'
          id='age'
          name='age'
          onChange={handler}
          required
        />
      </div>
      <div className='control'>
        <label>
          <input type='radio' name='gender'
            value="남성"
            onChange={handler}
            checked={student.gender === '남성'}
          />
          <span>남성</span>
        </label>
        <label>
          <input type='radio' name='gender'
            value="여성"
            onChange={handler}
            checked={student.gender === '여성'}
          />
          <span>여성</span>
        </label>
      </div>

    <div className='control'>

    <label>

        <input type='checkbox' name='enabled' onClick={handler}/>
        <span>활성화</span>
    </label>

    </div>






      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="language">프로그래밍 언어: </label>
        <select
          id='language'
          name='language'
          onChange={handler}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>
      <button type='submit'>전송</button>
      <hr />
      <h1>입력된 값</h1>
      <div className='control'>이름 : {student.name}</div>
      <div className='control'>나이 : {student.age}</div>
      <div className='control'>성별 : {student.gender}</div>
      <div className='control'>선택과목 : {student.language}</div>
      <div className='control'>활성화: {student.enabled ? 'true' : 'false'}</div>
      
    </form>
  )
}

export default Student