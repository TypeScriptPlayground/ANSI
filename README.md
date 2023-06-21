# ANSI
ANSI escape codes library written in TypeScript for Deno.

[Dots](https://en.wikipedia.org/wiki/Braille_Patterns)

Just perfekt!
```ts
console.log('⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇\n⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇\n⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇\n⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇\n⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇\n⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇⣿⣿⢸⣿⡇');
```

![image](https://github.com/TypeScriptPlayground/ANSI/assets/62719703/29a1ffa4-2e1a-429e-8ae3-6a579dca5496)


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
