// * ===========================================================================
// * Tokens Namespace
// * ===========================================================================

/**
 * A namespace for defining tokens related types and interfaces.
 * @readonly
 * @yawp 0.1.0
 */
export namespace Tokens {

    // * ========================================================================
    // * Tokens Variables
    // * ========================================================================

    /**
     * An array that contains all 10 digits from 0 to 9.
     * @yawp 0.1.0
     */
    export const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

    /**
     * An array that contains all 26 lowercase letters of the English alphabet.
     * @yawp 0.1.0
     */
    export const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] as const;

    /**
     * An Array that contains all 32 standard keyboard symbols.
     * @yawp 0.1.0
     */
    export const symbols = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "{", ",", "}", "~"] as const;

    // * ========================================================================
    // * Tokens Types
    // * ========================================================================

    /**
     * A type that represents a single digit from the digits array.
     * This is useful for defining types that can only be one of the digits in the array.
     * @yawp 0.1.0
     */
    export type Digit = typeof digits[number];

    /**
     *     A type that represents a single letter from the letters array.
     * This is useful for defining types that can only be one of the letters in the array.
     * @yawp 0.1.0
     */
    export type Letter = typeof letters[number];

    /**
     * A type that represents a single symbol from the symbols array.
     * This is useful for defining types that can only be one of the symbols in the array.
     * @yawp 0.1.0
     */
    export type Symbol = typeof symbols[number];

    /**
     * A type that represents a single uppercase letter from the letters array.
     * This is useful for defining types that can only be one of the letters in the array.
     * @yawp 0.1.0
     */
    export type UppercaseLetter = Uppercase<Letter>;

}