---
title: "Partial Functions"
last revision: 18 JUNE 2023
---

A partially defined function is a function which results in a run-time error when called with values outside of its domain.

Let's imagine a function called `isOne`.

It simply checks whether a number is one or not.

## Partial Function by Implementation

It can be defined with two implementations.

```
// Language: Clean

isOne (-1) = True
isOne   1  = True
```

Let's try calling it with one and follow the [Implementation Rule of Selection](function/Implementation%20Rules.md#Implementation%20Rule%20of%20Selection) to make sure that works.

```
// Language: Clean

isOne 1
```

The first implementation is tried.
The first parameter does not match the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `-1`      | `1`      | Fail   |

The first implementation is not selection.

The second implementation is tried.
The first parameter matches the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `1`       | `1`      | Pass   |

The second implementation is selection.

The result of the function call is obtained from the expression associated with the second implementation, which is `True`.

```
// Language: Clean

isOne 1  // True
```

We will make an assumption that it works with  `-1` as well.

```
isOne -1  // True
```

Let's call `isOne` with zero.

```
isOne 0
```

The first implementation is tried.
The first parameter does not match the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `-1`      | `0`      | Fail   |

The first implementation is not selected.

The second implementation is tried.
The first parameter does not match the first argument.

| Pair # | Parameter | Argument | Result |
| ------ | --------- | -------- | ------ |
| 1      | `1`       | `0`      | Fail   |

The second implementation is not selected either.

At this point, every implementation of `isOne` is tried, and no implementation is selection.

The function call results in a run-time error.

```
// Language: Clean

isOne 0  // Uh oh
```

We can conclude that `isOne` is a partial function, because it results in a run-time error when called with values outside of its domain.

---

## Partial Function by Guarded Expression

Alternatively, `isOne` can be define with one implementation which has two guarded expressions.

```
isOne n
| n == (-1) = True
| n ==   1  = True
```

Let's try calling it with negative one and follow the [Guarded Expression Signature Rule](function/Guarded%20Expression%20Rules.md#Guarded%20Expression%20Signature%20Rule) to make sure that works.

```
// Language: Clean

isOne -1
```

The first implementation is tried.
The first parameter does not match the first argument.

| Guard # | Guard       | Result |
| ------- | ----------- | ------ |
| 1       | `n == (-1)` | True   |

The first guard is selected.

The result of the function call is obtained from the expression associated with the first guard, which is `True`.

```
// Language: Clean

isOne (-1)  // True
```

The same problem arises when called with zero, because this definition of `isOne` is still partial.

---

## Resolving Partial Functions

There are many ways to completely define a function.

A good way is to change the method in which the function is define.

```
// Language: Clean

isOne n = n == (-1) || n == 1
```

This way, the semantic meaning of the function is preserved.

Adding addition implementations to cover the possible domain of input is also a good way to complete a function.

```
// Language: Clean

isOne (-1) = True
isOne   1  = True
isOne   n  = False
```

This definition ensures that the `isOne` will never result in a run-time error by implementing an addition "catch all" implementation.

Finally, A built-in function called `abort` helps complete a function by terminating the program early.

```
// Language: Clean

isOne (-1) = True
isOne   1  = True
isOne   n  = abort "isOne called with values outside of domain."
```

See [StdMisc](appendix-a/StdMisc.md).