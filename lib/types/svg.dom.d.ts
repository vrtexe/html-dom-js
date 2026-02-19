import type { HTMLElementsAttributesMap } from './attributes';
import type { Children, ElementProps } from './base.dom';

export type SVGDomEventListener<
  T extends SVGElement,
  K extends keyof E,
  E extends SVGElementEventMap = SVGElementEventMap,
> = (this: T, ev: E[K]) => unknown;

export type SVGDomEventListenerOption<
  T extends SVGElement,
  K extends keyof E,
  E extends SVGElementEventMap = SVGElementEventMap,
> = {
  handler?: SVGDomEventListener<T, K, E> | undefined | null;
  options?: boolean | AddEventListenerOptions | undefined | null;
};

export type SVGElementEventData<
  T extends SVGElement,
  E extends SVGElementEventMap = SVGElementEventMap,
> = {
  [K in keyof E]?:
    | SVGDomEventListener<T, K, E>
    | SVGDomEventListenerOption<T, K, E>
    | undefined
    | null;
};

export type SVGElementData<
  T extends keyof SVGElementTagNameMap,
  E extends SVGElementEventMap = SVGElementEventMap,
> = {
  props?: ElementProps<SVGElementTagNameMap[T]> | undefined | null;
  attributes?: HTMLElementsAttributesMap[T] | undefined | null;
  event?: SVGElementEventData<SVGElementTagNameMap[T], E> | undefined | null;
  children?: Children | undefined | null;
};
