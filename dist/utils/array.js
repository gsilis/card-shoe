"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill = fill;
exports.randomize = randomize;
exports.sample = sample;
exports.pickANumber = pickANumber;
exports.shuffle = shuffle;
// Want a default `value` here without messing up the compiler
// There might be a better way to do this.
function fill(size, value = void 0) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(value);
    }
    return arr;
}
function randomize(arr) {
    const copy = [...arr];
    const result = [];
    while (copy.length > 0) {
        let index = pickANumber(0, copy.length - 1);
        result.push(...copy.splice(index, 1));
    }
    return result;
}
function sample(arr) {
    const rando = Math.random();
    const index = Math.floor(arr.length * rando);
    return arr[index];
}
/**
 * Pick a number between the arguments. Inclusive.
 * @param from
 * @param to
 * @returns
 */
function pickANumber(from, to) {
    if (to <= from) {
        return from;
    }
    const range = to - from;
    const rando = Math.random();
    return Math.round(from + (range * rando));
}
function shuffle(arr) {
    const size = arr.length;
    const halfpoint = Math.round(size / 2);
    const arr1 = arr.slice(0, halfpoint);
    const arr2 = arr.slice(halfpoint);
    let next = arr1;
    const result = [];
    while (result.length < size) {
        // Zero chance that the array here would have an undefined value
        // unless it is from the passed source array.
        result.push(next.shift());
        next = next === arr1 ? arr2 : arr1;
    }
    return result;
}
exports.default = {
    fill,
    randomize,
    sample,
    pickANumber,
    shuffle,
};
