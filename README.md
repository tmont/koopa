Koopa 1.0.0
===========

A browser sniffing library by [Tommy Montgomery](http://tmont.com/)

License
-------
Licensed under [WTFPL](http://sam.zoy.org/wtfpl/)

Quick and Dirty
---------------

### On the browser
Include koopa somewhere:

```html
<script type="text/javascript" src="koopa.js"></script>
```

(ab)Use it:
```javascript
if (koopa.ie && koopa.version.major < 9) {
  alert("You suck!");
} else if (koopa.chrome && koopa.mac) {
  alert("What a hipster...");
}
```

Or if you're using jQuery, it'll automatically extend the global `jQuery` object:
```javascript
if ($.koopa.ie && $.koopa.version.major < 9) {
  alert("You suck!");
} else if ($.koopa.chrome && $.koopa.mac) {
  alert("What a hipster...");
}
```

### Node
Install it:

```bash
npm install koopa
```

(ab)Use it:
```javascript
var koopa = require('koopa');

//presumably some kind of HTTP request handler
function handleRequest(request) {
  var userAgent = request.headers\['User-Agent'\];
  var info = koopa(userAgent);
  if (info.ie && info.version.major < 9) {
    console.log('You suck!');
  } else if (info.chrome && info.mac) {
    console.log('What a hipster...');
  }
}
```

Parsed User-Agent Values
------------------------
Only the `version` property will be set every time; the rest are conditional on the
user agent string.

```javascript
{
  //browser
  ie: true,
  firefox: true,
  chrome: true,
  safari: true,
  opera: true,

  //os
  linux: true,
  windows: true,
  mac: true,

  //mobile os
  android: true,
  ios: true,
  webos: true,
  windowsPhone: true,

  //mobile browser
  ipad: true,
  ipod: true,
  iphone: true,
  blackberry: true,
  iemobile: true,
  operaMini: true,

  //miscellaneous
  mobile: true,
  cssPrefix: 'moz' | 'ms' | 'webkit' | 'o',
  userAgent: 'string', //the parsed user agent
  version: {
    major: 'string',
    minor: 'string',
    rest: 'string'
  }
}
```

To get the entire version string, use `version.toString()`.