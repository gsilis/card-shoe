"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const card_1 = require("./card");
class Deck {
    static generateCards() {
        return this.deck.map(d => d.clone());
    }
}
exports.Deck = Deck;
Deck.deck = card_1.suits.reduce((deck, suit) => {
    card_1.values.forEach((value) => {
        deck.push(new card_1.Card(suit, value));
    });
    return deck;
}, []);
Deck.size = 52;
