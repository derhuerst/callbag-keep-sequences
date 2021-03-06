'use strict'

const pipe = require('callbag-pipe')
const fromIter = require('callbag-from-iter')
const forEach = require('callbag-for-each')
const {deepStrictEqual} = require('assert')

const keepSequences = require('.')

const res = []
pipe(
	fromIter([1, 2, 2, 2, 2, 3, 3, 1, 1, 1, 3]),
	keepSequences(3),
	forEach(val => res.push(val))
)

deepStrictEqual(Array.from(res), [
	2, 2, 2, 2,
	1, 1, 1
])
