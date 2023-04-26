const Sum = value => ({
    value,
    concat: y => Sum(value + y.value)
});

const Product = value => ({
    value,
    concat: y => Product(value * y.value)
})

const Max = value => ({
    value,
    concat: y => Max(Math.max(value, y.value))
})

const Min = value => ({
    value,
    concat: y => Min(Math.min(value, y.value))
})

const maxTest = Max(10).concat(Max(20)).concat(Max(30));
const minTest = Min(10).concat(Min(20)).concat(Min(30));

console.log(maxTest);
console.log(minTest);

const Any = value => ({
    value,
    concat: y => Any(value || y.value)
})

const All = value => ({
    value,
    concat: y => All(value && y.value)
})

const allTest = All(false).concat(All(false)).concat(All(true));
const anyTest = Any(false).concat(Any(false)).concat(Any(true));

console.log(allTest);
console.log(anyTest);
