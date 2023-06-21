# ANSI
ANSI escape codes library written in TypeScript for Deno.

[Dots](https://en.wikipedia.org/wiki/Braille_Patterns)

```ts
function animateSpinner() {
    const frames = ['⠋ ', '⠉⠁', '⠈⠃', ' ⠇', '⠠⠆', '⠤⠄', '⠦ ', '⠇ '];
    let i = 0;
  
    setInterval(() => {
        Deno.stdout.write(new TextEncoder().encode('\x9b38;5;110m\r' + frames[i] + 'Loading'));
        i = (i + 1) % frames.length;
    }, 80);
}

animateSpinner();
```
