# fiore

Create HTML, SVG and MathML elements in JavaScript with one function per tag.

[![npm version](https://img.shields.io/npm/v/fiorejs.svg?style=flat-square)](https://www.npmjs.com/package/fiorejs)
[![types](https://img.shields.io/npm/types/fiorejs.svg?style=flat-square)](https://github.com/vrtexe/fiore/blob/main/lib/html.d.ts)
[![license](https://img.shields.io/npm/l/fiorejs.svg?style=flat-square)](https://github.com/vrtexe/fiore/blob/main/LICENSE.md)
[![issues](https://img.shields.io/github/issues/vrtexe/fiore.svg?style=flat-square)](https://github.com/vrtexe/fiore/issues)

## Why this library

- **Native elements, not wrappers.** `element()` calls `document.createElement(tag)` and returns that node, so there is nothing to unwrap before it goes into the DOM (`lib/core/html.js:17`, `lib/core/html.js:24`).
- **Four inputs in a fixed order.** `props`, `attributes`, `children` and `event` are applied in that order to every element (`lib/core/html.js:19-22`).
- **Nested props are assigned in place.** Objects such as `style` are walked with a queue and merged with `Object.assign`, so `style: { height: '100vh' }` reaches the element's style object (`lib/core/base.js:16-35`).
- **Children accept a node, a string or an array.** `replaceChildren` spreads arrays and passes anything else straight through (`lib/core/base.js:62-73`).
- **Listeners take options.** An event value can be a function, or an object with `handler` and `options` for `addEventListener` (`lib/core/base.js:115-127`).
- **Typed per tag.** `element()` is generic over `HTMLElementTagNameMap` and returns the mapped element type, and the same pattern covers SVG and MathML (`lib/core/html.d.ts:8`, `lib/core/svg.d.ts:8`, `lib/core/math.d.ts:8`).

## Install

```sh
npm install -D fiorejs
```

## Description

A simple library for creating `html` elements in javascript, uses javascript to initialize the properties of elements and no state handling or reactive object are created.

## Usage

```js
import { div, button, label, input } from 'fiorejs';

document.body.appendChild(
  div({
    attributes: {
      class: 'test-class',
      'aria-label': 'Custom Control',
      onclick: (e) => {
        e.stopPropagation();
        console.log('Abort event triggered!', e);
      },
    },
    props: {
      title: 'Title',
      className: 'custom-class',
      style: {
        height: '100vh',
        margin: '0',
        background: 'white',
        padding: '5px',
      },
    },
    children: [
      label({
        props: {
          htmlFor: 'test',
        },
        children: 'Test Label',
      }),
      input({
        props: {
          type: 'text',
          placeholder: 'Enter text',
          required: true,
        },
      }),
      div({ children: 'Custom Control' }),
      button({
        props: { className: 'example-class' },
        event: {
          click: (e) => {
            e.stopPropagation();
            console.log('Button clicked!', e);
          },
          dblclick: (e) => {
            e.stopPropagation();
            console.log('Button double-clicked!', e);
          },
        },
        children: 'Click',
      }),
    ],
  }),
);
```

A default import is also supported.

```js
import html from '../index.js';

document.body.appendChild(
  html.div({
    children: 'Testing',
  }),
);
```

## Documentation

Every tag has its own method defined, the general `element` function can be used to create any element.
Example:

```js
import { element } from 'fiorejs';

document.body.appendChild(
  element('div', {
    props: { className: 'test' },
  }),
);
```

Some properties can be defined in multiple ways, the main options are applied in order:

- `props` - Javascript properties of the html element
- `attributes` - Attributes that can be set on the html element ([setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute))
- `children` - The content of the element, can be a string, a single child or an array of children.
- `event` - The event listeners are attached last.

```js
import { element } from 'fiorejs';

document.body.appendChild(
  element('div', {
    props: { className: 'test', onclick: () => {} },
    attributes: { class: 'test', onclick: 'method()' },
    event: {
      onclick: (e) => console.log('Clicked', e),
    },
    children: 'Content',
  }),
);
```

Import styles:

```js
import { element } from 'fiorejs';
import { element } from 'fiorejs/html';
import h from 'fiorejs/html';
import svg from 'fiorejs/svg';
import { svg, html } from 'fiorejs/global';
```

> The mdn javascript/html documentation applies here
> Typescript support and declaration files are included

## Releases

Release notes are on the [GitHub releases page](https://github.com/vrtexe/fiore/releases).

## License

[MIT](https://github.com/vrtexe/fiore/blob/main/LICENSE.md)
