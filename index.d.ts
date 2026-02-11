/** @import {type ElementProps, ElementDData, Children, ElementEventData } from './types/dom' */
/** @import { type HTMLElementsAttributesMap } from './types/attributes' */
/**
 * @param {ElementDData<"a">} [data]
 * @return {HTMLAnchorElement}
 */
export function a(data?: ElementDData<"a">): HTMLAnchorElement;
/**
 * @param {ElementDData<"div">} [data]
 * @return {HTMLDivElement}
 */
export function div(data?: ElementDData<"div">): HTMLDivElement;
/**
 * @param {ElementDData<"button">} [data]
 * @return {HTMLButtonElement}
 */
export function button(data?: ElementDData<"button">): HTMLButtonElement;
/**
 * @param {ElementDData<"span">} [data]
 * @return {HTMLSpanElement}
 */
export function span(data?: ElementDData<"span">): HTMLSpanElement;
/**
 * @param {ElementDData<"p">} [data]
 * @return {HTMLParagraphElement}
 */
export function p(data?: ElementDData<"p">): HTMLParagraphElement;
/**
 * @param {ElementDData<"h1">} [data]
 * @return {HTMLHeadingElement}
 */
export function h1(data?: ElementDData<"h1">): HTMLHeadingElement;
/**
 * @param {ElementDData<"h2">} [data]
 * @return {HTMLHeadingElement}
 */
export function h2(data?: ElementDData<"h2">): HTMLHeadingElement;
/**
 * @param {ElementDData<"h3">} [data]
 * @return {HTMLHeadingElement}
 */
export function h3(data?: ElementDData<"h3">): HTMLHeadingElement;
/**
 * @param {ElementDData<"h4">} [data]
 * @return {HTMLHeadingElement}
 */
export function h4(data?: ElementDData<"h4">): HTMLHeadingElement;
/**
 * @param {ElementDData<"h5">} [data]
 * @return {HTMLHeadingElement}
 */
export function h5(data?: ElementDData<"h5">): HTMLHeadingElement;
/**
 * @param {ElementDData<"h6">} [data]
 * @return {HTMLHeadingElement}
 */
export function h6(data?: ElementDData<"h6">): HTMLHeadingElement;
/**
 * @param {ElementDData<"input">} [data]
 * @return {HTMLInputElement}
 */
export function input(data?: ElementDData<"input">): HTMLInputElement;
/**
 * @param {ElementDData<"form">} [data]
 * @return {HTMLFormElement}
 */
export function form(data?: ElementDData<"form">): HTMLFormElement;
/**
 * @param {ElementDData<"label">} [data]
 * @return {HTMLLabelElement}
 */
export function label(data?: ElementDData<"label">): HTMLLabelElement;
/**
 * @param {ElementDData<"textarea">} [data]
 * @return {HTMLTextAreaElement}
 */
export function textarea(data?: ElementDData<"textarea">): HTMLTextAreaElement;
/**
 * @param {ElementDData<"select">} [data]
 * @return {HTMLSelectElement}
 */
export function select(data?: ElementDData<"select">): HTMLSelectElement;
/**
 * @param {ElementDData<"option">} [data]
 * @return {HTMLOptionElement}
 */
export function option(data?: ElementDData<"option">): HTMLOptionElement;
/**
 * @param {ElementDData<"img">} [data]
 * @return {HTMLImageElement}
 */
export function img(data?: ElementDData<"img">): HTMLImageElement;
/**
 * @param {ElementDData<"canvas">} [data]
 * @return {HTMLCanvasElement}
 */
export function canvas(data?: ElementDData<"canvas">): HTMLCanvasElement;
/**
 * @param {ElementDData<"video">} [data]
 * @return {HTMLVideoElement}
 */
export function video(data?: ElementDData<"video">): HTMLVideoElement;
/**
 * @param {ElementDData<"audio">} [data]
 * @return {HTMLAudioElement}
 */
