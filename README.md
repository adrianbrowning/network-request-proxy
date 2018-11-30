# network-request-proxy

Designed so that all network requests could be forwarded through Charles Proxy (or similar proxy service).

## Installation

`npm i network-request-proxy`

## Usage
At the very top of your entry file

```js
 require("network-request-proxy")("http://127.0.0.1:8888");
 .......
```


## Quick Examples
### Basic
Rapidly assigning network calls to be run, but they will be limited to 1 request per second.

```js
require("network-request-proxy")("http://127.0.0.1:8888");

const axios = require("axios"),
      qs = require('qs');

axios.get("http://some/url/")
     .then(res => console.log(res.data))
     .catch(e => console.error(e));

axios.get("https://some/url/")
     .then(res => console.log(res.data))
     .catch(e => console.error(e));

axios.post("https://some/url", qs.stringify({ 'bar': 123 }))
     .then(res => console.log(res.data))
     .catch(e => console.error(e));
```

###Debugging
If you want to log the requests that get sent out as well as proxy them you can set the cli enviroment variable `DEBUG=network-request-proxy` and this will log all requests that are sent.


