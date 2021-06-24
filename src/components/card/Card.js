import React, { useState } from 'react';
import CardCorner from '../card-corner/CardCorner.js';
import CardSymbols from '../card-symbols/CardSymbols';

const Card = ({cardClass, symbol, number}) =>{

    let [card, setCard] = useState(cardClass);
  
    const handleClick = (e) =>{
      e.preventDefault();
      card === "card" ? setCard(card="card flipped") : setCard(card="card");
    }
        return <div onClick={handleClick} className={card} symbol={symbol} number={number}>
        <div className="container">
          <div className="front">
            <CardCorner number = {number} symbol = {symbol}/>
            <div className="symbols">
              <CardSymbols number = {number} symbol = {symbol}/>
            </div>
            <CardCorner number = {number} symbol = {symbol}/>
          </div>
          
          <div className="back">
  
          </div>
        </div>
      </div>
  }
  export default Card;
