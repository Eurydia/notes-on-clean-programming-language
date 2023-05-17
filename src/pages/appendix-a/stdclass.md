---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdClass"

Last updated: MAY 13th, 2023
Revisions: 3
Data of last revision: MAY 13th, 2023
---

## Contents

- [Part I: Arithmetic Classes](#part-i-arithmetic-classes)
- [Part II: Relational Classes](#part-ii-relational-classes)

## Part I: Arithmetic Classes

### 1.1 PlusMin

**Declaration**

```
// Language: Clean

class PlusMin T | (+ T) & (- T) & (zero T)
```

### 1.2 MultDiv

**Declaration**

```
// Language: Clean

class MultDiv T | (* T) & (/ T) & (one T)
```

### 1.3 Arith

**Declaration**

```
// Language: Clean

class Arith T | (PlusMin T) & (MultDiv T) & (abs T) & (sign T) & (~ T)
```

### 1.4 IncDec

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

### 1.5 Enum

**Declaration**

```
// Language: Clean

class Enum T | (< T) & (IncDec T)
where
```

[Back to top](#)

---

## Part II: Relational Classes

### 2.1 Eq

**Declaration**

```
// Language: Clean

class Eq T | == T
where
    (<>) infixl 4 :: T T -> Bool
    (<>)             x y =  not (x == y)
```

### 2.2 Ord

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

[Back to top](#)

---
