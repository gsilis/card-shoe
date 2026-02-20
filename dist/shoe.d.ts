import { Card } from "./cards/card";
export declare class Shoe {
    private _decks;
    private _cards;
    private _shuffled;
    constructor(_decks?: number);
    set decks(value: number);
    get decks(): number;
    get shuffled(): boolean;
    get remaining(): number;
    get total(): number;
    get percentage(): number;
    shuffle(repeat?: number): void;
    deal(): Card | void;
    private fill;
}
