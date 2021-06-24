import React from 'react';

const CardSymbols = ({number, symbol}) =>{
    const isNumber = !isNaN(number);
    if(number === "A"){
      return <div>
        {symbol}
      </div>
    }
    if(isNumber){
        return new Array(parseInt(number))
        .fill(symbol)
        .map((cardSymbol, index) =>{
          return <div key={index}>
          {cardSymbol}
          </div>
        })
      
    }
    return <div className="image"></div>
  }
  export default CardSymbols;
