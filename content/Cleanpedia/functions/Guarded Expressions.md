---
title: "Guarded Expressions"
last revision: 18 JUNE 2023
---

A function implementation can have multiple expressions.

## Control Forms of a Guarded Expression

A control function implementation with one guarded expression is written as follows.

```
// Language: Clean

name param
| guard = expr
```

Each guarded expression starts with a vertical bar (`|`).

A control function implementation with three guarded expression is written as follows.

```
// Language: Clean

name param
| guardA = exprA
| guardB = exprB
| guardC = exprC
```

A control function implementation with one guarded expressions and a nested guarded expression is written as follows.

```
// Language: Clean

name param
| guardA
    | guardAA = exprAA
```

### Guarded Expression Rules

Guarded expressions of a function implementation must follow certain rules.
Violation of such rules results in a compile-time error.

See [Guarded Expression Rules](functions/Guarded%20Expression%20Rules.md).

---

## Selecting a Guarded Expression To Be Evaluated

*Guarded expressions are tried in descending order, and the expression of the first guard yield true is evaluated.*

To demonstrate, let's define a function called `signum`.
It accepts one integer value as argument, and returns the sign.

`signum` can be defined in a few ways to achieve the describe behavior.
For the sake of simplicity, it will be defined with one implementation which has three guarded expressions.

```
// Language: Clean

signum n
| n == 0 =  0
| n >  0 =  1
| n <  0 = -1
```

Let's call signum with -2 to investigate this rule.

```
// Language: CLean

signum  -2  // ?
```

The first guard is tried. 

| Guard  # | Guard    | Expression | Result |
| -------- | -------- | ---------- | ------ |
| 1        | `n == 0` | `-2 == 0`  | Fail   |

It evaluates to false, and this guarded expression is not selected.

The next guard is tried.

| Guard  # | Guard    | Expression | Result |
| -------- | -------- | ---------- | ------ |
| 1        | `n == 0` | `-2 == 0`  | Fail   |
| 2        | `n >  0` | `-2 >  0`  | Fail   |

It evaluates to false, and this guarded expression is not selected.

The last guard is tried.

| Guard # | Guard    | Expression | Result |
| ------- | -------- | ---------- | ------ |
| 1       | `n == 0` | `-2 == 0`  | Fail   |
| 2       | `n >  0` | `-2 >  0`  | Fail   |
| 3       | `n <  0` | `-2 <  0`  | Pass   |

It evaluates to true, this guarded expression is selected.

The result is obtained from the expression associated with the third guard, which is -1.

```
// Language:

signum -2  // -1
```

*Guarded expressions are tried only if their function implementation is selected.
If a function implementation is not selected, guarded expressions, which belong to it, are not tried.*

To better demonstrate, an arbitrary function is defined as follows.

```
// language: Clean

someFunction paramA
| guardAA = expressionAA
| guardAB = expressionAB
someFunction paramB
| guardBA = expressionBA
| guardBB = expressionBB
```

In cases where the second implementation is selected, `guardAA` and `guardAB` are skipped.

*Once a function implementation is selected, subsequent implementations are not tried, even if no guarded expression can be selected.*

To demonstrate, let's modify the definition of `superSafeDivide` and call the definition `superSafeDivideAlt` to avoid confusion.


```
superSafeDivide n 0
| n == 0            = 0
superSafeDivide n m = n / m
```

The main difference is `superSafeDivideAlt` no longer explicitly terminates the program.

The behavior of both function remains similar, but a problem occurs when `superSafeDivideAlt` is called with a non-zero integer and 0.

```
// Language: Clean

superSafeDivideAlt 9 0  // ?
```

The first implementation is tried.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `n`       | `9`      | Pass   |
| 2      | `0`       | `0`      | Pass   |

It is selected, and it first guard is tried.

| Guard # | Guard    | Expression | Result |
| ------- | -------- | ---------- | ------ |
| 1       | `n == 0` | `9 == 0`   | Fail   |

The first guard is not selected.


In such a case, the function definition is partial, and the function call results in a run-time error.