Guarded expressions have rules which they must follow, similar to function implementation rules.

#### Guarded Expression Signature Rule

> Expressions of guarded expressions must have a single type.

To demonstrate, a function called `signum` is described as follows:
- it accepts one integer argument, and
- it returns the sign of that integer.

It can be defined with two implementation and two guarded expressions.

```
// Language: Clean

signum 0 =  0
signum n
| n > 0  =  1
| n < 0  = -1
```

The definition above is valid since every expression returns an integer.

On the other hand, an invalid definition may look as follows.

```
// Language: Clean

badSignum 0 = 0
badSignum n
| n > 0     =  True
| n < 0     = -1
```

##### Guarded Expression Selection Rule

>  Guarded expressions are tried from top to bottom, but only after their implementation is chosen.

To demonstrate, `signum` is called with zero.

```
// Language: Clean

signum 0
```

The first implementation is tried, the first parameter matches with the argument.

| Implementation # | Parameter | Argument | Result       |
| ---------------- | --------- | -------- | ------------ |
| 1                | `0`       | `0`      | Not matching |

The first implementation is chosen.

In this call, none of the guards was tried because the implementation that they belong to is not reached.

Instead, to demonstrate, `signum` is called with non-zero integer.

```
// Language: Clean

signum -9
```

The first implementation fails to match.

| Implementation # | Parameter | Argument | Result       |
| ---------------- | --------- | -------- | ------------ |
| 1                | `0`       | `-9`     | Not matching |

But the second implementation will match.

| Implementation # | Parameter | Argument | Result       |
| ---------------- | --------- | -------- | ------------ |
| 1                | `0`       | `-9`     | Not matching |
| 2                | `n`       | `-9`     | Matching     |

Each guard of the second implementation is tried in order.
The first guard to yield true will be chosen.

The first guard (`n > 0`) is tried.
It evaluates to false, and its expression is not selected.

| Guard # | Guard   | Result |
| ------- | ------- | ------ |
| 1       | `n > 0` | False  |

The second guard is tried (`n < 0`).

| Guard # | Guard   | Result |
| ------- | ------- | ------ |
| 1       | `n > 0` | False  |
| 2       | `n < 0` | True   |

It evaluates to true, and its expression is chosen.

Similarly, the same happens for nested guarded expressions.

```
// Language: Clean

functionA parameter = expression
functionA parameter
| guardA
    | guardAA       = expressionAA
```

In `functionA`, for `expresssionAA` to be selected, the second implementation must be selected, as well as, `guardA` and `guardAA` must evaluate to true.

In addition, `otherwise` keyword may used in place of a guard.
It always evaluates to true.

```
// Language: Clean

signumAlt 0 =  0
signumAlt n
| n > 0     =  1
| otherwise = -1
```

The order of the guarded bodieexpressions also matters.

```
// Language: Clean

badSignumAlt 0 =  0
badSignumAlt n
| otherwise    = -1
| n > 0        =  1
```