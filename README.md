# Koopa
A browser sniffing library by [Tommy Montgomery](http://tmont.com/)

## License
Licensed under the [WTFPL](http://sam.zoy.org/wtfpl/)

## Quick and Dirty
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
and you're not using analytics software.

```bash
sudo tail -n 1 /var/log/nginx/access.log | php -r "echo end(fgetcsv(STDIN, 0, ' '));" | koopa
```

## Parsed User-Agent Values
Only the `browser`, `os`, `engine` and `userAgent` properties will be set every time; the rest are conditional on the
user agent string.

```javascript
{
  //browser
  ie: true,
  firefox: true,
  chrome: true,
  safari: true,
  opera: true,
  browser: {
    name: 'string',
    version: {
      major: 'string',
      minor: 'string',
      rest: 'string',
      toString: function() {}
    }
  },

  //os
  linux: true,
  windows: true,
  mac: true,
  macOsX: true
  os: {
    family: 'Linux' | 'Macintosh' | 'Windows',
    name: 'string',
    distro: 'string',
    version: {
      major: 'string',
      minor: 'string',
      rest: 'string',
      toString: function() {}
    }
  },

  //engine
  webkit: true,
  gecko: true,
  trident: true,
  presto: true,
  engine: {
    name: 'webkit' | 'gecko' | 'trident' | 'presto',
    version: {
      major: 'string',
      minor: 'string',
      rest: 'string',
      toString: function() {}
    }
  },

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
  userAgent: 'string' //the original user agent string
}
```

__koopa__ will also set some version specific properties for the browser and os. Here are a
few examples:

#### Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.20) Gecko/20110804 Red Hat/3.6-2.el5 Firefox/3.6.20
```javascript
{
  "userAgent": "Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.20) Gecko/20110804 Red Hat/3.6-2.el5 Firefox/3.6.20",
  "os": {
    "family": "Linux",
    "name": "",
    "distro": "Red Hat",
    "version": {
      "major": "3",
      "minor": "6-2",
      "rest": "el5"
    }
  },
  "browser": {
    "name": "Firefox",
    "version": {
      "major": "3",
      "minor": "6",
      "rest": "20"
    }
  },
  "engine": {
    "name": "gecko",
    "version": {
      "major": "20110804",
      "minor": "",
      "rest": ""
    }
  },
  "linux": true,
  "redHat": true,
  "redHat3": true,
  "redHat3_6-2": true,
  "redHat3_6_2_el5": true,
  "sixtyFourBit": true,
  "firefox": true,
  "firefox3": true,
  "gecko": true,
  "gecko20110804": true
}
```

#### Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10
```javascript
{
  "userAgent": "Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10",
  "os": {
    "family": "",
    "name": "",
    "distro": "",
    "version": {
      "major": "",
      "minor": "",
      "rest": ""
    }
  },
  "browser": {
    "name": "Safari",
    "version": {
      "major": "4",
      "minor": "0",
      "rest": "4"
    }
  },
  "engine": {
    "name": "webkit",
    "version": {
      "major": "531",
      "minor": "21",
      "rest": "10"
    }
  },
  "ipad": true,
  "ios": true,
  "mobile": true,
  "safari": true,
  "safari4": true,
  "webkit": true,
  "webkit531": true,
  "webkit531_21": true,
  "webkit531_21_10": true
}
```

#### Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)
```javascript
{
  "userAgent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)",
  "os": {
    "family": "Windows",
    "name": "Windows 7",
    "distro": "",
    "version": {
      "major": "6",
      "minor": "1",
      "rest": ""
    }
  },
  "browser": {
    "name": "MSIE",
    "version": {
      "major": "9",
      "minor": "0",
      "rest": ""
    }
  },
  "engine": {
    "name": "trident",
    "version": {
      "major": "5",
      "minor": "0",
      "rest": ""
    }
  },
  "windows": true,
  "windows7": true,
  "sixtyFourBit": true,
  "ie": true,
  "ie9": true,
  "trident": true,
  "trident5": true,
  "trident5_0": true
}
```

#### Opera/9.80 (X11; Linux i686; U; hu) Presto/2.9.168 Version/11.50
```javascript
{
  "userAgent": "Opera/9.80 (X11; Linux i686; U; hu) Presto/2.9.168 Version/11.50",
  "os": {
    "family": "Linux",
    "name": "",
    "distro": "",
    "version": {
      "major": "",
      "minor": "",
      "rest": ""
    }
  },
  "browser": {
    "name": "Opera",
    "version": {
      "major": "11",
      "minor": "50",
      "rest": ""
    }
  },
  "engine": {
    "name": "presto",
    "version": {
      "major": "2",
      "minor": "9",
      "rest": "168"
    }
  },
  "linux": true,
  "opera": true,
  "opera11": true,
  "presto": true,
  "presto2": true,
  "presto2_9": true,
  "presto2_9_168": true
}
```

## Development
```shell
git clone git@github.com:tmont/koopa.git
cd koopa
npm link .
npm test
```

To run dev server: `npm start` and navigate to `tests/test.html`.
