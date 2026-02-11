/** @import {type ElementProps, ElementDData, Children, ElementEventData } from './types/dom' */
/** @import { type HTMLElementsAttributesMap } from './types/attributes' */

/**
 * @param {ElementDData<"a">} [data]
 * @return {HTMLAnchorElement}
 */
export function a(data) {
  return element('a', data);
}

/**
 * @param {ElementDData<"div">} [data]
 * @return {HTMLDivElement}
 */
export function div(data) {
  return element('div', data);
}

/**
 * @param {ElementDData<"button">} [data]
 * @return {HTMLButtonElement}
 */
export function button(data) {
  return element('button', data);
}

/**
 * @param {ElementDData<"span">} [data]
 * @return {HTMLSpanElement}
 */
export function span(data) {
  return element('span', data);
}

/**
 * @param {ElementDData<"p">} [data]
 * @return {HTMLParagraphElement}
 */
export function p(data) {
  return element('p', data);
}

/**
 * @param {ElementDData<"h1">} [data]
 * @return {HTMLHeadingElement}
 */
export function h1(data) {
  return element('h1', data);
}

/**
 * @param {ElementDData<"h2">} [data]
 * @return {HTMLHeadingElement}
 */
export function h2(data) {
  return element('h2', data);
}

/**
 * @param {ElementDData<"h3">} [data]
 * @return {HTMLHeadingElement}
 */
export function h3(data) {
  return element('h3', data);
}

/**
 * @param {ElementDData<"h4">} [data]
 * @return {HTMLHeadingElement}
 */
export function h4(data) {
  return element('h4', data);
}

/**
 * @param {ElementDData<"h5">} [data]
 * @return {HTMLHeadingElement}
 */
export function h5(data) {
  return element('h5', data);
}

/**
 * @param {ElementDData<"h6">} [data]
 * @return {HTMLHeadingElement}
 */
export function h6(data) {
  return element('h6', data);
}

/**
 * @param {ElementDData<"input">} [data]
 * @return {HTMLInputElement}
 */
export function input(data) {
  return element('input', data);
}

/**
 * @param {ElementDData<"form">} [data]
 * @return {HTMLFormElement}
 */
export function form(data) {
  return element('form', data);
}

/**
 * @param {ElementDData<"label">} [data]
 * @return {HTMLLabelElement}
 */
export function label(data) {
  return element('label', data);
}

/**
 * @param {ElementDData<"textarea">} [data]
 * @return {HTMLTextAreaElement}
 */
export function textarea(data) {
  return element('textarea', data);
}

/**
 * @param {ElementDData<"select">} [data]
 * @return {HTMLSelectElement}
 */
export function select(data) {
  return element('select', data);
}

/**
 * @param {ElementDData<"option">} [data]
 * @return {HTMLOptionElement}
 */
export function option(data) {
  return element('option', data);
}

/**
 * @param {ElementDData<"img">} [data]
 * @return {HTMLImageElement}
 */
export function img(data) {
  return element('img', data);
}

/**
 * @param {ElementDData<"canvas">} [data]
 * @return {HTMLCanvasElement}
 */
export function canvas(data) {
  return element('canvas', data);
}

/**
 * @param {ElementDData<"video">} [data]
 * @return {HTMLVideoElement}
 */
export function video(data) {
  return element('video', data);
}

/**
 * @param {ElementDData<"audio">} [data]
 * @return {HTMLAudioElement}
 */
export function audio(data) {
  return element('audio', data);
}

/**
 * @param {ElementDData<"table">} [data]
 * @return {HTMLTableElement}
 */
export function table(data) {
  return element('table', data);
}

/**
 * @param {ElementDData<"tr">} [data]
 * @return {HTMLTableRowElement}
 */
export function tr(data) {
  return element('tr', data);
}

/**
 * @param {ElementDData<"td">} [data]
 * @return {HTMLTableCellElement}
 */
export function td(data) {
  return element('td', data);
}

/**
 * @param {ElementDData<"th">} [data]
 * @return {HTMLTableCellElement}
 */
export function th(data) {
  return element('th', data);
}

/**
 * @param {ElementDData<"thead">} [data]
 * @return {HTMLTableSectionElement}
 */
export function thead(data) {
  return element('thead', data);
}

/**
 * @param {ElementDData<"tbody">} [data]
 * @return {HTMLTableSectionElement}
 */
export function tbody(data) {
  return element('tbody', data);
}

/**
 * @param {ElementDData<"tfoot">} [data]
 * @return {HTMLTableSectionElement}
 */
export function tfoot(data) {
  return element('tfoot', data);
}

/**
 * @param {ElementDData<"ul">} [data]
 * @return {HTMLUListElement}
 */
export function ul(data) {
  return element('ul', data);
}

