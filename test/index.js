import { div, button, label, input } from '../lib/html.js';

document.getElementById('app')?.appendChild(
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
      className: 'leaflet-bar leaflet-control custom-control',
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
      div({ children: ['Custom Control'] }),
      button({
        props: {
          className: 'leaflet-control-button',
        },
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
