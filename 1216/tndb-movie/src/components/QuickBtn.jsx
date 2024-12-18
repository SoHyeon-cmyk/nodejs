import React, { useEffect, useState } from 'react';
import { IoArrowUpOutline } from "react-icons/io5";

const QuickBtn = () => {
  const [isVisible , setIsVisible] = useState(false)
  useEffect(()=>{
    const handleScroll = () => {
      setIsVisible(window.screenY > 300) //y축이 300px을 넘어가면 false=>true
    }
    window.addEventListener("scroll", handleScroll)
    return()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  const scrollTop = () =>{
    window.scrollTo({top:0,behavior:'smooth'})
  }

  
  return isVisible &&  (
    <div className='quickBtn' onClick={scrollTop}>
      <button className='quick-top'><IoArrowUpOutline className='upArrow' /></button>
    </div>
  );
};

export default QuickBtn;