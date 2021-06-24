import React from 'react'

const CardCorner = ({number, symbol}) =>{
    return <div className="card-corner">
      <div>{number}</div>
      <div>{symbol}</div>
    </div>
  }
export default CardCorner;