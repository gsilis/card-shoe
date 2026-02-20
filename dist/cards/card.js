"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.values = exports.ACE = exports.KING = exports.QUEEN = exports.JACK = exports.TEN = exports.NINE = exports.EIGHT = exports.SEVEN = exports.SIX = exports.FIVE = exports.FOUR = exports.THREE = exports.TWO = exports.suits = exports.SPADE = exports.HEART = exports.DIAMOND = exports.CLUB = void 0;
exports.CLUB = 'club';
exports.DIAMOND = 'diamond';
exports.HEART = 'heart';
exports.SPADE = 'spade';
exports.suits = [
    exports.CLUB,
    exports.DIAMOND,
    exports.HEART,
    exports.SPADE,
];
exports.TWO = '2';
exports.THREE = '3';
exports.FOUR = '4';
exports.FIVE = '5';
exports.SIX = '6';
exports.SEVEN = '7';
exports.EIGHT = '8';
exports.NINE = '9';
exports.TEN = '10';
exports.JACK = 'JACK';
exports.QUEEN = 'QUEEN';
exports.KING = 'KING';
exports.ACE = 'ACE';
exports.values = [
    exports.TWO,
    exports.THREE,
    exports.FOUR,
    exports.FIVE,
    exports.SIX,
    exports.SEVEN,
    exports.EIGHT,
    exports.NINE,
    exports.TEN,
    exports.JACK,
    exports.QUEEN,
    exports.KING,
    exports.ACE,
];
const SuitSymols = {
    [exports.CLUB]: '♣️',
    [exports.DIAMOND]: '♦️',
    [exports.HEART]: '♥️',
    [exports.SPADE]: '♠️',
};
const ValueSumbols = {
    [exports.TWO]: '2',
    [exports.THREE]: '3',
    [exports.FOUR]: '4',
    [exports.FIVE]: '5',
    [exports.SIX]: '6',
    [exports.SEVEN]: '7',
    [exports.EIGHT]: '8',
    [exports.NINE]: '9',
    [exports.TEN]: '10',
    [exports.JACK]: 'J',
    [exports.QUEEN]: 'Q',
    [exports.KING]: 'K',
    [exports.ACE]: 'A',
};
class Card {
    constructor(_suit, _value) {
        this._suit = _suit;
        this._value = _value;
        // Record face/red/black here since it can't change
        this._isFace = [exports.JACK, exports.QUEEN, exports.KING].includes(this._value);
        this._isRed = [exports.DIAMOND, exports.HEART].includes(this._suit);
        this._isBlack = [exports.CLUB, exports.SPADE].includes(this._suit);
    }
    clone() {
        return new Card(this._suit, this._value);
    }
    get value() { return this._value; }
    get suit() { return this._suit; }
    get isFace() {
        return this._isFace;
    }
    get isRed() {
        return this._isRed;
    }
    get isBlack() {
        return this._isBlack;
    }
    toString() {
        return `${ValueSumbols[this._value]} ${SuitSymols[this._suit]}`;
    }
}
exports.Card = Card;
