# Constants
There are two distinct types of constants; constant expressions and constant functions.

## Constant Expressions

They are computed only once.
Multiple reference to the same expression will result in sharing of that expression.

A control constant expression may be written as follows

```
// Language: Clean

constExprName = expression
```

In global scope, a constant expression may be explicitly defined with `=:` symbol.

```
// Language: Clean

// In global scope

constExprName =: expression
```

## Constant Functions

They are arity-zero functions.
Unlike constant expressions, they are re-computed every they invoked.

A control constant function may be written as follows.

```
// Language: Clean

constFnName = expression
```

In global scope, a constant function may be explicitly defined with right double arrow (`=>`).

```
// Language: Clean

// In global scope

constFnName => expression
```