"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shoe = void 0;
const deck_1 = require("./cards/deck");
const array_1 = require("./utils/array");
class Shoe {
    constructor(_decks = 3) {
        this._decks = _decks;
        this._cards = [];
        this._shuffled = false;
        this.fill();
    }
    set decks(value) {
        this._decks = value;
        this.fill();
    }
    get decks() {
        return this._decks;
    }
    get shuffled() {
        return this._shuffled;
    }
    get remaining() {
        return this._cards.length;
    }
    get total() {
        return this._decks * deck_1.Deck.size;
    }
    get percentage() {
        return this.remaining / this.total;
    }
    shuffle(repeat = 3) {
        (0, array_1.fill)(repeat).forEach(() => {
            this._cards = (0, array_1.shuffle)((0, array_1.randomize)(this._cards));
        });
        this._shuffled = true;
    }
    deal() {
        if (!this._shuffled) {
            console.warn('Dealing from an unshuffled shoe!');
        }
        return this._cards.pop();
    }
    fill() {
        this._shuffled = false;
        this._cards = (0, array_1.fill)(this.decks).reduce((cards) => {
            return [
                ...cards,
                ...deck_1.Deck.generateCards(),
            ];
        }, []);
    }
}
exports.Shoe = Shoe;