export function audio(data?: ElementDData<"audio">): HTMLAudioElement;
/**
 * @param {ElementDData<"table">} [data]
 * @return {HTMLTableElement}
 */
export function table(data?: ElementDData<"table">): HTMLTableElement;
/**
 * @param {ElementDData<"tr">} [data]
 * @return {HTMLTableRowElement}
 */
export function tr(data?: ElementDData<"tr">): HTMLTableRowElement;
/**
 * @param {ElementDData<"td">} [data]
 * @return {HTMLTableCellElement}
 */
export function td(data?: ElementDData<"td">): HTMLTableCellElement;
/**
 * @param {ElementDData<"th">} [data]
 * @return {HTMLTableCellElement}
 */
export function th(data?: ElementDData<"th">): HTMLTableCellElement;
/**
 * @param {ElementDData<"thead">} [data]
 * @return {HTMLTableSectionElement}
 */
export function thead(data?: ElementDData<"thead">): HTMLTableSectionElement;
/**
 * @param {ElementDData<"tbody">} [data]
 * @return {HTMLTableSectionElement}
 */
export function tbody(data?: ElementDData<"tbody">): HTMLTableSectionElement;
/**
 * @param {ElementDData<"tfoot">} [data]
 * @return {HTMLTableSectionElement}
 */
export function tfoot(data?: ElementDData<"tfoot">): HTMLTableSectionElement;
/**
 * @param {ElementDData<"ul">} [data]
 * @return {HTMLUListElement}
 */
export function ul(data?: ElementDData<"ul">): HTMLUListElement;
/**
 * @param {ElementDData<"ol">} [data]
 * @return {HTMLOListElement}
 */
export function ol(data?: ElementDData<"ol">): HTMLOListElement;
/**
 * @param {ElementDData<"li">} [data]
 * @return {HTMLLIElement}
 */
export function li(data?: ElementDData<"li">): HTMLLIElement;
/**
 * @param {ElementDData<"iframe">} [data]
 * @return {HTMLIFrameElement}
 */
export function iframe(data?: ElementDData<"iframe">): HTMLIFrameElement;
/**
 * @param {ElementDData<"section">} [data]
 * @return {HTMLElement}
 */
export function section(data?: ElementDData<"section">): HTMLElement;
/**
 * @param {ElementDData<"article">} [data]
 * @return {HTMLElement}
 */
export function article(data?: ElementDData<"article">): HTMLElement;
/**
 * @param {ElementDData<"nav">} [data]
 * @return {HTMLElement}
 */
export function nav(data?: ElementDData<"nav">): HTMLElement;
/**
 * @param {ElementDData<"aside">} [data]
 * @return {HTMLElement}
 */
export function aside(data?: ElementDData<"aside">): HTMLElement;
/**
 * @param {ElementDData<"header">} [data]
 * @return {HTMLElement}
 */
export function header(data?: ElementDData<"header">): HTMLElement;
/**
 * @param {ElementDData<"footer">} [data]
 * @return {HTMLElement}
 */
export function footer(data?: ElementDData<"footer">): HTMLElement;
/**
 * @param {ElementDData<"main">} [data]
 * @return {HTMLElement}
 */
export function main(data?: ElementDData<"main">): HTMLElement;
/**
 * @param {ElementDData<"figure">} [data]
 * @return {HTMLElement}
 */
export function figure(data?: ElementDData<"figure">): HTMLElement;
/**
 * @param {ElementDData<"figcaption">} [data]
 * @return {HTMLElement}
 */
export function figcaption(data?: ElementDData<"figcaption">): HTMLElement;
/**
 * @param {ElementDData<"address">} [data]
 * @return {HTMLElement}
 */
export function address(data?: ElementDData<"address">): HTMLElement;
/**
 * @param {ElementDData<"code">} [data]
 * @return {HTMLElement}
 */
