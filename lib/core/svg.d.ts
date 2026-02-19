/** @import { type SVGElementData } from "../types/svg.dom.d.ts"; */
/**
 * @template {keyof SVGElementTagNameMap} T
 * @param {T} tag
 * @param {SVGElementData<T>} [data]
 * @return {SVGElementTagNameMap[T]}
 */
export function svgElement<T extends keyof SVGElementTagNameMap>(tag: T, data?: SVGElementData<T>): SVGElementTagNameMap[T];
import type { SVGElementData } from "../types/svg.dom.d.ts";
