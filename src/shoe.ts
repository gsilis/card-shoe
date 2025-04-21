import { Card } from "./cards/card";
import { Deck } from "./cards/deck";
import { randomize, range } from "./utils/array";

export class Shoe {
  cards: Card[] = [];

  constructor(
    private _decks: number = 3
  ) {}

  set decks(value: number) {
    this._decks = value;
    this.fill();
  }

  get decks(): number {
    return this._decks;
  }

  get remaining(): number {
    return this.cards.length / (Deck.length * this.decks);
  }

  fill() {
    this.cards = range(0, this.decks).reduce((cards: Card[]) => {
      return [
        ...cards,
        ...Deck.generateCards(),
      ];
    }, []);
  }

  shuffle() {
    this.cards = randomize(this.cards);
  }

  deal(): Card | void {
    return this.cards.pop();
  }
}