export function code(data?: ElementDData<"code">): HTMLElement;
/**
 * @param {ElementDData<"pre">} [data]
 * @return {HTMLPreElement}
 */
export function pre(data?: ElementDData<"pre">): HTMLPreElement;
/**
 * @param {ElementDData<"br">} [data]
 * @return {HTMLBRElement}
 */
export function br(data?: ElementDData<"br">): HTMLBRElement;
/**
 * @param {ElementDData<"hr">} [data]
 * @return {HTMLHRElement}
 */
export function hr(data?: ElementDData<"hr">): HTMLHRElement;
/**
 * @param {ElementDData<"strong">} [data]
 * @return {HTMLElement}
 */
export function strong(data?: ElementDData<"strong">): HTMLElement;
/**
 * @param {ElementDData<"em">} [data]
 * @return {HTMLElement}
 */
export function em(data?: ElementDData<"em">): HTMLElement;
/**
 * @param {ElementDData<"small">} [data]
 * @return {HTMLElement}
 */
export function small(data?: ElementDData<"small">): HTMLElement;
/**
 * @param {ElementDData<"mark">} [data]
 * @return {HTMLElement}
 */
export function mark(data?: ElementDData<"mark">): HTMLElement;
/**
 * @param {ElementDData<"b">} [data]
 * @return {HTMLElement}
 */
export function b(data?: ElementDData<"b">): HTMLElement;
/**
 * @param {ElementDData<"i">} [data]
 * @return {HTMLElement}
 */
export function i(data?: ElementDData<"i">): HTMLElement;
/**
 * @param {ElementDData<"u">} [data]
 * @return {HTMLElement}
 */
export function u(data?: ElementDData<"u">): HTMLElement;
/**
 * @param {ElementDData<"s">} [data]
 * @return {HTMLElement}
 */
export function s(data?: ElementDData<"s">): HTMLElement;
/**
 * @param {ElementDData<"del">} [data]
 * @return {HTMLElement}
 */
export function del(data?: ElementDData<"del">): HTMLElement;
/**
 * @param {ElementDData<"ins">} [data]
 * @return {HTMLElement}
 */
export function ins(data?: ElementDData<"ins">): HTMLElement;
/**
 * @param {ElementDData<"sub">} [data]
 * @return {HTMLElement}
 */
export function sub(data?: ElementDData<"sub">): HTMLElement;
/**
 * @param {ElementDData<"sup">} [data]
 * @return {HTMLElement}
 */
export function sup(data?: ElementDData<"sup">): HTMLElement;
/**
 * @param {ElementDData<"blockquote">} [data]
 * @return {HTMLQuoteElement}
 */
export function blockquote(data?: ElementDData<"blockquote">): HTMLQuoteElement;
/**
 * @param {ElementDData<"q">} [data]
 * @return {HTMLQuoteElement}
 */
export function q(data?: ElementDData<"q">): HTMLQuoteElement;
/**
 * @param {ElementDData<"abbr">} [data]
 * @return {HTMLElement}
 */
export function abbr(data?: ElementDData<"abbr">): HTMLElement;
/**
 * @param {ElementDData<"cite">} [data]
 * @return {HTMLElement}
 */
export function cite(data?: ElementDData<"cite">): HTMLElement;
/**
 * @param {ElementDData<"kbd">} [data]
 * @return {HTMLElement}
 */
export function kbd(data?: ElementDData<"kbd">): HTMLElement;
/**
 * @param {ElementDData<"samp">} [data]
 * @return {HTMLElement}
 */
export function samp(data?: ElementDData<"samp">): HTMLElement;
/**
 * @param {ElementDData<"data">} [data]
 * @return {HTMLDataElement}
 */
export function data(data?: ElementDData<"data">): HTMLDataElement;
/**
 * @param {ElementDData<"time">} [data]
 * @return {HTMLTimeElement}
 */
