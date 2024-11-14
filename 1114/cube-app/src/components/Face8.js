import React from 'react'
import {FaMixcloud, FaSun, FaBolt } from 'react-icons/fa';

const Face8 = () => {
  return (
    <article className="face8">
          <h1>Temperature</h1>
          <div className="inner">
            <div>
              <h2>Weather</h2>
              <FaMixcloud />
              <span>26<em>o</em></span>
            </div>
            <div>
              <FaSun />
              <h3>Sunny</h3>
              <p>Afternoon temperature</p>
              <h4>23<b>o</b></h4>
            </div>
            <div>
              <FaBolt />
              <h3>Lightning</h3>
              <p>Night temperature</p>
              <h4>18<b>o</b></h4>
            </div>
          </div>
        </article>
  )
}

export default Face8
