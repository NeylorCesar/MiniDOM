# ts-minidom

A minimalist DOM manipulation library using TypeScript. Inspired by jQuery, but modern and lightweight.

## Features

- Select single or multiple DOM elements
- Chainable API
- Supports:
  - `.html()`
  - `.text()`
  - `.val()`
  - `.addClass()`
  - `.removeClass()`
  - `.toggleClass()`
  - `.on()`
  - `.show()`
  - `.hide()`
  - `.fadeIn()`
  - `.fadeOut()`

## Installation

```bash
bun install ts-minidom
# or
npm install ts-minidom
```

## Usage

```ts
import { $, $all } from 'ts-minidom';

$('#app').html('Hello World').addClass('visible');

$all('.box').fadeIn();
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/ts-minidom@1.1.1/dist/minidom.umd.min.js"></script>
<script>
  MiniDOM.$('#app').text('Hello from CDN!');
</script>
```

## NPM

[https://www.npmjs.com/package/ts-minidom](https://www.npmjs.com/package/ts-minidom)

## License

MIT © [Neylor Cesar](https://github.com/NeylorCesar)