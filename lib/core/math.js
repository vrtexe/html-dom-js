import {
  assignProperties,
  attachEventListenerSvg,
  replaceChildren,
  setAttributes,
} from './base.js';

/** @import { type MathElementData } from "../types/math.dom.d.ts"; */
/**
 * @template {keyof MathMLElementTagNameMap} T
 * @param {T} tag
 * @param {MathElementData<T>} [data]
 * @return {MathMLElementTagNameMap[T]}
 */
export function mathElement(tag, data) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);

  assignProperties(element, data?.props);
  setAttributes(element, data?.attributes);
  replaceChildren(element, data?.children);
  attachEventListenerSvg(element, data?.event);

  return element;
}
