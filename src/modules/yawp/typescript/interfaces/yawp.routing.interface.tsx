// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { NonIndexRouteObject } from "react-router-dom";

// * ===========================================================================
// * Routing Namespace
// * ===========================================================================

/**
 * A namespace for defining routing related types and interfaces.
 * @readonly
 * @yawp 0.1.0
 */
export namespace Routing {

    // * ========================================================================
    // * Routing Interfaces
    // * ========================================================================

    /**
     * An Interface for defining a route in the application.
     * @readonly
     * @yawp 0.1.0
     */
    export interface Route extends NonIndexRouteObject {
        /**
         * The name of the route.
         * @readonly
         * @yawp 0.1.0
         */
        name: Readonly<string>,
        /**
         * The path of the route.
         * @readonly
         * @yawp 0.1.0
         */
        path: string,
        /**
         * The element to render for the route.
         * @readonly
         * @yawp 0.1.0
         */
        element: JSX.Element,
        /**
         *     An optional icon to associate with the route.
         * This can be used for displaying an icon in a navigation menu or sidebar.
         * @readonly
         * @yawp 0.1.0
         */
        icon?: string,
    }

    // * ========================================================================
    // * Routing Types
    // * ========================================================================

    export type RouteArray = Array<Route>;

}