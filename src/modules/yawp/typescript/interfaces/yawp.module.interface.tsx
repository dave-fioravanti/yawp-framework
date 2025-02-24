// * ===========================================================================
// * Module Namespace
// * ===========================================================================

export namespace Module {

    // * ========================================================================
    // * Module Version Type
    // * ========================================================================

    /**
     * A type representing the version of a module.
     * @yawp 0.1.0
     */
    export type Version = {
        /**
         * The major version number.
         * @readonly
         * @yawp 0.1.0
         */
        major: Readonly<number>,
        /**
         * The minor version number.
         * @readonly
         * @yawp 0.1.0
         */
        minor: Readonly<number>,
        /**
         * The patch version number.
         * @readonly
         * @yawp 0.1.0
         */
        patch: Readonly<number>,
        /**
         * The pre-release version string.
         * @readonly
         * @example
         * - "alpha"
         * - "beta.1"
         * - "rc.2"
         * @yawp 0.1.0
         */
        pre_release?: Readonly<string>,
    }

    // * ========================================================================
    // * Module Settings Type
    // * ========================================================================

    /**
     * A type representing the settings of a module.
     * @yawp 0.1.0
     */
    export type Settings = {
        /**
         * A boolean value indicating whether debugging is enabled.
         * @readonly
         * @yawp 0.1.0
         */
        debugging_enabled: Readonly<boolean>,
        /**
         * The version of the module.
         * @readonly
         * @yawp 0.1.0
         * @example
         * { major: 0, minor: 1, patch: 0, pre_release: "pre-alpha" }
         */
        version: Readonly<Version>,
    }

    // * ========================================================================
    // * Module Configuration Type
    // * ========================================================================

    /**
     * A type representing the configuration of a module.
     * @yawp 0.1.0
     */
    export type Configuration = {
        /**
         * An object containing the settings for the module.
         * @readonly
         * @yawp 0.1.0
         */
        settings: Readonly<Settings>,
    }

}