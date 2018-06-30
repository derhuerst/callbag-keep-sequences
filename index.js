'use strict'

const START = 0
const DATA = 1
const STOP = 2

const strictEqual = (a, b) => a === b

const keepSequences = (n, cmp = strictEqual) => {
	if ('number' !== typeof n) throw new Error('n must be an integer.')
	if (Math.floor(n) !== n) throw new Error('n must be an integer.')
	if (n < 2) throw new Error('n must be higher than 2.')
	if ('function' !== typeof cmp) throw new Error('cmp must be a function.')
	if (cmp(1, 1) !== true) throw new Error('cmp must return booleans.')

	const listenable = (source) => (type, sink) => {
		if (type !== START) return;

		let queue = [], last = NaN, streak = 0
		let talkback

		source(START, (type, payload) => {
			if (type === START) talkback = payload
			if (type !== DATA) {
				sink(type, payload)
				return
			}

			if (cmp(last, payload)) {
				streak++
				if (streak < n) {
					queue.push(payload)
				} else if (streak === n) {
					for (let i = 0; i < queue.length; i++) sink(DATA, queue[i])
					sink(DATA, payload)
				} else {
					sink(DATA, payload)
				}
			} else {
				queue = [payload]
				streak = 1
			}
			last = payload
			talkback(DATA) // request more
		})
	}
	return listenable
}

module.exports = keepSequences
