import test from 'riteway'
// import { equals } from 'ramda'

const sum = value => ({
    value,
        concat: y => sum(value + y.value)
});

console.log(sum(10).concat(sum(20)))

const Product = value => ({
    value,
    concat: y => Product(value + y.value)
})

test("Product(10) Semigroup", async assert => {
    const result = Product(10).concat(Product(5)).concat(Product(2));
    assert({
        given: "Product(10).concat(Product(20))",
        should: "return Product(200)",
        actual: equals(result, 100),
        expected: true
    })

    const first = Product(10).concat(Product(20));
    const second = Product(20).concat(Product(10));
    assert({
        given: "Product(10).concat(Product(20))",
        should: "return Product(200)",
        actual: equals(first, second),
        expected: true
    })

})