/** @import { type MathElementData } from "../types/math.dom.d.ts"; */
/**
 * @template {keyof MathMLElementTagNameMap} T
 * @param {T} tag
 * @param {MathElementData<T>} [data]
 * @return {MathMLElementTagNameMap[T]}
 */
export function mathElement<T extends keyof MathMLElementTagNameMap>(tag: T, data?: MathElementData<T>): MathMLElementTagNameMap[T];
import type { MathElementData } from "../types/math.dom.d.ts";
