<p align="center">
  <a href="https://visitor-identity-js.vercel.app">
    <picture>
      <img src="resources/visitor-identity-js.png" alt="Visitor Identity logo" width="312px" />
    </picture>
  </a>
</p>

Visitor Identity is a source-available, client-side library designed to obtain browser fingerprints. The generated unique id remains consistent even in incognito/private browsing modes.


## Demo

Visit https://visitor-identity-js.vercel.app to know your visitor id.

Try visiting the same page in incognito mode and notice how the visitor id remains the **same**!


## Getting Started

You can install the module via `npm`:

```sh
npm i react-countdown
```

```js
import React from 'react';
import VisitorId from 'visitor-identity-js';
...
componentDidMount() {
  var unique_visitor_id = VisitorId()
  console.log(unique_visitor_id);
}
```
