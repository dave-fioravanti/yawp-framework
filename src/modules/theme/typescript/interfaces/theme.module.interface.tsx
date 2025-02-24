// * ===========================================================================
// * Component Imports
// * ===========================================================================

// * ===========================================================================
// * Module Namespace
// * ===========================================================================

/**
 * A namespace representing the theme module.
 * @theme 0.1.0
 * @yawp 0.1.0
 */
export namespace Module {

    // * ========================================================================
    // * Configuration Type
    // * ========================================================================

    /**
     * A type representing the configuration of the theme module.
     * @theme 0.1.0
     * @yawp 0.1.0
     */
    export type Configuration = {
        /**
         * An object containing the settings for theme components.
         * @theme 0.1.0
         * @yawp 0.1.0
         */
        components?: {
            /**
             * An object containing the settings for theme atoms.
             * @theme 0.1.0
             * @yawp 0.1.0
             */
            atoms?: {}
            /**
             * An object containing the settings for theme molecules.
             * @theme 0.1.0
             * @yawp 0.1.0
             */
            molecules?: {}
            /**
             * An object containing the settings for theme organisms.
             * @theme 0.1.0
             * @yawp 0.1.0
             */
            organisms?: {}
        }
    }
    
}