/**
 * @param {ElementDData<"ol">} [data]
 * @return {HTMLOListElement}
 */
export function ol(data) {
  return element('ol', data);
}

/**
 * @param {ElementDData<"li">} [data]
 * @return {HTMLLIElement}
 */
export function li(data) {
  return element('li', data);
}

/**
 * @param {ElementDData<"iframe">} [data]
 * @return {HTMLIFrameElement}
 */
export function iframe(data) {
  return element('iframe', data);
}

/**
 * @param {ElementDData<"section">} [data]
 * @return {HTMLElement}
 */
export function section(data) {
  return element('section', data);
}

/**
 * @param {ElementDData<"article">} [data]
 * @return {HTMLElement}
 */
export function article(data) {
  return element('article', data);
}

/**
 * @param {ElementDData<"nav">} [data]
 * @return {HTMLElement}
 */
export function nav(data) {
  return element('nav', data);
}

/**
 * @param {ElementDData<"aside">} [data]
 * @return {HTMLElement}
 */
export function aside(data) {
  return element('aside', data);
}

/**
 * @param {ElementDData<"header">} [data]
 * @return {HTMLElement}
 */
export function header(data) {
  return element('header', data);
}

/**
 * @param {ElementDData<"footer">} [data]
 * @return {HTMLElement}
 */
export function footer(data) {
  return element('footer', data);
}

/**
 * @param {ElementDData<"main">} [data]
 * @return {HTMLElement}
 */
export function main(data) {
  return element('main', data);
}

/**
 * @param {ElementDData<"figure">} [data]
 * @return {HTMLElement}
 */
export function figure(data) {
  return element('figure', data);
}

/**
 * @param {ElementDData<"figcaption">} [data]
 * @return {HTMLElement}
 */
export function figcaption(data) {
  return element('figcaption', data);
}

/**
 * @param {ElementDData<"address">} [data]
 * @return {HTMLElement}
 */
export function address(data) {
  return element('address', data);
}

/**
 * @param {ElementDData<"code">} [data]
 * @return {HTMLElement}
 */
export function code(data) {
  return element('code', data);
}

/**
 * @param {ElementDData<"pre">} [data]
 * @return {HTMLPreElement}
 */
export function pre(data) {
  return element('pre', data);
}

/**
 * @param {ElementDData<"br">} [data]
 * @return {HTMLBRElement}
 */
export function br(data) {
  return element('br', data);
}

/**
 * @param {ElementDData<"hr">} [data]
 * @return {HTMLHRElement}
 */
export function hr(data) {
  return element('hr', data);
}

/**
 * @param {ElementDData<"strong">} [data]
 * @return {HTMLElement}
 */
export function strong(data) {
  return element('strong', data);
}

/**
 * @param {ElementDData<"em">} [data]
 * @return {HTMLElement}
 */
export function em(data) {
  return element('em', data);
}

/**
 * @param {ElementDData<"small">} [data]
 * @return {HTMLElement}
 */
export function small(data) {
  return element('small', data);
}

/**
 * @param {ElementDData<"mark">} [data]
 * @return {HTMLElement}
 */
export function mark(data) {
  return element('mark', data);
}

/**
 * @param {ElementDData<"b">} [data]
 * @return {HTMLElement}
 */
export function b(data) {
  return element('b', data);
}

/**
 * @param {ElementDData<"i">} [data]
 * @return {HTMLElement}
 */
export function i(data) {
  return element('i', data);
}

/**
 * @param {ElementDData<"u">} [data]
 * @return {HTMLElement}
 */
export function u(data) {
  return element('u', data);
}

/**
 * @param {ElementDData<"s">} [data]
 * @return {HTMLElement}
 */
export function s(data) {
  return element('s', data);
}

/**
 * @param {ElementDData<"del">} [data]
 * @return {HTMLElement}
 */
export function del(data) {
  return element('del', data);
}

/**
 * @param {ElementDData<"ins">} [data]
 * @return {HTMLElement}
 */
export function ins(data) {
  return element('ins', data);
}

/**
 * @param {ElementDData<"sub">} [data]
 * @return {HTMLElement}
 */
export function sub(data) {
  return element('sub', data);
}

/**
 * @param {ElementDData<"sup">} [data]
 * @return {HTMLElement}
 */
export function sup(data) {
  return element('sup', data);
}

/**
 * @param {ElementDData<"blockquote">} [data]
 * @return {HTMLQuoteElement}
 */
export function blockquote(data) {
  return element('blockquote', data);
}

/**
 * @param {ElementDData<"q">} [data]
 * @return {HTMLQuoteElement}
 */
export function q(data) {
  return element('q', data);
}

/**
 * @param {ElementDData<"abbr">} [data]
 * @return {HTMLElement}
 */
