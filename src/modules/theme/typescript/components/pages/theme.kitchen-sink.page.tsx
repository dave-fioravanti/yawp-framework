// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

import { Formatting } from "../../../../yawp/typescript/interfaces/yawp.formatting.interface";

// * ===========================================================================
// * TypeScript Aliases
// * ===========================================================================

import ANSI = Formatting.ANSI;

// * ===========================================================================
// * Kitchen Sink Namespace
// * ===========================================================================

export namespace KitchenSink {

    const prefix = [
        `${ANSI.FG.MagentaBright}`,
        `theme.kitchen-sink.page.tsx`,
        `${ANSI.Style.Reset}:`,
    ].join(" ");

    export type Properties = JSX.IntrinsicElements["article"] & {
        properties?: {

        }
    }

    export const Page : FunctionComponent<Properties> = ({ properties, ...rest } : Properties) : JSX.Element => {
        const generateClassNames = () : string => {
            let classesArray : Array<string> = [
                "page",
                "page--kitchen-sink",
            ];
            return [... new Set(classesArray)].join(" ");
        }
        console.log(`${prefix} Rendering Kitchen Sink page...`);
        return (
            <article 
                className={ generateClassNames() } 
                { ...rest }
            >
                <h1>YAWP - Kitchen Sink</h1>
                <p>
                    This is the Kitchen Sink page. It is a placeholder for the YAWP
                    module. It will be replaced with the actual Kitchen Sink page in
                    the future.
                </p>
            </article>
        );
    }

    Page.displayName = "KitchenSink";

}