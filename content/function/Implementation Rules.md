---
title: "Implementation Rules"
last revision: 19 JUNE 2023
---

When defining a function, its implementations must follow a set of rules.
Violation of these rules results in a compile-time error.

Let's discuss what they are.

## Implementation Rule of Naming

*Implementation of a function must share a single name.*

Implementations of a function should have the same name.
More importantly, the name of a function must be unique from other names in the same scope.

---

## Implementation Rule of Grouping

*Implementations of a function must be together.*

Non-comment entities cannot be placed between implementations of a function.

```
// Language: Clean

badFunction paramA = ...
6 + 2
badFunction paramB = ...
```

The function definition is invalid because implementations of `badFunction` are separated by an expression (`6 + 2`).

---

## Implementation Rule of Signature

> Implementations of a function must share a single signature.

```
// Language: Clean

badFunction m 0 = False
badFunction m n = m / n
```

The first implementation returns a Boolean value, but the second returns an integer.

The function definition is invalid because implementations of `badFunction` have conflicting signatures.