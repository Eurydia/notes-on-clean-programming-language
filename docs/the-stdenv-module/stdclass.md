---
Date of last full revision: 25/DEC/2023
---

# StdClass

This module can be imported directly or as a part of the `StdEnv` module.

The distinction between this module and the `StdOverloaded` module is that this module builds on top of the `StdOverloaded` module.

Visit [StdClass](https://cloogle.org/src/#base-stdenv/StdClass;icl;line=1) on Cloogle for source code of this module.

## Arithmetic classes

### `PlusMin`

**Declaration**

```clean
// CLEAN

class PlusMin T | (+ T) & (- T) & (zero T)
```

This class does not define additional operators or functions on the type `T`, so it serves the purpose of a shorthand to the three classes.

Instead of writing all three classes, you can simply use this class instead, given that the type that you are working with is an instance of the classes mentioned.

### `MultDiv`

**Declaration**

```clean
// CLEAN

class MultDiv T | (* T) & (/ T) & (one T)
```

This class does not define additional operators or functions on the type `T`, so it serves the purpose of a shorthand to the three classes.

Instead of writing all three classes, you can simply use this class instead, given that the type that you are working with is an instance of the classes mentioned.

### `Arith`

**Declaration**

```clean
// CLEAN

class Arith T | (PlusMin T) & (MultDiv T) & (abs T) & (sign T) & (~ T)
```

This class does not define additional operators or functions on the type `T`, so it serves the purpose of a shorthand to the classes mentioned.

Instead of writing all classes, you can simply use this class instead, given that the type that you are working with is an instance of the classes mentioned.

### `IncDec`

**Declaration**

```clean
// CLEAN

class IncDec T | (+ T) & (- T) & (one T) & (zero T)
where
    inc :: T -> T | (+ T) & (one T)
    inc    x => ...
    dec :: T -> T | (- T) & (one T)
    inc    x => ...
```

This class defines two additional functions on the type `T`.

The behavior of both functions are determined by the definition of the `addition`, `subtraction`. and `one` unit.

Under the hood, the function `inc` performs `addition` operation using the argument `x` and `one` as operands.
Similarly, the function `dec` performs `subtraction` operation using the argument `x` and `one` as operands.

### `Enum`

**Declaration**

```clean
// CLEAN

class Enum T | (< T) & (IncDec T)
```

This class does not define additional operators or functions on the type `T`, however, dot-dot syntax requires this class to operate.

---

## Relational classes

### `Eq`

**Declaration**

```clean
// CLEAN

class Eq T | (== T)
where
    (<>) infixl 4 :: T T -> Bool
    (<>)          :: x y => ...
```

This class defines the `not equal` operation for the type `T` if it is an instance of the `Equalilty` class.

Under the hood, the function performs equality operation using `x` and `y` as operands and returns the negated logical value.

### `Ord`

**Declaration**

```clean
// CLEAN

class Ord T | (< T)
where
    (>)  infixl 4 :: T T  -> Bool
    (>)           :: x y  => ...
    
	(<=) infixl 4 :: T T -> Bool
	(<=)          :: x y => ...
	
    (>=) infixl 4 :: T T -> Bool
	(>=)          :: x y => ...
    
    min :: T T -> T
    min :: x y => ...
    
    max :: T T -> T
    max :: x y => ...
```

**Definition**

Defines the rest of the relational operations, as well as, the `min`, and `max` functions for the type `T` if it is an instance of the `Less than` class.

The operators and functions are defined in terms of less than relation and `not` function (unary operator).
