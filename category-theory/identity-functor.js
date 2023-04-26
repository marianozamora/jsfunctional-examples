// compare:: (x,y) -> Bool
const compare = (x, y) => (x.toString() === y.toString() ? true : false)

/**
 *  Category Theory --> Functor
 *  1. Provides a container to wrap a value.
 *  2. It provides us with a map method for working with data being secured.
 *
 * Functor Laws
 *  1. Identity
 *  2. Composition
 */

export const squareNumbers = (x = 1) => x * x
export const timesTen = (x = 1) => x * 10


export const result = squareNumbers(2)

const Identity = x => ({
	map: f => Identity(f(x)),
	valueOf: () => x,
	inspect: () => `Identity:: ${x}`
})

/**
 *
 * 1. [X] Identity rule
 * 2. [x] Composition rule
 */

const X = Identity(1992)

const id = x => x

const a = X
const b = a.map(id)


console.log(compare(a.map(id), b.map(id)))

const IdentityTwo = Identity(2000)

let resultData = compare(IdentityTwo.map(squareNumbers).map(timesTen), IdentityTwo.map(x => timesTen(squareNumbers(x))))

console.log(resultData)