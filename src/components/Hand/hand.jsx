import React from 'react'
import Card from '../Card/card.jsx';
import './hand.css';

const Hand = () => {
    let cards = [];
    for (let i = 0; i < 5; i++) {
        // Random number between 1 and 2
        // let cardBack = Math.floor(Math.random() * 5) + 1;
        // let cardBack = 3;
        // If the cardBack is in single digits, append a 0 to the start
        let cardBack = i + 1;
        if (cardBack < 10) {
            cardBack = `0${cardBack}`;
        }
        cards.push(<Card cardBack={cardBack} key={i} />);
    }

    console.log(`There are ${cards.length} cards in the hand.`);

    return (
        <div className="hand-content">
            <h1>Choose a starter deck</h1>
            <div className="hand">
                {cards}
            </div>
        </div>
    )
}

export default Hand