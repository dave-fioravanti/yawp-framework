// * ===========================================================================
// * Utilities Namespace
// * ===========================================================================

/**
 * A namespace for defining utility related types and interfaces.
 * @yawp 0.1.0
 */
export namespace Utilities {

	// * ===========================================================================
	// * Require All Type
	// * ===========================================================================

	/**
	 * A utility type that dynamically makes all properties of a given type required.
	 * @param T - The given type whose properties will be required.
	 * @yawp 0.1.0
	 */
	export type RequireAll<T> = {
		[P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : (T[P] | undefined);
	}

	// * ===========================================================================
	// * Keyboard Focus Namespace
	// * ===========================================================================

	/**
	 * A namespace containing utility functions for building keyboard focus traps.
	 * @yawp 0.1.0
	 */
	export namespace KeyboardFocus {

        // * ===========================================================================
        // * Keyboard Focus Variables
        // * ===========================================================================
		
		/**
		 * An array of query strings that will match focusable elements.
		 * @yawp 0.1.0
		 */
		export const selectors = [
			`a[href]`,
			`button`,
			`input`,
			`textarea`,
			`select`,
			`details`,
			`[tabindex]:not([tabindex="-1"]`,
		];

        // * ===========================================================================
        // * Keyboard Focus Functions
        // * ===========================================================================

		/**
		 *     A utility function that returns true or false depending on whether or not
		 * the currently "active" element is the first focusable item within the given parent
		 * element.
		 * @param parentElement - The parent HTML element whose "active" child-item will be evaluated.
		 * @returns A boolean
		 * @see https://zellwk.com/blog/keyboard-focusable-elements/
		 * @astra 0.1.0
		 */
		export const isActiveElementFirstFocusableInParent = (parentElement: HTMLElement) : boolean => {
			const { activeElement } = document;
			const focusableElements = [...parentElement.querySelectorAll(
				selectors.map((selector) => `:scope ${selector}`).join(", ")
			)].filter(element => (
				!element.hasAttribute("disabled")
				&& !element.getAttribute("aria-hidden")
			));
			if (
				focusableElements.length 
				&& activeElement !== null
				&& parentElement.contains(activeElement)
			){
				if (activeElement.isSameNode(focusableElements[0])) {
					return true;
				} else {
					return false;
				}
			}
			return false;
		};

		/**
		 *     A utility function that returns true or false depending on whether or not
		 * the currently "active" element is the first focusable item within a particular scope.
		 * @param scope - The query string for the container used to limit the 
		 * search to focusable elements that are children of it. The `<body>` tag will 
		 * be used as the container scope if no argument is passed.
		 * @returns A boolean 
		 * @see https://zellwk.com/blog/keyboard-focusable-elements/
		 * @astra 0.1.0
		 */
		export const isActiveElementFirstFocusableInScope = (scope: string = "body") : boolean => {
			const { activeElement } = document;
			const focusableElements = [...document.querySelectorAll(
				selectors.map((selector) => `${scope} ${selector}`).join(", ")
			)].filter(element => (
				!element.hasAttribute("disabled") 
				&& !element.getAttribute("aria-hidden")
			));
			if (focusableElements.length && activeElement !== null) {
				if (activeElement.isSameNode(focusableElements[0])) {
					return true;
				} else {
					return false;
				}
			}
			return true;
		};

		/**
		 *     A utility function that returns true or false depending on whether or not
		 * the currently "active" element is the last focusable item within the given parent
		 * element.
		 * @param parentElement - The parent HTML element whose "active" child-item will be evaluated.
		 * @returns A boolean
		 * @see https://zellwk.com/blog/keyboard-focusable-elements/
		 * @astra 0.1.0
		 */
		export const isActiveElementLastFocusableInParent = (parentElement: HTMLElement) : boolean => {
			const { activeElement } = document;
			const focusableElements = [...parentElement.querySelectorAll(
				selectors.map((selector) => `:scope ${selector}`).join(", ")
			)].filter(element => (
				!element.hasAttribute("disabled")
				&& !element.getAttribute("aria-hidden")
			));
			if (
				focusableElements.length
				&& activeElement !== null
				&& parentElement.contains(activeElement)
			){
				const focusableElement = focusableElements.length > 1 ? focusableElements.length - 1 : 0;
				if (activeElement.isSameNode(focusableElements[focusableElement])) {
					return true;
				} else {
					return false;
				}
			}
			return false;
		};

		/**
		 *     A utility function that returns true or false depending on whether or not
		 * the currently "active" element is the last focusable item within a particular scope.
		 * @param scope - The query string for the container used to limit the 
		 * search to focusable elements that are children of it. The `<body>` tag will 
		 * be used as the container scope if no argument is passed.
		 * @returns A boolean 
		 * @see https://zellwk.com/blog/keyboard-focusable-elements/
		 * @astra 0.1.0
		 */
		export const isActiveElementLastFocusableInScope = (scope: string = "body") : boolean => {
			const { activeElement } = document;
			const focusableElements = [...document.querySelectorAll(
				selectors.map((selector) => `${scope} ${selector}`).join(", ")
			)].filter(element => (
				!element.hasAttribute("disabled") 
				&& !element.getAttribute("aria-hidden")
			));
			if (focusableElements.length && activeElement !== null) {
				const focusableElement = focusableElements.length > 1 ? focusableElements.length - 1 : 0;
				if (activeElement.isSameNode(focusableElements[focusableElement])) {
					return true;
				} else {
					return false;
				}
			}
			return true;
		};

	}

}