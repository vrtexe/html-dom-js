import type { HTMLElementsAttributesMap } from './attributes.d.ts';
import type { Children, CustomEventData, ElementProps } from './base.dom.d.ts';

export type MathDomEventListener<
  T extends MathMLElement,
  K extends keyof E,
  E extends MathMLElementEventMap = MathMLElementEventMap,
> = (this: T, ev: E[K] & { readonly currentTarget: T }) => unknown;

export type MathDomEventListenerOption<
  T extends MathMLElement,
  K extends keyof E,
  E extends MathMLElementEventMap = MathMLElementEventMap,
> = {
  handler?: MathDomEventListener<T, K, E> | undefined | null;
  options?: boolean | AddEventListenerOptions | undefined | null;
};

export type MathElementEventData<
  T extends MathMLElement,
  E extends MathMLElementEventMap = MathMLElementEventMap,
> = {
  [K in keyof E]?:
    | MathDomEventListener<T, K, E>
    | MathDomEventListenerOption<T, K, E>
    | undefined
    | null;
} & CustomEventData<T>;

export type MathElementData<
  T extends keyof MathMLElementTagNameMap,
  E extends MathMLElementEventMap = MathMLElementEventMap,
> = {
  props?: ElementProps<MathMLElementTagNameMap[T]> | undefined | null;
  attributes?: HTMLElementsAttributesMap[T] | undefined | null;
  event?: MathElementEventData<MathMLElementTagNameMap[T], E> | undefined | null;
  children?: Children | undefined | null;
};