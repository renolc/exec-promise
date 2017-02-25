# exec-promise

Small promise wrapper around child_process.exec

### Installation

```bash
npm i exec-promise -S
```

### Usage

```js
var exec = require('exec-promise')

exec('sleep 5')
  .then(function() {
    console.log('done!')
  })
```