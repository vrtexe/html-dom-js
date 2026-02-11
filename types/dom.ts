import type { HTMLElementsAttributesMap } from './attributes';

export type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

export type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >;
}[keyof T];

export type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >;
}[keyof T];

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};

export type PickWritable<T> = Pick<T, WritableKeys<T>>;

export type Children = string | HTMLElement | HTMLElement[];

export type DomEventType<K extends keyof HTMLElementEventMap> = Parameters<
  typeof HTMLElement.prototype.addEventListener<K>
>[1];
export type DomEventListener<
  T extends HTMLElement,
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

export type ElementProps<T extends HTMLElement> = PickWritable<
  RecursivePartial<T>
>;

export type ElementDData<
  T extends keyof HTMLElementTagNameMap,
  E extends HTMLElementEventMap = HTMLElementEventMap,
> = {
  props?: ElementProps<HTMLElementTagNameMap[T]> | undefined | null;
  attributes?: HTMLElementsAttributesMap[T] | undefined | null;
  event?: ElementEventData<HTMLElementTagNameMap[T], E> | undefined | null;
  children?: Children | undefined | null;
};
