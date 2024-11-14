import React,{useState,useEffect} from 'react'

const Clock = () => {
  const [time,setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return()=> clearInterval(id);
  },[])

  return (
    <div className='clock'>
      <h1>Clock</h1>
      {/* Date.toLocaleDateString = 날짜정보 
      Date.toLocaleTimeString = 시간정보*/}
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock