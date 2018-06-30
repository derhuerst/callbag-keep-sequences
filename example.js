'use strict'

const pipe = require('callbag-pipe')
const fromIter = require('callbag-from-iter')
const forEach = require('callbag-for-each')

const keepSequences = require('.')

pipe(
	fromIter([1, 2, 2, 2, 2, 3, 3, 1, 1, 1, 3]),
	keepSequences(3),
	forEach(console.log)
)
