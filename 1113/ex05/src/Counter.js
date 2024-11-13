import React,{useEffect,useState} from 'react'

const Counter = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  //useEffect함수가 호출됨 (마운트, 업데이트, 언마운트시 호출)
useEffect(()=> console.log('useEffect #1' , count1),[]) //마운트 될 때만 호출
useEffect(()=> console.log('useEffect #2' , count2),[count2]) //count2가 업데이트 될때마다 호출
useEffect(() => {
    console.log('mount')//마운트 될 때 마다 실행
    return () => console.log('unmount');;//어마운트 마다 실행
},[])

  return (
    <div className='counter'>
      <h1>Counter</h1>

      <div>
        <span>{count1}</span>
        {/* 버튼클릭시 카운터1함수 호출 후 1을 더함 */}
        <button onClick={e => setCount1(count1+1)}>++</button>
      </div>

      <div>
        <span>{count2}</span>
        <button onClick={e => setCount2(count2+1)}>++</button>
      </div>
    </div>
  )
}

export default Counter