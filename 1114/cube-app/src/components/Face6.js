import {FaRss, FaCode, FaEnvelope, FaList} from 'react-icons/fa'
import React from 'react'

const Face6 = () => {
  return (
    <article className="face6">
          <h1>Services</h1>
          <div className="inner">
            <div>
              <div className="icon">
                <FaRss />
              </div>
              <div className="con">
                <h2>Network Services</h2>
                <p>Here comes the contents for Network<br />Show this in Detail</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <FaCode />
              </div>
              <div className="con">
                <h2>Technical Support</h2>
                <p>Here comes the contents for Network<br />Show this in Detail</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="con">
                <h2>Customer Servieces</h2>
                <p>Here comes the contents for Network<br />Show this in Detail</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <FaList />
              </div>
              <div className="con">
                <h2>Contact Lists</h2>
                <p>Here comes the contents for Network<br />Show this in Detail</p>
              </div>
            </div>
          </div>
        </article>
  )
}

export default Face6