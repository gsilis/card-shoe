import { Card } from "./cards/card";
import { Shoe } from "./shoe";

describe('Shoe', () => {
  describe('.decks', () => {
    it('returns number of decks in the shoe', () => {
      const shoe = new Shoe(2);

      expect(shoe.decks).toEqual(2);
    });

    it('can update the deck count in the shoe', () => {
      const shoe = new Shoe(1);

      expect(shoe.decks).toEqual(1);
      shoe.decks = 4;
      expect(shoe.decks).toEqual(4);
    });
  });

  describe('.shuffled', () => {
    it('changes when shuffled', () => {
      const shoe = new Shoe(2);

      expect(shoe.shuffled).toEqual(false);
      shoe.shuffle();
      expect(shoe.shuffled).toEqual(true);
    });
  });

  describe('.remaining', () => {
    it('represents how many cards are left', () => {
      const shoe = new Shoe(2);

      expect(shoe.remaining).toEqual(104);
      shoe['_shuffled'] = true;
      shoe.deal();
      shoe.deal();
      shoe.deal();
      shoe.deal();
      expect(shoe.remaining).toEqual(100);
    });
  });

  describe('.total', () => {
    it('gives you the total cards that the shoe started with', () => {
      const shoe = new Shoe(1);

      expect(shoe.total).toEqual(52);
      shoe.decks = 3;
      expect(shoe.total).toEqual(156);
    });
  });

  describe('.percentage', () => {
    it('gives the percentage', () => {
      const shoe = new Shoe(4);

      expect(shoe.percentage).toEqual(1);
      shoe['_shuffled'] = true;
      shoe.deal();
      shoe.deal();
      shoe.deal();
      shoe.deal();
      expect(shoe.percentage).toBeLessThan(1);
    });
  });

  describe('.shuffle()', () => {
    it('shuffles the cards', () => {
      const shoe = new Shoe(2);
      const preShuffle = shoe['_cards'];

      shoe.shuffle(4);
      expect(shoe['_cards']).not.toEqual(preShuffle);
    });
  });

  describe('.deal()', () => {
    it('deals some cards', () => {
      const shoe = new Shoe(2);
      shoe.shuffle();

      expect(shoe.deal()).toBeInstanceOf(Card);
    });
  });
});