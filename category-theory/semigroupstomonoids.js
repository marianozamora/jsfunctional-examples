/** Upgrading Semigroups */

const Any = value => ({
    value,
    concat: y => Any(value || y.value)
});

Any.empty = () => Any(false);

const All = value => ({
    value,
    concat: y => All(value && y.value)
});

All.empty = () => All(true);

const Max = value => ({
    value,
    concat: y => Max(Math.max(value, y.value))
});

Max.empty = () => Max(-Infinity);

const Min = value => ({
    value,
    concat: y => Min(Math.min(value, y.value))
});

Min.empty = () => Min(Infinity);