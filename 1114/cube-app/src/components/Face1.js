import React from 'react'
import {FaAndroid, FaApple, FaTwitterSquare, FaFacebookSquare, FaYoutube, FaGooglePlay} from 'react-icons/fa';

const Face1 = () => {
  return (
    <article className="face1">
          <h1>Co Company</h1>
          <div className="inner">
            <div>
              <p><FaAndroid/></p>
              <h2>Android</h2>
            </div>
            <div>
              <p><FaApple /></p>
              <h2>Apple</h2>
            </div>
            <div>
              <p><FaTwitterSquare /></p>
              <h2>Twitter</h2>
            </div>
            <div>
              <p><FaFacebookSquare /></p>
              <h2>Facebook</h2>
            </div>
            <div>
              <p><FaYoutube /></p>
              <h2>Youtube</h2>
            </div>
            <div>
              <p><FaGooglePlay /></p>
              <h2>Google</h2>
            </div>
          </div>
        </article>
  )
}

export default Face1