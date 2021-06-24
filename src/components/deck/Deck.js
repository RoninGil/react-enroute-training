import React, { useEffect, useState } from 'react';
import Card from '../card/Card.js'

const Deck = ({title, path, flipped}) =>{
    let [cards, setCards] = useState([]);
  
    useEffect(() => {
      (async () =>{
            let resp = await fetch(`http://localhost:4000/${path}`);
            let data = await resp.json();
            setCards(cards = data);
          })();
    }, [path]);
    return <div>
    <h3 className = {title}>{title}</h3>
    <div className="deck">{cards.map((card, index) =>{
      const number = card.slice(0, -1);
      const symbol = card.slice(-1);
      if(index<parseInt(flipped)){
        return <Card cardClass="card flipped" number={number} symbol={symbol} key={index}></Card>
      }
      return <Card
      cardClass= "card" 
      number={number} 
      symbol={symbol} 
      key={index}></Card>
    })}</div>
    </div >
  
  }
  export default Deck;
