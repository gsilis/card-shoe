import { Deck } from "./deck";

describe('Deck', () => {
  describe('generateCards()', () => {
    it('gives you 52 cards', () => {
      expect(Deck.generateCards().length).toBe(52);
    });
  });
});