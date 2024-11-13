import React,{useEffect} from 'react'

const LifeCycle = () => {
  useEffect(() => {
    console.log('Component Mounted')
    return () => console.log('Component Unmounted')
  },[])



  return (
    <div>LifeCycle</div>
  )
}

export default LifeCycle