export function abbr(data) {
  return element('abbr', data);
}

/**
 * @param {ElementDData<"cite">} [data]
 * @return {HTMLElement}
 */
export function cite(data) {
  return element('cite', data);
}

/**
 * @param {ElementDData<"kbd">} [data]
 * @return {HTMLElement}
 */
export function kbd(data) {
  return element('kbd', data);
}

/**
 * @param {ElementDData<"samp">} [data]
 * @return {HTMLElement}
 */
export function samp(data) {
  return element('samp', data);
}

/**
 * @param {ElementDData<"data">} [data]
 * @return {HTMLDataElement}
 */
export function data(data) {
  return element('data', data);
}

/**
 * @param {ElementDData<"time">} [data]
 * @return {HTMLTimeElement}
 */
export function time(data) {
  return element('time', data);
}

/**
 * @param {ElementDData<"progress">} [data]
 * @return {HTMLProgressElement}
 */
export function progress(data) {
  return element('progress', data);
}

/**
 * @param {ElementDData<"meter">} [data]
 * @return {HTMLMeterElement}
 */
export function meter(data) {
  return element('meter', data);
}

/**
 * @param {ElementDData<"details">} [data]
 * @return {HTMLDetailsElement}
 */
export function details(data) {
  return element('details', data);
}

/**
 * @param {ElementDData<"summary">} [data]
 * @return {HTMLElement}
 */
export function summary(data) {
  return element('summary', data);
}

/**
 * @param {ElementDData<"dialog">} [data]
 * @return {HTMLDialogElement}
 */
export function dialog(data) {
  return element('dialog', data);
}

/**
 * @param {ElementDData<"fieldset">} [data]
 * @return {HTMLFieldSetElement}
 */
export function fieldset(data) {
  return element('fieldset', data);
}

/**
 * @param {ElementDData<"legend">} [data]
 * @return {HTMLLegendElement}
 */
export function legend(data) {
  return element('legend', data);
}

/**
 * @param {ElementDData<"datalist">} [data]
 * @return {HTMLDataListElement}
 */
export function datalist(data) {
  return element('datalist', data);
}

/**
 * @param {ElementDData<"optgroup">} [data]
 * @return {HTMLOptGroupElement}
 */
export function optgroup(data) {
  return element('optgroup', data);
}

/**
 * @param {ElementDData<"output">} [data]
 * @return {HTMLOutputElement}
 */
export function output(data) {
  return element('output', data);
}

/**
 * @param {ElementDData<"template">} [data]
 * @return {HTMLTemplateElement}
 */
export function template(data) {
  return element('template', data);
}

/**
 * @param {ElementDData<"slot">} [data]
 * @return {HTMLSlotElement}
 */
export function slot(data) {
  return element('slot', data);
}

/**
 * @param {ElementDData<"script">} [data]
 * @return {HTMLScriptElement}
 */
export function script(data) {
  return element('script', data);
}

/**
 * @param {ElementDData<"style">} [data]
 * @return {HTMLStyleElement}
 */
export function style(data) {
  return element('style', data);
}

/**
 * @param {ElementDData<"link">} [data]
 * @return {HTMLLinkElement}
 */
export function link(data) {
  return element('link', data);
}

/**
 * @param {ElementDData<"meta">} [data]
 * @return {HTMLMetaElement}
 */
export function meta(data) {
  return element('meta', data);
}

/**
 * @param {ElementDData<"base">} [data]
 * @return {HTMLBaseElement}
 */
export function base(data) {
  return element('base', data);
}

/**
 * @param {ElementDData<"title">} [data]
 * @return {HTMLTitleElement}
 */
export function title(data) {
  return element('title', data);
}

/**
 * @param {ElementDData<"source">} [data]
 * @return {HTMLSourceElement}
 */
export function source(data) {
  return element('source', data);
}

/**
 * @param {ElementDData<"track">} [data]
 * @return {HTMLTrackElement}
 */
export function track(data) {
  return element('track', data);
}

/**
 * @param {ElementDData<"embed">} [data]
 * @return {HTMLEmbedElement}
 */
export function embed(data) {
  return element('embed', data);
}

/**
 * @param {ElementDData<"object">} [data]
 * @return {HTMLObjectElement}
 */
export function object(data) {
  return element('object', data);
}

/**
 * @param {ElementDData<"picture">} [data]
 * @return {HTMLPictureElement}
 */
export function picture(data) {
  return element('picture', data);
}

/**
 * @param {ElementDData<"map">} [data]
 * @return {HTMLMapElement}
 */
export function map(data) {
  return element('map', data);
}

/**
 * @param {ElementDData<"area">} [data]
 * @return {HTMLAreaElement}
 */
