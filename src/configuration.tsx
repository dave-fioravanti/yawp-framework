// * ===========================================================================
// * Module Imports
// * ===========================================================================

import * as Theme from "./modules/theme/ts/theme.reducer";
import * as Yawp from "./modules/yawp/ts/yawp.reducer";

// * ===========================================================================
// * Configuration Exports
// * ===========================================================================

/**
 * A type representing the modules used in the application.
 * @yawp 0.1.0
 */
export type Modules = {
    /**
     * Configuration for the Yawp module.
     * @yawp 0.1.0
     */
    yawp: Yawp.Module.Configuration,
}

/**
 * A namespace for defining the configuration of the application.
 * @yawp 0.1.0
 */
export namespace Configuration {
    
    export const modules : Modules = {
        yawp: {
            settings: {
                debugging_enabled: false,
                version: {
                    major: 0,
                    minor: 1,
                    patch: 0,
                },
            }
        }
    };

    /**
     * An array of routes for the application to use.
     * @yawp 0.1.0
     */
    export const routing : Yawp.Routing.RouteArray = [
        {
            name: "Home",
            path: "/",
            element: <Theme.KitchenSink.Page />,
        },
    ];

}