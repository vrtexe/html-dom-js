import type { HTMLElementsAttributesMap } from './attributes.d.ts';
import type { Children, CustomEventData, ElementProps } from './base.dom.d.ts';

export type SVGEventMapOf<T extends SVGElement> = T extends SVGSVGElement
  ? SVGSVGElementEventMap
  : SVGElementEventMap;

export type SVGDomEventListener<
  T extends SVGElement,
  K extends keyof E,
  E extends SVGElementEventMap = SVGElementEventMap,
> = (this: T, ev: E[K] & { readonly currentTarget: T }) => unknown;

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
  E extends SVGElementEventMap = SVGEventMapOf<T>,
> = {
  [K in keyof E]?:
    | SVGDomEventListener<T, K, E>
    | SVGDomEventListenerOption<T, K, E>
    | undefined
    | null;
} & CustomEventData<T>;

export type SVGElementData<
  T extends keyof SVGElementTagNameMap,
  E extends SVGElementEventMap = SVGEventMapOf<SVGElementTagNameMap[T]>,
> = {
  props?: ElementProps<SVGElementTagNameMap[T]> | undefined | null;
  attributes?: HTMLElementsAttributesMap[T] | undefined | null;
  event?: SVGElementEventData<SVGElementTagNameMap[T], E> | undefined | null;
  children?: Children | undefined | null;
};
