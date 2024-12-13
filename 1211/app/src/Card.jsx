import React from 'react'

const Card = (props) => {
  return (
    <div className="row">
    <div className="img"></div>
    <p className="mt20 price">{props.shopping.price}</p>
    <h4 className="s-title">{props.shopping.title}</h4>
    <p className="category">{props.shopping.category}</p>
  </div>
  )
}

export default Card