export function area(data) {
  return element('area', data);
}

/**
 * @param {ElementDData<"caption">} [data]
 * @return {HTMLTableCaptionElement}
 */
export function caption(data) {
  return element('caption', data);
}

/**
 * @param {ElementDData<"col">} [data]
 * @return {HTMLTableColElement}
 */
export function col(data) {
  return element('col', data);
}

/**
 * @param {ElementDData<"colgroup">} [data]
 * @return {HTMLTableColElement}
 */
export function colgroup(data) {
  return element('colgroup', data);
}

/**
 * @param {ElementDData<"dl">} [data]
 * @return {HTMLDListElement}
 */
export function dl(data) {
  return element('dl', data);
}

/**
 * @param {ElementDData<"dt">} [data]
 * @return {HTMLElement}
 */
export function dt(data) {
  return element('dt', data);
}

/**
 * @param {ElementDData<"dd">} [data]
 * @return {HTMLElement}
 */
export function dd(data) {
  return element('dd', data);
}

/**
 * @param {ElementDData<"menu">} [data]
 * @return {HTMLMenuElement}
 */
export function menu(data) {
  return element('menu', data);
}

/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tag
 * @param {ElementDData<T>} [data]
 * @return {HTMLElementTagNameMap[T]}
 */
export function element(tag, data) {
  const element = document.createElement(tag);

  assignProperties(element, data?.props);
  setAttributes(element, data?.attributes);
  replaceChildren(element, data?.children);
  attachEventListener(element, data?.event);
  return element;
}

/**
 * @template {HTMLElement} T
 * @param {T} element
 * @param {ElementProps<T> | null | undefined} props
 */
function assignProperties(element, props) {
  if (!props) {
    return;
  }

  Object.assign(element, props);

  for (const key in props) {
    // @ts-expect-error dynamic key access
    if (typeof props[key] === 'object') {
      // @ts-expect-error dynamic key access
      assignProperties(element[key], props[key]);
      // Object.assign(element[key], props[key]);
    }
  }
}

/**
 * @template {HTMLElement} T
 * @template {keyof HTMLElementTagNameMap} A
 * @param {T} element
 * @param {HTMLElementsAttributesMap[A] | null | undefined} attributes
 */
function setAttributes(element, attributes) {
  if (!attributes) {
    return;
  }

  for (const key in attributes) {
    // @ts-expect-error type is tye same
    if (attributes[key]) {
      // @ts-expect-error type is tye same
      element.setAttribute(key, attributes[key]);
    }
  }
}

/**
 * @param {HTMLElement} element
 * @param {Children|undefined|null} children
 */
function replaceChildren(element, children) {
  if (!children) {
    element.replaceChildren();
    return;
  }

  if (Array.isArray(children)) {
    element.replaceChildren(...children);
  } else {
    element.replaceChildren(children);
  }
}

/**
 * @template {HTMLElement} T
 * @template {HTMLElementEventMap} E
 * @param {T} element
 * @param {ElementEventData<T, E> | undefined | null} eventData
 */
function attachEventListener(element, eventData) {
  if (eventData == undefined || eventData == null) {
    return;
  }

  /**
   * @type {(keyof ElementEventData<T, E>)[]}
   @ts-expect-error assert type */
  const keys = Object.keys(eventData);

  for (const key of keys) {
    const event = eventData[key];
    if (typeof event === 'function') {
      // @ts-expect-error correctly passed handler
      element.addEventListener(key, event);
    } else if (event && typeof event === 'object' && 'handler' in event) {
      if (!event.handler) {
        continue;
      }
      // @ts-expect-error correctly passed handler
      element.addEventListener(key, event.handler, event.options);
    }
  }
}

export default {
  a,
  div,
  button,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  form,
  label,
  textarea,
  select,
  option,
  img,
  canvas,
  video,
  audio,
  table,
  tr,
  td,
  th,
  thead,
  tbody,
  tfoot,
  ul,
  ol,
  li,
  iframe,
  section,
  article,
  nav,
  aside,
  header,
  footer,
  main,
  figure,
  figcaption,
  address,
  code,
  pre,
  br,
  hr,
  strong,
  em,
  small,
  mark,
  b,
  i,
  u,
  s,
  del,
  ins,
  sub,
  sup,
  blockquote,
  q,
  abbr,
  cite,
  kbd,
  samp,
  data,
  time,
  progress,
  meter,
  details,
  summary,
  dialog,
  fieldset,
  legend,
  datalist,
  optgroup,
  output,
  template,
  slot,
  script,
  style,
  link,
  meta,
  base,
  title,
  source,
  track,
  embed,
  object,
  picture,
  map,
  area,
  caption,
  col,
  colgroup,
  dl,
  dt,
  dd,
  menu,
};
