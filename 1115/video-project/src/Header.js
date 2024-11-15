import React from 'react'
import {FaFirstdraft} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <h1>
        <FaFirstdraft size="5vw"/>
        <br/>
        <span>DCODELAB</span>
      </h1>
      <address>
        2024 DCODELAB <br/>
        ALL RGIHTS RESERVED.
      </address>
    </header>
  )
}

export default Header