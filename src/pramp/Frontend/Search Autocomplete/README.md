# Search Autocomplete

Implement an efficient Search Autocomplete input to search for movie titles, loading its data from a remote service endpoint.

**Note:** For simplicity, use the provided `searchData` method to simulate a remote call.

When you feel ready, you can validate your solution using any collaborative HTML/CSS renderer, such as [this one](https://codepen.io/pen/?editors=1000).


<br />

<details><summary>HINTS</summary>
<p>

- Make sure your peer realizes the need to listen on both `keyup` and `change` events
- Encourage your peer to start with a simple working solution, and then optimize for performance
- Can we reduce the number of repeating queries? Make sure that your peer understands the concept and need for memoization/caching
- Can we reduce the number of intermediate queries? Make sure that your peer understands the concept and need for debouncing
- Ask your peer to highlight the query string within the search results, using the existing `span.query-highlight` class

</p>
</details>

<br />

<details><summary>ANSWER</summary>
<p>

We start off with registering an event handler to both `change` and `keyup` event, where we pass the local value on the a method that queries the remote service.

Once the results are back, we inject them into the `results` list:

```
// Get HTML elements
const searchInputElement = document.querySelector('.search-input');
const resultsElement = document.querySelector('.results');

// Convert search results into UI suggestions
function showSearchResults(searchQuery) {
    searchData(searchQuery).then(results => {
        const html = results.map(movie => `
  <li>
    <span class="title">${movie.title}</span>
    <span class="rating">${movie.rating}</span>
  </li>
`);

        resultsElement.innerHTML = html.join('');
    });
}

// Pass 
function handleChange() {
    return showSearchResults(this.value);
}

// Register for both events
searchInputElement.addEventListener('change', handleChange);
searchInputElement.addEventListener('keyup', handleChange);
```

Next, we’ll want to optimize by reducing the number of requests to the external service. We’ll start with reducing repeating requests, by using [memoization](https://www.sitepoint.com/implementing-memoization-in-javascript/):

```
// Adding this right before the handleChange method
function memoize(func) {
    const cache = new Map();
    return function(...args) {
        // Use first argument as key
        const key = args[0];
        if (cache.has(key)) {
            console.log('cache hit');
            return cache.get(key);
        }
        console.log('cache miss');
        const val = func.apply(this, arguments);
        cache.set(key, val);
        return val;
    };
}

// Apply the memoization to the search results method
showSearchResults = memoize(showSearchResults);
```

The next optimization would be to handle [debouncing](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086), making sure we only begin searching once the user is done typing. Let’s assume that 200ms is a good enough proxy:

```
// Adding this right after applying memoization
function debounce(fn, time) {
    let timeout;
    return function() {
        const functionCall = () => {
            console.log('calling');
            return fn.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
}

// Apply the debouncing to the search results method
showSearchResults = debounce(showSearchResults, 200);
```

Finally, we’ll also apply some regex to identify and highlight the search result within the query:

```
function showSearchResults(searchQuery) {
    const regex = new RegExp(searchQuery, 'gi');
    searchData(searchQuery).then(results => {
        const html = results.map(movie => {
            const title = movie.title.replace(regex, `<span class="query-highlight">${searchQuery}</span>`);
            return `
  <li>
    <span class="title">${title}</span>
    <span class="rating">${movie.rating}</span>
  </li>
`;
        });

        resultsElement.innerHTML = html.join('');
    });
}
```

</p>
</detail>