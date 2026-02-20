"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./cards/card");
const deck_1 = require("./cards/deck");
exports.default = {
    Deck: deck_1.Deck,
    Card: card_1.Card,
    Values: {
        TWO: card_1.TWO,
        THREE: card_1.THREE,
        FOUR: card_1.FOUR,
        FIVE: card_1.FIVE,
        SIX: card_1.SIX,
        SEVEN: card_1.SEVEN,
        EIGHT: card_1.EIGHT,
        NINE: card_1.NINE,
        TEN: card_1.TEN,
        JACK: card_1.JACK,
        QUEEN: card_1.QUEEN,
        KING: card_1.KING,
        ACE: card_1.ACE,
    },
    Suits: {
        CLUB: card_1.CLUB,
        DIAMOND: card_1.DIAMOND,
        HEART: card_1.HEART,
        SPADE: card_1.SPADE,
    }
};
