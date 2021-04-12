# TIL - TOday I learnt

> No external libraries included

| package name | bundle size |
| ------------ | ----------- |
| jQuery       |             |
| react        |             |
| vue          |             |

## Day 1

- vanilla javascript modules still sucks, hard to link/import and use them in html files
- How to include another HtML file into main html file?
- How to make multi page website from vanilla JS?
- diff b/w `onload` and `DOMContentLoaded` event? [demo](http://web.archive.org/web/20150405114023/http://ie.microsoft.com/testdrive/HTML5/DOMContentLoaded/Default.html)
- How to remove all childNodes of an element?

## Day 2

- Replace DOM elements? `child.replaceWith(span)`
- Maintain and use `historyAPI` to enable back button behaviour in SPA?
- `const` keyword only errors on assignment, can still use `push`, `pop` or other collection methods
- List all registered methods in heap `Object.getOwnPropertyNames(window)`

## Day 3

- Build your own `jQuery`
  - Simple selector
  - CSS manipulation
  - CSS class manipulation
  - DOM manipulation
  - AJAX request
  - Event listeners
    - Additional event listener trigger
    - Event delegation

## Day 4

> Methodic working saves times

- strategy/ Methodology to build webpages
  - Which parts are dynamic which parts are static? Only dynamic parts via js
  - Does it require states? local states or global states?
  - Indentify Interactive behaviours and all responsible events
  - How will you style elements? Smooth Animations for eyes
  - Data Driven Componenets? API calls, data to generate list/tables, visualizations
- How to make `div` behave like a link?

- [Why is it a good idea to mark up menus as lists?](https://stackoverflow.com/questions/43824003/why-use-lists-for-navigation-menus)
- When you design a navigation menu, what do you need to plan for in the future?
  - open for extension and closed for change
- What are the benefits of using <select> elements for menus, and what are the problems?
- What do you define with <area> elements, and what is the nohref attribute of an area element for (this is not in here, you'd need to do some online research)
- What are the benefits of **skip links**?
- use [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) in innerHTML to inject new HTML
  - tag`string text ${expression} string text`
- [javascript === strict equality operator vs abstract equality operator ==](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)

## Day 5

- Pass entire dataStructure to function, keep track of your mutation
