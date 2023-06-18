---
title: "Guarded Expressions"
last revision: 18 JUNE 2023
---

Guarded expressions allow a function implementation to have multiple expressions.

## Control Form of a Guarded Expression

A control implementation with one guarded expression is written as follows.

```
// Language: Clean

name param
| guard = expr
```

Each guarded expression starts with a vertical bar (`|`).

An control implementation with multiple guarded expression is written as follows.

```
// Language: Clean

name param
| guardA = exprA
| guardB = exprB
| guardC = exprC
```

Moreover, guarded expressions can be nested.

```
// Language: Clean

name param
| guardA
    | guardAA = exprAA
```

---

