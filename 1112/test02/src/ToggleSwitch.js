import React, { useState } from 'react'

const ToggleSwitch = () => {

  const [isOn, setIson] = useState(false);

  return (
    <div>
      <button onClick={()=> setIson(!isOn)}>
        {isOn ? 'Turn off' : 'Turn on'}
      </button>
      <p>Switch is {isOn ? "On" : " Off"}</p>
    </div>
  )
}

export default ToggleSwitch