export function time(data?: ElementDData<"time">): HTMLTimeElement;
/**
 * @param {ElementDData<"progress">} [data]
 * @return {HTMLProgressElement}
 */
export function progress(data?: ElementDData<"progress">): HTMLProgressElement;
/**
 * @param {ElementDData<"meter">} [data]
 * @return {HTMLMeterElement}
 */
export function meter(data?: ElementDData<"meter">): HTMLMeterElement;
/**
 * @param {ElementDData<"details">} [data]
 * @return {HTMLDetailsElement}
 */
export function details(data?: ElementDData<"details">): HTMLDetailsElement;
/**
 * @param {ElementDData<"summary">} [data]
 * @return {HTMLElement}
 */
export function summary(data?: ElementDData<"summary">): HTMLElement;
/**
 * @param {ElementDData<"dialog">} [data]
 * @return {HTMLDialogElement}
 */
export function dialog(data?: ElementDData<"dialog">): HTMLDialogElement;
/**
 * @param {ElementDData<"fieldset">} [data]
 * @return {HTMLFieldSetElement}
 */
export function fieldset(data?: ElementDData<"fieldset">): HTMLFieldSetElement;
/**
 * @param {ElementDData<"legend">} [data]
 * @return {HTMLLegendElement}
 */
export function legend(data?: ElementDData<"legend">): HTMLLegendElement;
/**
 * @param {ElementDData<"datalist">} [data]
 * @return {HTMLDataListElement}
 */
export function datalist(data?: ElementDData<"datalist">): HTMLDataListElement;
/**
 * @param {ElementDData<"optgroup">} [data]
 * @return {HTMLOptGroupElement}
 */
export function optgroup(data?: ElementDData<"optgroup">): HTMLOptGroupElement;
/**
 * @param {ElementDData<"output">} [data]
 * @return {HTMLOutputElement}
 */
export function output(data?: ElementDData<"output">): HTMLOutputElement;
/**
 * @param {ElementDData<"template">} [data]
 * @return {HTMLTemplateElement}
 */
export function template(data?: ElementDData<"template">): HTMLTemplateElement;
/**
 * @param {ElementDData<"slot">} [data]
 * @return {HTMLSlotElement}
 */
export function slot(data?: ElementDData<"slot">): HTMLSlotElement;
/**
 * @param {ElementDData<"script">} [data]
 * @return {HTMLScriptElement}
 */
export function script(data?: ElementDData<"script">): HTMLScriptElement;
/**
 * @param {ElementDData<"style">} [data]
 * @return {HTMLStyleElement}
 */
export function style(data?: ElementDData<"style">): HTMLStyleElement;
/**
 * @param {ElementDData<"link">} [data]
 * @return {HTMLLinkElement}
 */
export function link(data?: ElementDData<"link">): HTMLLinkElement;
/**
 * @param {ElementDData<"meta">} [data]
 * @return {HTMLMetaElement}
 */
export function meta(data?: ElementDData<"meta">): HTMLMetaElement;
/**
 * @param {ElementDData<"base">} [data]
 * @return {HTMLBaseElement}
 */
export function base(data?: ElementDData<"base">): HTMLBaseElement;
/**
 * @param {ElementDData<"title">} [data]
 * @return {HTMLTitleElement}
 */
export function title(data?: ElementDData<"title">): HTMLTitleElement;
/**
 * @param {ElementDData<"source">} [data]
 * @return {HTMLSourceElement}
 */
export function source(data?: ElementDData<"source">): HTMLSourceElement;
/**
 * @param {ElementDData<"track">} [data]
 * @return {HTMLTrackElement}
 */
export function track(data?: ElementDData<"track">): HTMLTrackElement;
/**
 * @param {ElementDData<"embed">} [data]
 * @return {HTMLEmbedElement}
 */
export function embed(data?: ElementDData<"embed">): HTMLEmbedElement;
/**
 * @param {ElementDData<"object">} [data]
 * @return {HTMLObjectElement}
 */
