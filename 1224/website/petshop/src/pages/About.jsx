import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../App';



const About = () => {
  const { id } = useParams()
  const { petData } = useContext()
  // console.log(id)
  // console.log(petData)

  useEffect(() => {

  })
  return (
    <div className='about'>
      <div className='aboutWrap'>
        <div className="imgWrap">
          <img src={process.env.PUBLIC_URL + petData[id].img} alt="" />
        </div>
        <div className="cntWrap">
          <div className="title">{petData[id].title}</div>
          <div className="desc">{petData[id].desc}</div>
          <div className="price">{petData[id].price}</div>
        </div>
      </div>
    </div>
  );
};

export default About;