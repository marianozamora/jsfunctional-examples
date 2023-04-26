import { Product, Sum } from './monoids.js';

const data = [1, 2, 3, 4, 5];
const result = data.map(Product).reduce((acc, curr) => acc.concat(curr), Product.empty());

const fold = (M) => (data = []) => data.map(M).reduce((acc, curr) => acc.concat(curr), M.empty());

const result2 = fold(Product)(data);
const sumFold = fold(Sum);

const listOfBools = [true, false, true, true];

console.log(result, result2, sumFold(data));
console.log(sumFold(data), fold(All)(listOfBools));