export function object(data?: ElementDData<"object">): HTMLObjectElement;
/**
 * @param {ElementDData<"picture">} [data]
 * @return {HTMLPictureElement}
 */
export function picture(data?: ElementDData<"picture">): HTMLPictureElement;
/**
 * @param {ElementDData<"map">} [data]
 * @return {HTMLMapElement}
 */
export function map(data?: ElementDData<"map">): HTMLMapElement;
/**
 * @param {ElementDData<"area">} [data]
 * @return {HTMLAreaElement}
 */
export function area(data?: ElementDData<"area">): HTMLAreaElement;
/**
 * @param {ElementDData<"caption">} [data]
 * @return {HTMLTableCaptionElement}
 */
export function caption(data?: ElementDData<"caption">): HTMLTableCaptionElement;
/**
 * @param {ElementDData<"col">} [data]
 * @return {HTMLTableColElement}
 */
export function col(data?: ElementDData<"col">): HTMLTableColElement;
/**
 * @param {ElementDData<"colgroup">} [data]
 * @return {HTMLTableColElement}
 */
export function colgroup(data?: ElementDData<"colgroup">): HTMLTableColElement;
/**
 * @param {ElementDData<"dl">} [data]
 * @return {HTMLDListElement}
 */
export function dl(data?: ElementDData<"dl">): HTMLDListElement;
/**
 * @param {ElementDData<"dt">} [data]
 * @return {HTMLElement}
 */
export function dt(data?: ElementDData<"dt">): HTMLElement;
/**
 * @param {ElementDData<"dd">} [data]
 * @return {HTMLElement}
 */
export function dd(data?: ElementDData<"dd">): HTMLElement;
/**
 * @param {ElementDData<"menu">} [data]
 * @return {HTMLMenuElement}
 */
export function menu(data?: ElementDData<"menu">): HTMLMenuElement;
/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tag
 * @param {ElementDData<T>} [data]
 * @return {HTMLElementTagNameMap[T]}
 */
export function element<T extends keyof HTMLElementTagNameMap>(tag: T, data?: ElementDData<T>): HTMLElementTagNameMap[T];
declare namespace _default {
    export { a };
    export { div };
    export { button };
    export { span };
    export { p };
    export { h1 };
    export { h2 };
    export { h3 };
    export { h4 };
    export { h5 };
    export { h6 };
    export { input };
    export { form };
    export { label };
    export { textarea };
    export { select };
    export { option };
    export { img };
    export { canvas };
    export { video };
    export { audio };
    export { table };
    export { tr };
    export { td };
    export { th };
    export { thead };
    export { tbody };
    export { tfoot };
    export { ul };
    export { ol };
    export { li };
    export { iframe };
    export { section };
    export { article };
    export { nav };
    export { aside };
    export { header };
    export { footer };
    export { main };
    export { figure };
    export { figcaption };
    export { address };
    export { code };
    export { pre };
    export { br };
    export { hr };
    export { strong };
    export { em };
    export { small };
    export { mark };
    export { b };
    export { i };
    export { u };
    export { s };
    export { del };
    export { ins };
    export { sub };
    export { sup };
    export { blockquote };
    export { q };
    export { abbr };
    export { cite };
    export { kbd };
    export { samp };
    export { data };
    export { time };
    export { progress };
    export { meter };
    export { details };
    export { summary };
    export { dialog };
    export { fieldset };
    export { legend };
    export { datalist };
    export { optgroup };
    export { output };
    export { template };
    export { slot };
    export { script };
    export { style };
    export { link };
    export { meta };
    export { base };
    export { title };
    export { source };
    export { track };
    export { embed };
    export { object };
    export { picture };
    export { map };
    export { area };
    export { caption };
    export { col };
    export { colgroup };
    export { dl };
    export { dt };
    export { dd };
    export { menu };
}
export default _default;
import type { ElementDData } from './types/dom';
