# simple-exec-promise [![npm version](https://badge.fury.io/js/simple-exec-promise.svg)](https://badge.fury.io/js/simple-exec-promise)

Small promise wrapper around child_process.exec

### Installation

```bash
npm i simple-exec-promise -S
```

### Usage

```js
var exec = require('simple-exec-promise')

exec('sleep 5')
  .then(function() {
    console.log('done!')
  })
```
