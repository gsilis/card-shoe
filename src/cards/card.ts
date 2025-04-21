export const CLUB = 'club';
export const DIAMOND = 'diamond';
export const HEART = 'heart';
export const SPADE = 'spade';

export type Suit = (
  typeof CLUB |
  typeof DIAMOND |
  typeof HEART |
  typeof SPADE
);

export const suits: Suit[] = [
  CLUB,
  DIAMOND,
  HEART,
  SPADE,
];

export const ONE = '1';
export const TWO = '2';
export const THREE = '3';
export const FOUR = '4';
export const FIVE = '5';
export const SIX = '6';
export const SEVEN = '7';
export const EIGHT = '8';
export const NINE = '9';
export const TEN = '10';
export const JACK = 'JACK';
export const QUEEN = 'QUEEN';
export const KING = 'KING';
export const ACE = 'ACE';

export type Value = (
  typeof ONE |
  typeof TWO |
  typeof THREE |
  typeof FOUR |
  typeof FIVE |
  typeof SIX |
  typeof SEVEN |
  typeof EIGHT |
  typeof NINE |
  typeof TEN |
  typeof JACK |
  typeof QUEEN |
  typeof KING |
  typeof ACE
);

export const values: Value[] = [
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE,
];

export class Card {
  private _isFace: boolean;
  private _isRed: boolean;
  private _isBlack: boolean;

  constructor(
    private _suit: Suit,
    private _value: Value
  ) {
    // Record face/red/black here since it can't change
    this._isFace = [JACK, QUEEN, KING].includes(this._value);
    this._isRed = [DIAMOND, HEART].includes(this._suit);
    this._isBlack = [CLUB, SPADE].includes(this._suit);
  }

  clone(): Card {
    return new Card(this._suit, this._value);
  }

  get isFace() {
    return this._isFace;
  }

  get isRed() {
    return this._isRed;
  }

  get isBlack() {
    return this._isBlack;
  }
}