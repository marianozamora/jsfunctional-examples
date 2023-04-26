import test from 'riteway';

const Product = value => ({
    value,
    concat: y => Product(value * y.value)
});

Product.empty = () => Product(1);

const Sum = value => ({
    value,
    concat: y => Sum(value + y.value)
});

Sum.empty = () => Sum(0);

test("Product(10) Monoid", async assert => {
    const inputValue = 20;
    const result = Product(inputValue);
    assert({
        given: "right identity",
        should: "return Monoid  with its value)",
        actual: result.concat(Product.empty()).value === inputValue,
        expected: true
    });

    assert({
        given: "left identity",
        should: "return Monoid with its value",
        actual: Product.empty().concat(result).value === inputValue,
        expected: true
    });

});

test("Sum(10) Monoid", async assert => {
    const inputValue = 20;
    const result = Sum(inputValue);
    assert({
        given: "right identity",
        should: "return Monoid  with its value)",
        actual: result.concat(Sum.empty()).value === inputValue,
        expected: true
    });

    assert({
        given: "left identity",
        should: "return Monoid with its value",
        actual: Sum.empty().concat(result).value === inputValue,
        expected: true
    });
});