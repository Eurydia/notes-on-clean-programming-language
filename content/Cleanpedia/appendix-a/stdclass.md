---
title: "Appendix A: StdClass"
---

## Arithmetic Classes

### `PlusMin`

**Declaration**

```
// Language: Clean

class PlusMin T | (+ T) & (- T) & (zero T)
```

### `MultDiv`

**Declaration**

```
// Language: Clean

class MultDiv T | (* T) & (/ T) & (one T)
```

### `Arith`

**Declaration**

```
// Language: Clean

class Arith T | (PlusMin T) & (MultDiv T) & (abs T) & (sign T) & (~ T)
```

### `IncDec`

**Declaration**

```
// Language: Clean

class IncDec T | (+ T) & (- T) & (one T) & (zero T)
where
    inc :: T -> T
    inc    x =  x + one

    dec :: T -> T
    dec    x =  x - one
```

### `Enum`

**Declaration**

```
// Language: Clean

class Enum T | (< T) & (IncDec T)
where
```

---

## Relational Classes

### `Eq`

**Declaration**

```
// Language: Clean

class Eq T | == T
where
    (<>) infixl 4 :: T T -> Bool
    (<>)             x y =  not (x == y)
```

### `Ord`

**Declaration**

```
// Language: Clean

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
