---
title: "Implementing a Function"
last revision: 19 JUNE 2023
---

## Control Forms of a Function Implementation

A function definition consists of function implementations.
Let's discuss what they look like.

A control form of a function implementation with one parameter is written as follows.

```
// Language: Clean
 
name param = expr
```

A control form of a function implementation with two parameters is written as follows.

```
// Language: Clean

name paramA paramB = expr
```

That is parameters are space-separated.

### Implementation Rules

Implementations of a function must follow certain rules.
Violation of such rules results in a compile-time error.

See [Implementation Rules](function/Implementation%20Rules.md).

### Extending the Expression of a Function Implementation

On its own, a function implementation has one expression associated with it.
The function implementation has ownership over its expression.

By introducing guarded expressions, an implementation can have ownership over multiple guarded expressions, instead of just one expression.

See [Guarded Expressions](function/Guarded%20Expressions.md).

---

## Selecting an Implementation To Be Evaluated

A function definition often contains multiple function implementations.
Only one implementation can be selected.

*Implementations are tried in descending order, and the first implementation, whose parameters match with every argument, is selected.*

Let's describe `safeDivide` as a function which:
- accepts two integers as arguments, 
- returns the result of division, and
- returns zero when the given denominator is 0.

```
// Langauge: Clean

safeDivide 6 2  // 3
safeDivide 2 0  // 0
```

It can be defined using two implementations.

```
// Langauge: Clean

safeDivide m 0 = 0
safeDivide m n = m / n
```

Let's call `safeDivide` with 9 and 6 and investigate.

```
// Language: Clean

safeDivide 9 6  // ?
```

Apply the rule to see which implementation is selected.

The first implementation is tried, and the first parameter matches the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |

The second parameter does not match the second argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `0`       | `6`      | Fail   |

The first implementation is not selected.

Next, the second implementation is tried, and both parameters match both arguments.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `n`       | `6`      | Pass   |

The second implementation is selected.

The result is obtained from the expression of the second implementation, which is `m / n`.
It evaluates to 1.

```
// Language: Clean

safeDivide 9 6  // 1
```

Let's call `safeDivide` with 9 and 0 instead.

```
// Language: Clean

safeDivide 9 0
```

The first implementation is tried, and the first parameter matches the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |

The second parameter matches the second argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `0`       | `0`      | Pass   |

The first implementation is select, and the second implementation is not tried.

The result is obtained from the expression of the first implementation, which is 0.

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

The second implementation is never reached even if `safeDivide`  is called with `0`.

```
// Language: Clean

safeDivide 9 0  // Uh oh
```

More importantly, this rule does not perform equality operation.

### No Valid Candidate for Selection

If none of the implementation is a valid candidate for selection, the function call results in a run-time error.

See [Partial Functions](function/Partial%20Functions.md).