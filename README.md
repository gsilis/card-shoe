# Playing Card Shoe Library

A typescript library that can keep a shoe of shuffled cards. For use in any playing card games I'd want to write.

## Basics

The `Shoe` class contains an array of `Card` objects. The `Shoe` uses a `Deck` utility to generate an array of 52 `Card` objects.
THe `Shoe.shuffle` method will randomize the array.
Deal a card via `Shoe.deal`.
The `Shoe.total` / `Shoe.remaining` / `Shoe.percentage` properties tell you how many cards are left.

## What's not included

Any value comparisons between cards. That would be up the the individual game.

# About shuffling

Shuffling uses `Math.random` along with cutting the deck.

```
copyDeck = copy sourceDeck
newDeck = []

while newDeck.length less than deck length
  randomIndex = copyDeck random index
  newDeck.push copyDeck.slice randomIndex

arr1 = first half of newDeck
arr2 = latter half of newDeck
newDeck = []
nextStack = arr1

while newDeck.length less than deck length
  newDeck.push nextStack.shift
  if nextStack === arr1
    nextStack = arr2
  else
    nextStack = arr1
```

# TODO
- [ ] Create `index.js` or `main.js` so this can be imported as a package.
- [ ] Automatic build step.