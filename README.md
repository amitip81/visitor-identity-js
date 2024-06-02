<p align="center">
  <a href="https://visitor-identity-js.vercel.app">
    <picture>
      <img src="resources/visitor-identity-js.png" alt="Visitor Identity logo" width="312px" />
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/visitor-identity-js"><img src="https://img.shields.io/badge/npm-v1.0.1-blue" alt="Current NPM version"></a>
</p>


Visitor Identity is a source-available, client-side library designed to obtain browser fingerprints. The generated unique id remains consistent even in incognito/private browsing modes.


## Demo

Visit https://visitor-identity-js.vercel.app to know your visitor id.

Try visiting the same page in incognito mode and notice how the visitor id remains the **same**!


## Getting Started

You can install the module via `npm`:

```sh
npm i visitor-identity-js
```

```js
import React from 'react';
import VisitorId from 'visitor-identity-js';

...

//In React class component
componentDidMount() {
  var unique_id = VisitorId();
  console.log(unique_id);
}

```

## Supported browsers

The library supports all popular browsers.
See more details and learn how to run the library in old browsers in the [browser support guide](docs/browser_support.md).


