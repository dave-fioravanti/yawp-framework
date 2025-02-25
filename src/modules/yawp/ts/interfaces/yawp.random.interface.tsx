// * ===========================================================================
// * Interface Imports
// * ===========================================================================

import { Tokens } from "./yawp.tokens.interface";

// * ===========================================================================
// * Random Namespace
// * ===========================================================================

/**
 * A namespace for defining types and interfaces related to randomization.
 * @yawp 0.1.0
 */
export namespace Random {

    // * ========================================================================
    // * Random Functions
    // * ========================================================================

    /**
     * A function that generates a random RGB color string.
     * @returns A random RGB color string in the format "rgb(r, g, b)".
     * @yawp 0.1.0
     */
    export const colorRGB = () => {
        const r = Random.integer(0, 255);
        const g = Random.integer(0, 255);
        const b = Random.integer(0, 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    /**
     * A function that generates a random RGBA color string with an optional alpha value.
     * @param alpha - The alpha value (0 to 1) for the RGBA color. Default is 1.
     * @returns A random RGBA color string in the format "rgba(r, g, b, a)".
     * @yawp 0.1.0
     */
    export const colorRGBA = (alpha: number = 1) => {
        const r = Random.integer(0, 255);
        const g = Random.integer(0, 255);
        const b = Random.integer(0, 255);
        const a = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    /**
     * A function that generates a random lowercase letter from the English alphabet.
     * @returns A random lowercase letter from the English alphabet.
     * @yawp 0.1.0
     */
    export const letter = () : Tokens.Letter => {
        return Tokens.letters[Math.floor(Math.random() * 25)];
    }

    /** 
     * A function that generates a random integer between a given minimum and maximum value.
     * @param min - The minimum value (inclusive).
     * @param max - The maximum value (exclusive).
     * @returns A random integer between min and max.
     * @yawp 0.1.0
    */
    export const integer = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
