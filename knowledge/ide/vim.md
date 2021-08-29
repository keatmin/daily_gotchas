---
title: vim
---

## Navigating

IT has been quite frustrating moving between lines when the navigating options are `hjklwb$^`

Use t/T to go to the character before the given character:
```
https://www.google.com
```
:::tip
Typing `t`,`o` will jump to `g` of `google` before the `o`.
While `T` move you backwards, to the word before `o` which would still be `g` in this example coming from the end at `.com`.
`f` is the same except it takes to the exact search character, while `F` find char backwards.
:::

Alternatively, use `<int>|` to jump to `int` char in the line. For example, `5|` will move to `s` in the above example

:::tip
Using `;` to move to the next one in the same direction and `,` in the opposite direction of the navigation
:::
