// * ===========================================================================
// * Formatting Namespace
// * ===========================================================================

/**
 * A namespace for defining formatting related types and interfaces.
 * @yawp 0.1.0
 */
export namespace Formatting {

    // * ===========================================================================
    // * ANSI Formatting - Namespace
    // * ===========================================================================

    /**
     *     A namespace for defining ANSI formatting related types and interfaces.
     * Used for working with ANSI escape codes for terminal text formatting.
     * @yawp 0.1.0
     */
    export namespace ANSI {

        // * ========================================================================
        // * ANSI Formatting - Enums
        // * ========================================================================

        /**
         * An enum that defines ANSI escape codes for color formatting of text.
         * @yawp 0.1.0
         */
        export enum FG {
            /**
             * The ANSI escape code for black colored foreground text.
             * @yawp 0.1.0
             */
            Black = "\u001b[30m",
            /**
             * The ANSI escape code for bright black colored foreground text.
             * @yawp 0.1.0
             */
            BlackBright = "\u001b[30m;1",
            /**
             * The ANSI escape code for blue colored foreground text.
             * @yawp 0.1.0
             */
            Blue = "\u001b[34m",
            /**
             * The ANSI escape code for bright blue colored foreground text.
             * @yawp 0.1.0
             */
            BlueBright = "\u001b[34m;1",
            /**
             * The ANSI escape code for cyan colored foreground text.
             * @yawp 0.1.0
             */
            Cyan = "\u001b[36m",
            /**
             * The ANSI escape code for bright cyan colored foreground text.
             * @yawp 0.1.0
             */
            CyanBright = "\u001b[36m;1",
            /**
             * The ANSI escape code for green colored foreground text.
             * @yawp 0.1.0
             */
            Green = "\u001b[32m",
            /**
             * The ANSI escape code for bright green colored foreground text.
             * @yawp 0.1.0
             */
            GreenBright = "\u001b[32m;1",
            /**
             * The ANSI escape code for magenta colored foreground text.
             */
            Magenta = "\u001b[35m",
            /**
             * The ANSI escape code for bright magenta colored foreground text.
             * @yawp 0.1.0
             */
            MagentaBright = "\u001b[35m;1",
            /**
             * The ANSI escape code for red colored foreground text.
             * @yawp 0.1.0
             */
            Red = "\u001b[31m",
            /**
             * The ANSI escape code for bright red colored foreground text.
             * @yawp 0.1.0
             */
            RedBright = "\u001b[31m;1",
            /**
             * The ANSI escape code for white colored foreground text.
             * @yawp 0.1.0
             */
            White = "\u001b[37m",
            /**
             * The ANSI escape code for bright white colored foreground text.
             * @yawp 0.1.0
             */
            WhiteBright = "\u001b[37m;1",
            /**
             * The ANSI escape code for yellow colored foreground text.
             * @yawp 0.1.0
             */
            Yellow = "\u001b[33m",
            /**
             * The ANSI escape code for bright yellow colored foreground text.
             * @yawp 0.1.0
             */
            YellowBright = "\u001b[33m;1",
        }

        /**
         * An enum that defines ANSI escape codes for text formatting styles.
         * @yawp 0.1.0
         */
        export enum Style {
            /**
             * The ANSI escape code for bold text.
             * @yawp 0.1.0
             */
            Bold = "\u001b[1m",
            /**
             * The ANSI escape code for italic text.
             * @yawp 0.1.0
             */
            Italic = "\u001b[3m",
            /**
             * The ANSI escape code for resetting text formatting to default.
             * @yawp 0.1.0
             */
            Reset = "\u001b[0m",
            /**
             * The ANSI escape code for strikethrough text.
             * @yawp 0.1.0
             */
            Strikethrough = "\u001b[9m",
            /**
             * The ANSI escape code for underlined text.
             * @yawp 0.1.0
             */
            Underline = "\u001b[4m",
        }

    }

    // * ===========================================================================
    // * Time Formatting - Namespace
    // * ===========================================================================

    /**
     * A namespace for defining types and interfaces related to time formatting.
     * @yawp 0.1.0
     */
    export namespace Time {

        // * ========================================================================
        // * Time Formatting - Enums
        // * ========================================================================

        /**
         * An enum that defines time units for formatting.
         * @yawp 0.1.0
         */
        export enum Unit {
            /**
             * A unit of time representing milliseconds.
             * @yawp 0.1.0
             */
            Millisecond = "ms",
            /**
             * A unit of time representing seconds.
             * @yawp 0.1.0
             */
            Second = "s",
            /**
             * A unit of time representing minutes.
             * @yawp 0.1.0
             */
            Minute = "m",
            /**
             * A unit of time representing hours.
             * @yawp 0.1.0
             */
            Hour = "h",
            /**
             * A unit of time representing days.
             * @yawp 0.1.0
             */
            Day = "d",
            /**
             * A unit of time representing weeks.
             * @yawp 0.1.0
             */
            Week = "w",
            /**
             * A unit of time representing months.
             * @yawp 0.1.0
             */
            Month = "M",
            /**
             * A unit of time representing years.
             * @yawp 0.1.0
             */
            Year = "y",
        }

