import React from 'react'
import Card from '../Card/card.jsx';
import './deck.css';

const Deck = () => {
    let cards = [];
    for (let i = 8; i < 43; i++) {
        // Random number between 1 and 2
        // let cardBack = Math.floor(Math.random() * 11) + 1;
        // Random number between 9 and 11
        // let cardBack = Math.floor(Math.random() * 7) + 9;
        // let cardBack = 3;
        // If the cardBack is in single digits, append a 0 to the start
        let cardBack = i + 1;
        if (cardBack < 10) {
            cardBack = `0${cardBack}`;
        } else {
            cardBack = `${cardBack}`;
        }
        cards.push(<Card cardBack={cardBack} key={i} />);
    }

    console.log(`There are ${cards.length} cards in the hand.`);

    return (
        <div className="hand-content">
            <div className="dark-overlay"></div>
            <h2>Your deck</h2>
            <div className="hand">
                {cards}
            </div>
        </div>
    )
}

export default Deck