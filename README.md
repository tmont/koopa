Koopa
===========

> A browser sniffing library by [Tommy Montgomery](http://tmont.com/)

License
-------
> Licensed under the [WTFPL](http://sam.zoy.org/wtfpl/)

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
  var userAgent = request.headers['User-Agent'];
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
Only the `version` and `userAgent` properties will be set every time; the rest are conditional on the
user agent string. To get the entire version string, use `koopa.version.toString()`.

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

__koopa__ will also set some version specific properties for the browser. For example, if the
user-agent string is `MSIE 6.0 (Windows NT)`, the following will be returned (note the `ie6`
property):

```javascript
{
  ie: true,
  ie6: true,
  windows: true,
  cssPrefix: 'ms',
  userAgent: 'MSIE 6.0 (Windows NT)'
  version: {
    major: '6',
    minor: '0',
    rest: ''
  }
}
```

A `koopa[browserName + majorVersion]` property is set if the major version can be parsed. Here's
another example for the user-agent `Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1`:

```javascript
{
  firefox: true,
  firefox7: true,
  linux: true,
  cssPrefix: 'moz',
  userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1'
  version: {
    major: '7',
    minor: '0',
    rest: '1'
  }
}
```