# MiniDOM

A minimalist DOM manipulation library using TypeScript. Inspired by jQuery, but modern and lightweight.

## Features

- Select single or multiple elements
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
bun install minidom
# or
npm install minidom
```

## Usage

```ts
import { $, $all } from 'minidom';

$('#app').html('Hello World').addClass('visible');

$all('.box').fadeIn();
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/minidom@0.1.0/dist/minidom.umd.min.js"></script>
<script>
  MiniDOM.$('#app').text('Hello from CDN!');
</script>
```

## License

MIT © Neylor Cesar 
https://github.com/NeylorCesar/MiniDOM