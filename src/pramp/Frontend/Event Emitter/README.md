# Event Emitter

Implement an EventEmitter that supports standard operations, such as adding and removing listeners and emitting events by topic.

When you feel ready, you can validate your solution using any collaborative HTML/CSS renderer, such as [this one](https://codepen.io/pen/?editors=1000).

<br />

<details><summary>HINTS</summary>
<p>

- It’s Ok to assume that we can write modern ES6 code, but it’s good to ask your peer what they would do for backward compatibility (e.g. transpile)
- Help your peer to first establish the API, including `addListener` (or `on`), `removeListener` (or `off`), `once` and `emit`.
- Ask them to describe how event listeners work in the browser, and check for a basic understanding of the single event loop
- Make sure that your peer takes care of potential memory leaks when implementing `once`
</p>
</details>

<br />

<details><summary>ANSWER</summary>
<p>
There are many great open source implementations of EventEmitters available for reference.

[Here](https://gist.github.com/mudge/5830382#file-eventemitter-js) is a simple implementation using vanilla javascript with older browser compatibility.

In addition, here are a few chosen examples for reference:

- [This example](https://gist.github.com/mudge/5830382#gistcomment-2623252), using ES2015 Classes
- [This example](https://gist.github.com/mudge/5830382#gistcomment-2301973), using lodash and ES6 functions
- [This example](https://github.com/facebook/emitter), of Facebook’s event emitter (including type annotations)
- [This example](https://github.com/primus/eventemitter3/blob/master/index.js) of a popular, high performance implementation
</p>
</detail>