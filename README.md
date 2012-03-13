Koopa 1.1.0
===========
A browser sniffing library by [Tommy Montgomery](http://tmont.com/)

License
-------
Licensed under the [WTFPL](http://sam.zoy.org/wtfpl/)

Quick and Dirty
---------------
__koopa__ is a pretty little thing that gives you information about a user agent.
It can be used on IE6+, Firefox, Safari, Chrome, Opera and server-side with Node.
Here is a bullet list of information it can provide:

* Browser names and versions (IE, Chrome, Firefox, Safari, Opera)
* OS names and versions
    * Windows, Mac and Linux
    * Code names, e.g. Windows XP, Snow Leopard, Jaunty, etc.
* Mobile browsers and OS (IEMobile, Opera Mini, Safari, iThings, Blackberry, Android, Windows Phone)
* Architecture information (64-bit)

The `koopa` function takes one argument, a user-agent string. If no arguments are
given and the `navigator` object is available, it will parse the client's user-agent.

### On the browser
Include koopa somewhere:

```html
<script type="text/javascript" src="koopa.js"></script>
```

(ab)Use it:

```javascript
var info = koopa();
if (info.ie6) {
	alert('wtfmate?');
} else if (info.ie && info.version.major < 9) {
  alert('You suck!');
} else if (info.chrome && info.macOsX) {
  alert('What a hipster...');
}
```

### Node
Install it:

```bash
npm install koopa -g
```

(ab)Use it:

```javascript
var koopa = require('koopa');

//presumably some kind of HTTP request handler
function handleRequest(request) {
  var userAgent = request.headers['User-Agent'];
  var info = koopa(userAgent);
  if (info.ie6) {
  	console.log('wtfmate?');
  } else if (info.ie && info.version.major < 9) {
    console.log('You suck!');
  } else if (info.chrome && info.macOsX) {
    console.log('What a hipster...');
  }
}
```

Or use it to inspect your server logs on the command line. You know, in case it's 1994
and you're not using Google Analytics.

```bash
sudo tail -n 1 /var/log/nginx/access.log | php -r "echo end(fgetcsv(STDIN, 0, ' '));" | koopa
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

__koopa__ will also set some version specific properties for the browser and os. Here are a
few examples:

#### Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1
```javascript
{
	firefox: true,
	firefox7: true,
	linux: true,
	userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
	version: { 
		major: '7',
		minor: '0',
		rest: '1'
	}
}
```

#### Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.20) Gecko/20110804 Red Hat/3.6-2.el5 Firefox/3.6.20
```javascript
{
	firefox: true,
	firefox3: true,
	linux: true,
	redHat: true,
	redHat3: true,
	redHat3_6_2: true,
	redHat3_6_2_el5: true,
	sixtyFourBit: true,
	userAgent: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.20) Gecko/20110804 Red Hat/3.6-2.el5 Firefox/3.6.20',
	version: { 
		major: '3',
		minor: '6',
		rest: '20'
	}
}
```

#### Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2b5) Gecko/20091204 Firefox/3.6b5
```javascript
{
	firefox: true,
	firefox3: true,
	windows: true,
	windowsXp: true,
	userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.2b5) Gecko/20091204 Firefox/3.6b5',
	version: {
		major: '3',
		minor: '6b5',
		rest: ''
	}
}
```

#### Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0b8) Gecko/20100101 Firefox/4.0b8
```javascript
{
	firefox: true,
	firefox4: true,
	macOsX: true,
	macOsX10: true,
	macOsX10_6: true,
	macintosh: true,
	sixtyFourBit: true,
	snowLeopard: true,
	userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0b8) Gecko/20100101 Firefox/4.0b8',
	version: {
		major: '4',
		minor: '0b8',
		rest: ''
	}
}
```

#### Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10
```javascript
{
	ios: true,
	ipad: true,
	mobile: true,
	safari: true,
	safari4: true,
	userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
	version: {
		major: '4',
		minor: '0',
		rest: '4'
	}
}
```

#### Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.04 Chromium/15.0.871.0 Chrome/15.0.871.0 Safari/535.2
```javascript
{
	chrome: true,
	chrome15: true,
	linux: true,
	sixtyFourBit: true,
	ubuntu: true,
	userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.04 Chromium/15.0.871.0 Chrome/15.0.871.0 Safari/535.2',
	version: {
		major: '15',
		minor: '0',
		rest: '871.0'
	}
}
```

#### Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)
```javascript
{
	ie: true,
	ie9: true,
	sixtyFourBit: true,
	userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
	version: {
		major: '9',
		minor: '0',
		rest: ''
	},
	windows: true,
	windows7: true
}
```

#### Opera/9.80 (X11; Linux i686; U; hu) Presto/2.9.168 Version/11.50
```javascript
{
	linux: true,
	opera: true,
	opera11: true,
	userAgent: 'Opera/9.80 (X11; Linux i686; U; hu) Presto/2.9.168 Version/11.50',
	version: {
		major: '11',
		minor: '50',
		rest: ''
	}
}
```

#### Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1
```javascript
{
	blackberry: true,
	mobile: true,
	safari: true,
	safari6: true,
	userAgent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1',
	version: {
		major: '6',
		minor: '0',
		rest: '0.337'
	}
}
```
