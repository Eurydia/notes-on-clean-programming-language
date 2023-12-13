# StdClass

Visit [StdClass](https://cloogle.org/src/#base-stdenv/StdClass;icl;line=1) on Cloogle for source code of this module.

## Arithmetic Classes

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
    inc :: T -> T
    inc    x =  x + one

    dec :: T -> T
    dec    x =  x - one
```

### `Enum`

**Declaration**

```clean
// CLEAN

class Enum T | (< T) & (IncDec T)
where
```

---

## Relational Classes

### `Eq`

**Declaration**

```clean
// CLEAN

class Eq T | == T
where
    (<>) infixl 4 :: T T -> Bool
    (<>)             x y =  not (x == y)
```

### `Ord`

**Declaration**

```clean
// CLEAN

class Ord T | < T
where
    (<=) infixl 4 :: T T -> Bool
    (<=)             x y =  not (y < x)
    
    (>) infixl 4 :: T T -> Bool
    (>)             x y =  y < x
    
    (>=) infixl 4 :: T T -> Bool
    (>=)             x y =  not (x < y)

    min :: T T -> T
    min    x y =  case (x < y) of 
                  True = x
                  _    = y
    
    max :: T T -> T
    max    x y =  case (x < y) of 
                  True = y
                  _    = x
```
