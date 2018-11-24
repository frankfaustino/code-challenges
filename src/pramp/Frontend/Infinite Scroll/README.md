# Infinite Scroll

Build an image viewer with infinite scrolling, similar to Pinterest.

For the purpose of this challenge, images can be random avatars, generated using this [free](http://avatars.adorable.io/#demo) API, e.g. [http://api.adorable.io/avatars/32131231](http://api.adorable.io/avatars/32131231) (the actual avatar ID can be any random integer).

When you feel ready, you can validate your solution using any collaborative HTML/CSS renderer, such as [this one](https://codepen.io/pen/?editors=1000).

<details><summary>Hints</summary>
<p>

- Make sure your peer understands how to use the API early on, to allow focusing on the actual implementation
- Encourage your peer to first have a solution working end-to-end, before optimizing for performance or edge cases
- Make sure to discuss the following topics and tradeoffs, even if we won’t have the time to address them all:
  - what should we do on window resize?
  - how can we optimize performance?

</p>
</details>

<br />

<details><summary>Answer</summary>
<p>

[Here](https://codepen.io/prampcontent/pen/yxBqNQ)’s a working implementation for reference.

A few notes:

- we’re using robust methods to identify when to load the next batch: `getScrollTop()` and `getDocumentHeight()`
- a loader is shown until the data is actually loaded
- the page size was selected to reflect the average tab size for the content we used
- the provided example isn’t optimized for performance at scale, to match a realistic time frame for an interview

See [this](https://developers.google.com/web/updates/2016/07/infinite-scroller) article for some pointers on performance optimizations when implementing infinite scroll.

</p>
</details>