export declare function fill<T = void>(size: number, value?: T): T[];
export declare function randomize<T>(arr: T[]): T[];
export declare function sample<T>(arr: T[]): T;
/**
 * Pick a number between the arguments. Inclusive.
 * @param from
 * @param to
 * @returns
 */
export declare function pickANumber(from: number, to: number): number;
export declare function shuffle<T>(arr: T[]): T[];
declare const _default: {
    fill: typeof fill;
    randomize: typeof randomize;
    sample: typeof sample;
    pickANumber: typeof pickANumber;
    shuffle: typeof shuffle;
};
export default _default;