        // * ========================================================================
        // * Time Formatting - Interfaces
        // * ========================================================================

        /**
         * An interface that defines a period of time.
         * @yawp 0.1.0
         */
        export interface Duration {
            /**
             * The number of milliseconds in a given duration.
             * @yawp 0.1.0
             */
            milliseconds: number;
            /**
             * The number of seconds in a given duration.
             * @yawp 0.1.0
             */
            seconds: number;
            /**
             * The number of minutes in a given duration.
             * @yawp 0.1.0
             */
            minutes: number;
            /**
             * The number of hours in a given duration.
             * @yawp 0.1.0
             */
            hours: number;
            /**
             * The number of days in a given duration.
             * @yawp 0.1.0
             */
            days: number;
            /**
             * The number of weeks in a given duration.
             * @yawp 0.1.0
             */
            weeks: number;
            /**
             * The number of months in a given duration. 
             * @yawp 0.1.0
             */
            months: number;
            /**
             * The number of years in a given duration.
             * @yawp 0.1.0
             */
            years: number;
        }

    }

    // * ===========================================================================
    // * Case Formatting - Namespace
    // * ===========================================================================

    /**
     * A namespace for defining types and interfaces related to string formatting.
     * @yawp 0.1.0
     */
    export namespace String {

        // * ========================================================================
        // * String Formatting - Enums
        // * ========================================================================

        /**
         * An enum that defines different string case formats.
         * @yawp 0.1.0
         */
        export enum Case {
            /**
             *     A string case format where the first letter is lowercase and the 
             * rest are uppercase.
             * @example "helloWorld"
             * @yawp 0.1.0
             */
            Camel = "camel",
            /**
             * A string case format where words are separated by hyphens.
             * @example "hello-world"
             * @yawp 0.1.0
             */
            Kebab = "kebab",
            /**
             * A string case format where the first letter of each word is uppercase.
             * @example "HelloWorld"
             * @yawp 0.1.0
             */
            Pascal = "pascal",
            /**
             * A string case format where words are separated by underscores.
             * @example "hello_world"
             * @yawp 0.1.0
             */
            Snake = "snake",
        }

        // * ========================================================================
        // * String Formatting - Functions
        // * ========================================================================

        /**
         * A function that formats a given string to camel case.
         * @param str - The input string to format.
         * @returns The formatted string in camel case.
         * @example
         * ```typescript
         * const formattedString = Formatting.String.toCamelCase("hello world");
         * console.log(formattedString); // Output: "helloWorld"
         * ```
         * @yawp 0.1.0
         */
        export const toCamelCase = (str: string): string => {
            return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '');
        }

        /**
         * A function that formats a given string to kebab case.
         * @param str - The input string to format.
         * @returns The formatted string in kebab case.
         * @example
         * ```typescript
         * const formattedString = Formatting.String.toKebabCase("hello world");
         * console.log(formattedString); // Output: "hello-world"
         * ```
         * @yawp 0.1.0
         */
        export const toKebabCase = (str: string): string => {
            return str.replace(/\s+/g, '-').toLowerCase();
        }

        /**
         * A function that formats a given string to pascal case.
         * @param str - The input string to format.
         * @returns The formatted string in pascal case.
         * @example
         * ```typescript
         * const formattedString = Formatting.String.toPascalCase("hello world");
         * console.log(formattedString); // Output: "HelloWorld"
         * ```
         * @yawp 0.1.0
         */
        export const toPascalCase = (str: string): string => {
            return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase()).replace(/\s+/g, '');
        }

        /**
         * A function that formats a given string to snake case.
         * @param str - The input string to format.
         * @returns The formatted string in snake case.
         * @example
         * ```typescript
         * const formattedString = Formatting.String.toSnakeCase("hello world");
         * console.log(formattedString); // Output: "hello_world"
         * ```
         * @yawp 0.1.0
         */
        export const toSnakeCase = (str: string): string => {
            return str.replace(/\s+/g, '_').toLowerCase();
        }

        /**
         * A function that formats a given string to a specified case.
         * @param str - The input string to format.
         * @param str_case - The desired case type to format the string to.
         * @returns The formatted string in the specified case.
         * @yawp 0.1.0
         */
        export const toCase = (str: string, str_case: Case): string => {
            switch (str_case) {
                case Case.Camel:
                    return toCamelCase(str);
                case Case.Kebab:
                    return toKebabCase(str);
                case Case.Pascal:
                    return toPascalCase(str);
                case Case.Snake:
                    return toSnakeCase(str);
                default:
                    return str;
            }
        }

    }

}