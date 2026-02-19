import type { HTMLElementsAttributesMap } from './attributes';
import type { BaseElement, Children, ElementProps } from './base.dom';

export type ElementData<
  T extends keyof HTMLElementTagNameMap,
  E extends HTMLElementEventMap = HTMLElementEventMap,
> = {
  props?: ElementProps<HTMLElementTagNameMap[T]> | undefined | null;
  attributes?: HTMLElementsAttributesMap[T] | undefined | null;
  event?: ElementEventData<HTMLElementTagNameMap[T], E> | undefined | null;
  children?: Children | undefined | null;
};

export type DomEventListener<
  T extends BaseElement,
  K extends keyof E,
  E extends HTMLElementEventMap = HTMLElementEventMap,
> = (this: T, ev: E[K]) => unknown;

export type DomEventListenerOption<
  T extends HTMLElement,
  K extends keyof E,
  E extends HTMLElementEventMap = HTMLElementEventMap,
> = {
  handler?: DomEventListener<T, K, E> | undefined | null;
  options?: boolean | AddEventListenerOptions | undefined | null;
};

export type CustomEventListenerOption = {
  handler?: EventListenerOrEventListenerObject | undefined | null;
  options?: boolean | AddEventListenerOptions | undefined | null;
};

export type ElementEventData<
  T extends HTMLElement,
  E extends HTMLElementEventMap = HTMLElementEventMap,
> = {
  [K in keyof E]?:
    | DomEventListener<T, K, E>
    | DomEventListenerOption<T, K, E>
    | undefined
    | null;
};
// & Record<string, EventListenerOrEventListenerObject | CustomEventListenerOption | undefined | null>;

export type DeprecatedElementData<
  T extends keyof HTMLElementDeprecatedTagNameMap,
  E extends HTMLElementEventMap = HTMLElementEventMap,
> = {
  props?: ElementProps<HTMLElementDeprecatedTagNameMap[T]> | undefined | null;
  attributes?: HTMLElementsAttributesMap[T] | undefined | null;
  event?:
    | ElementEventData<HTMLElementDeprecatedTagNameMap[T], E>
    | undefined
    | null;
  children?: Children | undefined | null;
};
