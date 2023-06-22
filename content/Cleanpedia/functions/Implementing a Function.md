---
dg-publish: true
---

# Implementing a Function

To implement  a function, we need to know what a function implementation looks like first.

A control form of a function implementation is written as follows.

```markdown
identifier paramSeq = body
```

More precisely, a function implementation consists of three components.

| Component    | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| `identifier` | A function name.                                                          |
| `paramSeq`   | A fixed-length parameter sequence needed for a function to evaluate. |
| `body`       | An expression to be evaluated when a function is called.                 |

### Extending Parameters 

A parameter of a function can be a simple variable name, but it can be replaced by a literal as well.
When a literal is used as a parameter, it invokes a special behavior, which is later discussed in this page.

If a parameter represents a [[Built-in Data Types/Structured Data Types|structured data type]], it can be replaced by a [[Functions/Destructuring Patterns|destructuring pattern]].

### Extending Expression

On its own, a function implementation has ownership over one body.

By introducing [[Functions/Guarded Expressions|guarded expressions]], a function implementation can have ownership over multiple guarded expressions, instead of one ordinary expression.

---

## Function Implementation Rules

Function implementations must follow [[Functions/Function Implementation Rules|specific rules]].
Violation of these rules results in a compile-time error.

---

## Selecting a Function Implementation To Be Evaluated

A function definition often contains multiple function implementations.
This is important because from many function implementations, only one can be selected.

To determine which function implementation should be selected for evaluation, a procedure is written as follows.

*Implementations are tried in descending order, and the first implementation, whose parameters match with every argument, is selected.*

To demonstrate, a function called `safeDivide` is described as follows:
- accepts two integers as arguments, 
- returns the result of division, and
- returns zero when the given denominator is 0.

```Clean
// Langauge: Clean

safeDivide 6 2  // 3
safeDivide 2 0  // 0
```

It can be defined using two function implementations.

```Clean
// Langauge: Clean

safeDivide m 0 = 0
safeDivide m n = m / n
```

Let's call `safeDivide` with 9 and 6 to investigate.

```Clean
// Langauge: Clean

safeDivide 9 6  // ?
```

Apply the procedure to determine which function implementation is selected.

The first function implementation is tried, and the first parameter matches the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |

The second parameter does not match the second argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `0`       | `6`      | Fail   |

The first function implementation is not selected.

Next, the second function implementation is tried, and both parameters match both arguments.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `n`       | `6`      | Pass   |

The second function implementation is selected.

The result is obtained from the expression of the second function implementation, which is `m / n`.
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

The first function implementation is tried, and the first parameter matches the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |

The second parameter matches the second argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `m`       | `9`      | Pass   |
| 2      | `0`       | `0`      | Pass   |

The first function implementation is select.

The result is obtained from the expression of the first function implementation, which is 0.

```
// Language: Clean

safeDivide 9 0  // 0
```

> [!important]
> This behavior does not perform equality checks.

### Importance of Implementation Order

If implementation order is changed, `safeDivide` would have unintended behaviors.
To demonstrate, let's swap the implementation order of `safeDivide`.

```Clean
// Language: Clean

safeDivide m n = m / n
safeDivide m 0 = 0
```

The second function implementation is never reached even if `safeDivide`  is called with 0.

```Clean
// Language: Clean

safeDivide 9 0  // Uh oh
```

### No Valid Candidate for Selection

If every function implementation is unable to be selected, the function definition is [[Functions/Partial Functions|partial]] and the function call results in a run-time error.

---