# ts-minidom

Uma biblioteca minimalista de manipulação do DOM usando TypeScript. Inspirada no jQuery, moderna e leve.

## Recursos

- Seleciona um ou múltiplos elementos
- API encadeável
- Suporte para:
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

## Instalação

```bash
bun install ts-minidom
# ou
npm install ts-minidom
```

## Uso

```ts
import { $, $all } from 'ts-minidom';

$('#app').html('Olá Mundo').addClass('visivel');

$all('.caixa').fadeIn();
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/ts-minidom@1.1.1/dist/minidom.umd.min.js"></script>
<script>
  MiniDOM.$('#app').text('Olá via CDN!');
</script>
```

## NPM

[https://www.npmjs.com/package/ts-minidom](https://www.npmjs.com/package/ts-minidom)

## Licença

MIT © [Neylor Cesar](https://github.com/NeylorCesar)