/** @import { type BaseElement, type ElementProps, type Children } from '../types/base.dom.d.ts' */
/** @import { type ElementEventData, } from '../types/html.dom.d.ts' */
/** @import { type SVGElementEventData } from '../types/svg.dom.d.ts' */
/** @import { type HTMLElementsAttributesMap } from '../types/attributes.d.ts' */

/**
 * @template {BaseElement} T
 * @param {T} element
 * @param {ElementProps<T> | null | undefined} props
 */
export function assignProperties(element, props) {
  if (!props) {
    return;
  }

  /** @type {Array<[typeof element, typeof props]>} */
  const propAssignments = [[element, props]];

  while (propAssignments.length > 0) {
    const propAssignment = propAssignments.shift();
    if (!propAssignment) {
      continue;
    }

    const [element, props] = propAssignment;
    for (const key in props) {
      // @ts-expect-error dynamic key access
      if (typeof props[key] === 'object') {
        // @ts-expect-error dynamic key access
        propAssignments.push([element[key], props[key]]);
      }
    }

    Object.assign(element, props);
  }
}

/**
 * @template {BaseElement} T
 * @template {keyof HTMLElementTagNameMap|keyof SVGElementTagNameMap} A
 * @param {T} element
 * @param {HTMLElementsAttributesMap[A] | null | undefined} attributes
 */
export function setAttributes(element, attributes) {
  if (!attributes) {
    return;
  }

  for (const key in attributes) {
    // @ts-expect-error type is tye same
    if (attributes[key]) {
      // @ts-expect-error type is tye same
      element.setAttribute(key, attributes[key]);
    }
  }
}

/**
 * @param {BaseElement} element
 * @param {Children|undefined|null} children
 */
export function replaceChildren(element, children) {
  if (!children) {
    element.replaceChildren();
    return;
  }

  if (Array.isArray(children)) {
    element.replaceChildren(...children);
  } else {
    element.replaceChildren(children);
  }
}

/**
 * @template {HTMLElement|SVGElement} T
 * @template {T extends HTMLElement ? HTMLElementEventMap
 * : T extends SVGElement ? SVGElementEventMap : never} E
 * @typedef {T extends HTMLElement ?
 * ElementEventData<T, E> | undefined | null
 * : T extends SVGElement ?
 *  SVGElementEventData<T, E> | undefined | null
 * : never} GenericEventData
 */

/**
 * @template {SVGElement} T
 * @template {SVGElementEventMap} E
 * @param {T} element
 * @param {SVGElementEventData<T, E> | undefined | null} eventData
 * @returns {void}
 */
export function attachEventListenerSvg(element, eventData) {
  // @ts-expect-error attach event to svg element
  return attachEventListener(element, eventData);
}

/**
 * @template {HTMLElement} T
 * @template {HTMLElementEventMap} E
 * @param {T} element
 * @param {ElementEventData<T, E> | undefined | null} eventData
 * @returns {void}
 */
export function attachEventListener(element, eventData) {
  if (eventData == undefined || eventData == null) {
    return;
  }

  /**
   * @type {(keyof typeof eventData)[]}
   @ts-expect-error assert type */
  const keys = Object.keys(eventData);

  for (const key of keys) {
    /** @type {typeof eventData[key]} */
    const event = eventData[key];
    if (typeof event === 'function') {
      // @ts-expect-error correctly passed handler
      element.addEventListener(key, event);
    } else if (event && typeof event === 'object' && 'handler' in event) {
      if (!event.handler) {
        continue;
      }
      // @ts-expect-error correctly passed handler
      element.addEventListener(key, event.handler, event.options);
    }
  }
}
