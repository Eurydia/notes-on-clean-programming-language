---
title: "Implementation Rules"
last revision: 18 JUNE 2023
---

When defining a function, implementations must obey the following rules to be valid.
Otherwise, the function definition results in a compile-time error.

To better demonstrate, let's describe a function called `safeDivide`.

It accepts two integers as arguments, and returns the result of division.
When the given denominator is zero, it returns zero.

```
// Langauge: Clean

safeDivide 4 2  // 2
safeDivide 2 0  // 0
```

To achieve the described behavior, `safeDivide` can be defined with two implementations.

```
// Langauge: Clean

safeDivide m 0 = 0
safeDivide m n = m / n
```

## Implementation Rule of Selection

> Implementations of a function are tried from top to bottom.
> An implementation is selected if arguments match with parameters.

This rule helps determine which implementation of a function should be selected for evaluation.

To demonstrate, let's call `safeDivide` with nine and six.

```
// Language: Clean

safeDivide 9 6
```

To see which implementation is selected, apply the rule.

The first implementation is tried.
The first parameter matches the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |

The second parameter does not match the second argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `0`       | `6`      | Fail   |

The first implementation is not selected.

Next, the second implementation is tried.
Both parameters are wildcards, and match both arguments.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `n`       | `6`      | Pass   |

Thus, the second implementation is selected.

The result of this function call is obtained from the expression associated with the second implementation, which is `1`.

```
// Language: Clean

safeDivide 9 6  // 1
```

Alternatively, let's call `safeDivide` with nine and zero instead.

```
// Language: Clean

safeDivide 9 0
```

The first implementation is tried.
The first parameter matches the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |

The second parameter matches the second argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `0`       | `0`      | Pass   |

The first implementation is select, and the second implementation is never tried.

The result of the function call is obtained from the expression associated with the first implementation, which is `0`.

```
// Language: Clean

safeDivide 9 0  // 0
```

Notice that if implementation order is changed, `safeDivide` would have unintended behaviors.

To demonstrate, the implementation order of `safeDivide` is changed.

```
// Language: Clean

safeDivide m n = m / n
safeDivide m 0 = 0
```

It is clear that the second implementation is never reached.
Even if `safeDivide`  is called with `0`.

```
// Language: Clean

safeDivide 9 0  // Uh oh
```

More importantly, this rule is not performing equality checks.

### Partially Implemented Function

When no implementation is able to be selected, the function call results in a run-time error.

Such a function definition is said to be partial.

See [Partial Functions](function/Partial%20Functions.md).

## Implementation Rule of Grouping

> Implementations of a function must be together.

A function definition is invalid if its implementations are separated.

```
// Language: Clean

badSafeDivide m 0 = 0
6 + 2
badSafeDivide m n = m / n
```

The expression (`6 + 2`) separates implementations of `badSafeDivide`, and invalidates the definition.

## Implementation Rule of Signature

> Implementations of a function must share a single signature.

A function definition is invalid if its implementations do not share a signature.

```
// Language: Clean

badSafeDivide m 0 = False
badSafeDivide m n = m / n
```

The first implementation returns a Boolean value, but the second returns an integer.

The implementations of `badSafeDivide` have conflicting signatures, and  the definition is invalid.