# callbag-keep-sequences

**A [callbag](https://github.com/callbag/callbag#callbag-) operator that passes through only sequences with minimum length.**

```js
// minimum streak length = 3
1, 2, 2, 2, 2, 3, 3, 1, 1, 1, 3 // input
   2, 2, 2, 2,       1, 1, 1    // output
```

[![npm version](https://img.shields.io/npm/v/callbag-keep-sequences.svg)](https://www.npmjs.com/package/callbag-keep-sequences)
[![build status](https://api.travis-ci.org/derhuerst/callbag-keep-sequences.svg?branch=master)](https://travis-ci.org/derhuerst/callbag-keep-sequences)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/callbag-keep-sequences.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst) [![Greenkeeper badge](https://badges.greenkeeper.io/derhuerst/callbag-keep-sequences.svg)](https://greenkeeper.io/)


## Installation

```shell
npm install callbag-keep-sequences
```


## Usage

```js
const pipe = require('callbag-pipe')
const fromIter = require('callbag-from-iter')
const keepSequences = require('callbag-keep-sequences')
const forEach = require('callbag-for-each')

pipe(
	fromIter([1, 2, 2, 2, 2, 3, 3, 1, 1, 1, 3]),
	keepSequences(2), // sequences with >= 2 items
	forEach(console.log)
)
// 2 2 2 2 1 1 1
```


## API

```js
keepSequences(n, compare = (a, b) => a === b)
```


## Related

- [callbag spec](https://github.com/callbag/callbag#callbag-) – 👜 A standard for JS callbacks that enables lightweight observables and iterables
- [`callbag-distinct-until-changed`](https://github.com/Andarist/callbag-distinct-until-changed) – Drops consecutive duplicate values. Works on either pullable or listenable sources.


## Contributing

If you have a question or have difficulties using `callbag-keep-sequences`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/callbag-keep-sequences/issues).
