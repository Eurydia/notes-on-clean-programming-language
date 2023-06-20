---
title: "Operator Conflict"
---

Operators can conflict with one another.

```
// Language: Clean

(<=>) infixl 9 :: Bool  Bool  -> Bool
(<=>)             True  True  =  True
(<=>)             False False =  True
(<=>)             _     _     =  False

(-->) infixr 9 :: Bool Bool  -> Bool
(-->)             True False =  False
(-->)             _     _    =  True
```

It is not allowed to apply operators with equal precedence in an expression in such a way that their associativity conflict.

```
// Language: Clean

True --> False <=> False
```

The [logical implication](https://en.wikipedia.org/wiki/Material_conditional) operator (`-->`)  is right-associated.
It implies that the expression should be evaluated as follows.

```
// Language: Clean

True --> (False <=> False)
```

However, the [logical equivalence](https://en.wikipedia.org/wiki/Logical_equivalence) operator (`<=>`) is left associated.
It implies that the expression should be evaluated as follows.

```
// Language: Clean

(True --> False) <=> False
```

Since both operators have the same precedence and the order of evaluation cannot be decided by their associativity, this expression will result in a compile-time error.