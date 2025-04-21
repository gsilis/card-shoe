import { Card, Suit, suits, Value, values } from "./card";

export class Deck {
  static deck: Card[] = suits.reduce((deck: Card[], suit: Suit) => {
    values.forEach((value: Value) => {
      deck.push(new Card(suit, value));
    });

    return deck;
  }, []);

  static length = 52;

  static generateCards(): Card[] {
    return this.deck.map(d => d.clone());
  }
}