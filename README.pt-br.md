# MiniDOM

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
bun install minidom
# ou
npm install minidom
```

## Uso

```ts
import { $, $all } from 'minidom';

$('#app').html('Olá Mundo').addClass('visivel');

$all('.caixa').fadeIn();
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/minidom@0.1.0/dist/minidom.umd.min.js"></script>
<script>
  MiniDOM.$('#app').text('Olá via CDN!');
</script>
```

## Licença

MIT © Neylor Cesar
https://github.com/NeylorCesar/MiniDOM