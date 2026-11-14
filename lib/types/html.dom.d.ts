import type { HTMLElementsAttributesMap } from './attributes.d.ts';
import type { BaseElement, Children, CustomEventData, ElementProps } from './base.dom.d.ts';

export type HTMLEventMapOf<T extends HTMLElement> = T extends HTMLBodyElement
  ? HTMLBodyElementEventMap
  : T extends HTMLFrameSetElement
    ? HTMLFrameSetElementEventMap
    : T extends HTMLVideoElement
      ? HTMLVideoElementEventMap
      : T extends HTMLMediaElement
        ? HTMLMediaElementEventMap
        : HTMLElementEventMap;

export type ElementData<
  T extends keyof HTMLElementTagNameMap,
  E extends HTMLElementEventMap = HTMLEventMapOf<HTMLElementTagNameMap[T]>,
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
> = (this: T, ev: E[K] & { readonly currentTarget: T }) => unknown;

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
  E extends HTMLElementEventMap = HTMLEventMapOf<T>,
> = {
  [K in keyof E]?:
    | DomEventListener<T, K, E>
    | DomEventListenerOption<T, K, E>
    | undefined
    | null;
} & CustomEventData<T>;

export type DeprecatedElementData<
  T extends keyof HTMLElementDeprecatedTagNameMap,
  E extends HTMLElementEventMap = HTMLEventMapOf<HTMLElementDeprecatedTagNameMap[T]>,
> = {
  props?: ElementProps<HTMLElementDeprecatedTagNameMap[T]> | undefined | null;
  attributes?: HTMLElementsAttributesMap[T] | undefined | null;
  event?:
    | ElementEventData<HTMLElementDeprecatedTagNameMap[T], E>
    | undefined
    | null;
  children?: Children | undefined | null;
};
