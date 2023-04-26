const compare = (x, y) => (x.toString() === y.toString() ? true : false)
/**
 * Maybe functor
 */

const squareNumbers = (x = 1) => x * x
const timesTen = (x = 1) => x * 10

const Identity = x => ({
	map: f => Identity(f(x)),
	valueOf: () => x,
	inspect: () => `Identity:: ${x}`
})

const isNothing = x => x === null || x === undefined

const Maybe = x => ({
	valueOf: () => x,
	map: f => (isNothing(x) ? Maybe(null) : Maybe(f(x))),
	inspect: () => `Maybe:: ${x}`
})

/** Functor law test
* 1. [X] Identity rule
 * 2. [x] Composition rule
 */

compare(
	Maybe(10)
		.map(timesTen)
		.map(squareNumbers),
	Maybe(10).map(x => squareNumbers(timesTen(x)))
)

const id = x => x
const data = Maybe(10).map(x => id(x * 2))

compare(
	Maybe(10).map(id).toString(),
	Maybe(10).toString()
)