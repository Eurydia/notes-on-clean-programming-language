---
Date of last full revision: 25/DEC/2023
---

# StdClass

This module can be imported individually or as a part of the *Standard Environment*.

The distinction between this module and the *StdOverloaded* module is that this module builds on top of the *StdOverloaded* module.

Visit [StdClass](https://cloogle.org/src/#base-stdenv/StdClass;icl;line=1) on Cloogle for source code of this module.

## Arithmetic classes

### `PlusMin`

**Declaration**

```clean
// CLEAN

class PlusMin T | (+ T) & (- T) & (zero T)
```

### `MultDiv`

**Declaration**

```clean
// CLEAN

class MultDiv T | (* T) & (/ T) & (one T)
```

### `Arith`

**Declaration**

```clean
// CLEAN

class Arith T | (PlusMin T) & (MultDiv T) & (abs T) & (sign T) & (~ T)
```

### `IncDec`

**Declaration**

```clean
// CLEAN

class IncDec T | (+ T) & (- T) & (one T) & (zero T)
where
    inc :: T -> T | (+ T) & (one T)
    dec :: T -> T | (- T) & (one T)
```

### `Enum`

**Declaration**

```clean
// CLEAN

class Enum T | (< T) & (IncDec T)
```

---

## Relational classes

### `Eq`

**Declaration**

```clean
// CLEAN

class Eq T | (== T)
where
    (<>) infixl 4 :: T T -> Bool
```

**Definition**

Defines the *not equal* operation for the type `T` if it is an instance of the *Equal* class.

### `Ord`

**Declaration**

```clean
// CLEAN

class Ord T | (< T)
where
    (>) infixl 4 :: T T -> Bool
	(<=) infixl 4 :: T T -> Bool
    (>=) infixl 4 :: T T -> Bool
    
    min :: T T -> T
    max :: T T -> T
```

**Definition**

Defines the *less than or equal to*, *greater than*, and *greater than or equal to* operations, as well as, the *min*, and *max* functions for the type `T` if it is an instance of the *less than* class.
