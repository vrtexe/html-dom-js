/** @import { type BaseElement, type ElementProps, type Children } from '../types/base.dom.d.ts' */
/** @import { type ElementEventData, } from '../types/html.dom.d.ts' */
/** @import { type SVGElementEventData } from '../types/svg.dom.d.ts' */
/** @import { type HTMLElementsAttributesMap } from '../types/attributes.d.ts' */
/**
 * @template {BaseElement} T
 * @param {T} element
 * @param {ElementProps<T> | null | undefined} props
 */
export function assignProperties<T extends BaseElement>(element: T, props: ElementProps<T> | null | undefined): void;
/**
 * @template {BaseElement} T
 * @template {keyof HTMLElementTagNameMap|keyof SVGElementTagNameMap} A
 * @param {T} element
 * @param {HTMLElementsAttributesMap[A] | null | undefined} attributes
 */
export function setAttributes<T extends BaseElement, A extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap>(element: T, attributes: HTMLElementsAttributesMap[A] | null | undefined): void;
/**
 * @param {BaseElement} element
 * @param {Children|undefined|null} children
 */
export function replaceChildren(element: BaseElement, children: Children | undefined | null): void;
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
export function attachEventListenerSvg<T extends SVGElement, E extends SVGElementEventMap>(element: T, eventData: SVGElementEventData<T, E> | undefined | null): void;
/**
 * @template {HTMLElement} T
 * @template {HTMLElementEventMap} E
 * @param {T} element
 * @param {ElementEventData<T, E> | undefined | null} eventData
 * @returns {void}
 */
export function attachEventListener<T extends HTMLElement, E extends HTMLElementEventMap>(element: T, eventData: ElementEventData<T, E> | undefined | null): void;
export type GenericEventData<T extends HTMLElement | SVGElement, E extends T extends HTMLElement ? HTMLElementEventMap : T extends SVGElement ? SVGElementEventMap : never> = T extends HTMLElement ? ElementEventData<T, E> | undefined | null : T extends SVGElement ? SVGElementEventData<T, E> | undefined | null : never;
import type { BaseElement } from '../types/base.dom.d.ts';
import type { ElementProps } from '../types/base.dom.d.ts';
import type { HTMLElementsAttributesMap } from '../types/attributes.d.ts';
import type { Children } from '../types/base.dom.d.ts';
import type { SVGElementEventData } from '../types/svg.dom.d.ts';
import type { ElementEventData } from '../types/html.dom.d.ts';
