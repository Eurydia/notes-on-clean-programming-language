---
Date of last full revision: 25 DEC 2023
---

# StdTuple

This module can be imported directly or as a part of the `StdEnv` module.
It provides definitions for relational operations on tuples.

However, due to the way that tuples are implemented in CLEAN, an ordered pair is a completely different data structure when compared to an ordered triple.

Visit [StdTuple](https://cloogle.org/src/#base-stdenv/StdTuple;icl;line=1) on Cloogle for source code of this module.

## Relational operations

### Equal to

**Signature**

For ordered pairs 

```clean
// CLEAN

(==) infix 4 :: (T, K)   (T, K)   -> Bool | (Eq T) & (Eq K)
(==)            (x1, y1) (x2, y2) => ...
```

For ordered triples

```clean
// CLEAN

(==) infix 4 :: (T, K, V)    (T, K, V)    -> Bool | (== T) & (== K)
(==)            (x1, y1, z1) (x2, y2, z2) => ...
```

The types `T` and `K` must be instances of the class `Equality` class from the `StdOverloaded` module.

**Behavior**

Returns true if the given tuples are pairwise equal.
Otherwise, returns false.

For ordered pairs,

```clean
// CLEAN

(x1 == y1) && (x2 == y2)
```

For ordered triples,

```clean
// CLEAN

(x1 == x2) && (y1 == y2) && (z1 == z2) 
```

**Usage**

```clean
// CLEAN

(1, 'a') == (1, 'a')  // True
(1, 'a') == (1, 'b')  // False
(1, 'a') == (1, 'b')  // False
(2, 'a') == (1, 'a')  // False
```

### Not equal to

**Signature**

For ordered pairs 

```clean
// CLEAN

(<>) infix 4 :: (T, K)   (T, K)   -> Bool | (Eq T) & (Eq K)
(<>)            (x1, y1) (x2, y2) => ...
```

For ordered triples

```clean
// CLEAN

(==) infix 4 :: (T, K, V)    (T, K, V)    -> Bool | (== T) & (== K)
(==)            (x1, y1, z1) (x2, y2, z2) => ...
```

The types `T` and `K` must be instances of the class `Equality` class from the `StdOverloaded` module.

**Behavior**

Returns true if the given tuples are not pairwise equal.
Otherwise, returns false.

For ordered pairs

```clean
// CLEAN

(x1 <> y1) && (x2 <> y2)
```

For ordered triples

```clean
// CLEAN

(x1 <> x2) && (y1 <> y2) && (z1 <> z2) 
```

**Usage**

```clean
// CLEAN

(1, 'a') <> (1, 'a')  // False
(1, 'a') <> (1, 'b')  // True
(1, 'a') <> (1, 'b')  // True
(2, 'a') <> (1, 'a')  // True
```

### Less than

**Signature**

For ordered pairs 

```clean
// CLEAN

(<) infix 4 :: (T, K)   (T, K)   -> Bool |  (< T) & (< K)
(<)            (x1, y1) (x2, y2) => ...
```

For ordered triples

```clean
// CLEAN

(<) infix 4 :: (T, K, V)    (T, K, V)    -> Bool | (< T) & (< K)
(<)            (x1, y1, z1) (x2, y2, z2) => ...
```

The types `T` and `K` must be instances of the class `Less than` class from the `StdOverloaded` module.

**Behavior**

Returns true if the first tuple is pairwise less than the second tuple.
Otherwise, returns false.

For ordered pairs

```clean
// CLEAN

(x1 < y1) && (x2 < y2)
```

For ordered triples

```clean
// CLEAN

(x1 < x2) && (y1 < y2) && (z1 < z2) 
```

**Usage**

```clean
// CLEAN

(1, 'a') < (1, 'a')  // False
(1, 'a') < (1, 'b')  // False
(1, 'a') < (1, 'b')  // False
(2, 'a') < (1, 'a')  // False
```

### Less Than Or Equal To

**Signature**

For ordered pairs 

```clean
// CLEAN

(<=) infix 4 :: (T, K)   (T, K)   -> Bool |  (< T) & (< K)
(<=)            (x1, y1) (x2, y2) => ...
```

For ordered triples

```clean
// CLEAN

(<=) infix 4 :: (T, K, V)    (T, K, V)    -> Bool | (< T) & (< K)
(<=)            (x1, y1, z1) (x2, y2, z2) => ...
```

The types `T` and `K` must be instances of the class `Less than` class from the `StdOverloaded` module.

**Behavior**

Returns true if the first tuple is pairwise less than or equal to the second tuple.
Otherwise, returns false.

For ordered pairs

```clean
// CLEAN

(x1 <= y1) && (x2 <= y2)
```

For ordered triples

```clean
// CLEAN

(x1 <= x2) && (y1 <= y2) && (z1 <= z2) 
```

**Usage**

```
// CLEAN

(1, 'a') <= (1, 'a')  // True
(1, 'a') <= (1, 'b')  // True
(1, 'a') <= (1, 'b')  // True
(2, 'a') <= (1, 'a')  // False
```

### Greater than

**Signature**

For ordered pairs 

```clean
// CLEAN

(>) infix 4 :: (T, K)   (T, K)   -> Bool |  (< T) & (< K)
(>)            (x1, y1) (x2, y2) => ...
```

For ordered triples

```clean
// CLEAN

(>) infix 4 :: (T, K, V)    (T, K, V)    -> Bool | (< T) & (< K)
(>)            (x1, y1, z1) (x2, y2, z2) => ...
```

The types `T` and `K` must be instances of the class `Less than` class from the `StdOverloaded` module.

**Behavior**

Returns true if the first tuple is pairwise greater than the second tuple.
Otherwise, returns false.

For ordered pairs

```clean
// CLEAN

(x1 > y1) && (x2 > y2)
```

For ordered triples

```clean
// CLEAN

(x1 > x2) && (y1 > y2) && (z1 > z2) 
```

**Usage**

```clean
// CLEAN

(1, 'a') > (1, 'a')  // False
(1, 'a') > (1, 'b')  // False
(1, 'a') > (1, 'b')  // False
(2, 'a') > (1, 'a')  // False
```

### Greater than or equal to

**Signature**

For ordered pairs 

```clean
// CLEAN

(>=) infix 4 :: (T, K)   (T, K)   -> Bool |  (< T) & (< K)
(>=)            (x1, y1) (x2, y2) => ...
```

For ordered triples

```clean
// CLEAN

(>=) infix 4 :: (T, K, V)    (T, K, V)    -> Bool | (< T) & (< K)
(>=)            (x1, y1, z1) (x2, y2, z2) => ...
```

The types `T` and `K` must be instances of the class `Less than` class from the `StdOverloaded` module.

**Behavior**

Returns true if the first tuple is pairwise greater than or equal to the second tuple.
Otherwise, returns false.

For ordered pairs

```clean
// CLEAN

(x1 >= y1) && (x2 >= y2)
```

For ordered triples

```clean
// CLEAN

(x1 >= x2) && (y1 >= y2) && (z1 >= z2) 
```

**Usage**

```
// CLEAN

(1, 'a') >= (1, 'a')  // True
(1, 'a') >= (1, 'b')  // False
(1, 'a') >= (1, 'b')  // False
(2, 'a') >= (1, 'a')  // True
```

