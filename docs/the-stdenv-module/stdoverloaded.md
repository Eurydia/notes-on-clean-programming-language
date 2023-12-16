---
Date of last full revision: 16 December 2023
---

# StdOverloaded

Visit [StdOverloaded](https://cloogle.org/src/#base-stdenv/StdOverloaded;icl;line=1) on Cloogle for source code of this module.

## Unit classes

### `zero`

**Declaration**

```clean
// CLEAN

class zero T
where
    zero :: T
```

**Definition**

Defines the additive identity on type `T`.

### `one`

**Declaration**

```clean
// CLEAN

class one T
where
    one :: T
```

**Definition**

Defines the multiplicative identity on type `T`.

---

## Arithmetic operation classes

### Addition

**Declaration**

```clean
// CLEAN

class + T
where
    (+) infixl 6 :: T T -> T
```

**Definition**

Defines the addition operation on type `T`.

### Subtraction

**Declaration**

```clean
// CLEAN

class + T
where
    (-) infixl 6 :: T T -> T
```

**Definition**

Defines the subtraction operation on type `T`.

### Multiplication

**Declaration**

```clean
// CLEAN

class * T
where
    (*) infixl 7 :: T T -> T
```

**Definition**

Defines the multiplication operation on type `T`.

### Division

**Declaration**

```clean
// CLEAN

class / T
where
    (/) infixl 7 :: T T -> T
```

**Definition**

Defines the division operation on type `T`.

### Reminder division

**Declaration**

```clean
// CLEAN

class rem T
where
    (rem) infixl 7 :: T T -> T
```

**Definition**

Defines the reminder division operation on type `T`.

### Modulo 

**Declaration**

```clean
// CLEAN

class mod T
where
    (mod) infixl 7 :: T T -> T
```

**Definition**

Defines the modulo operation on type `T`.

---

## Algebraic operation classes

### Exponentiation

**Declaration**

```clean
// CLEAN

class ^ T
where
    (^) infixl 7 :: T T -> T
```

**Definition**

Defines the exponentiation operation on type `T`.

---

## Relational operation classes

### Equality

**Declaration**

```clean
// CLEAN

class == T
where
    (==) infixl 4 :: T T -> T
```

**Definition**

Defines the equality operation on type `T`.

### Less than

**Declaration**

```clean
// CLEAN

class < T
where
    (<) infixl 4 :: T T -> T
```

**Definition**

Defines the less than operation on type `T`.

---

## Manipulation operation classes

### Negation

**Declaration**

```clean
// CLEAN

class ~ T
where
    ~ :: T -> T
```

**Definition**

Defines the negation operation on type `T`.

### Slicing

**Declaration**

```clean
// CLEAN

class % T
where
    (%) infixl 9 :: T (Int, Int) -> T
```

**Definition**

Defines the slicing operation on type `T`.

### Concatenation

**Declaration**

```clean
// CLEAN

class +++ T
where
    (+++) infixl 5 :: T T -> T
```

**Definition**

Defines the concatenation operation on type `T`.

---

## Arithmetic function classes

### `inc`

**Declaration**

```clean
// CLEAN

class inc T
where
    inc :: T -> T
```

**Definition**

Defines unit increment on type `T`.

### `dec`

**Declaration**

```clean
// CLEAN

class dec T
where
    dec :: T -> T
```

**Definition**

Defines unit decrement on type `T`.

### `gcd`

**Declaration**

```
// CLEAN

class gcd T
where
    gcd :: T T -> T
```

**Definition**

Defines the greatest common divisor operation on type `T`.

### `lcm`

**Declaration**

```clean
// CLEAN

class lcm T
where
    lcm :: T T -> T
```

**Definition**

Defines the least common multiple operation on type `T`.

---

## Algebraic function classes

### `abs`

**Declaration**

```clean
// CLEAN

class abs T
where
    abs :: T -> T
```

**Definition**

Defines the absolute value function on type `T`.

### `sign`

**Declaration**

```clean
// CLEAN

class sign T
where
    sign :: T -> Int
```

**Definition**

Defines the sign function on type `T`.

### `ln`

**Declaration**

```
// CLEAN

class ln T
where
    ln :: T -> T
```

**Definition**

Defines the natural logarithm function on type `T`.

### `exp`

**Declaration**

```clean
// CLEAN

class exp T
where
    exp :: T -> T
```

**Definition**

Defines the exponential function on type `T`.

### `sqrt`

**Declaration**

```clean
// CLEAN

class sqrt T
where
    sqrt :: T -> T
```

**Definition**

Defines the square root function on type `T`.

### `log10`

**Declaration**

```clean
// CLEAN

class log10 T
where
    log10 :: T -> T
```

**Definition**

Defines the base-ten logarithm function on type `T`.

---

## Trigonometric function classes

### `sin`

**Declaration**

```clean
// CLEAN

class sin T
where
    sin :: T -> T
```

**Definition**

Defines the sine function on type `T`.

### `cos`

**Declaration**

```clean
// CLEAN

class cos T
where
    cos :: T -> T
```

**Definition**

Defines the cosine function on type `T`.

### `tan`

**Declaration**

```clean
// CLEAN

class tan T
where
    tan :: T -> T
```

**Definition**

Defines the tangent function on type `T`.

### `asin`

**Declaration**

```clean
// CLEAN

class asin T
where
    asin :: T -> T
```

**Definition**

Defines the inverse of sine function on type `T`.

### `acos`

**Declaration**

```clean
// CLEAN

class acos T
where
    acos :: T -> T
```

**Definition**

Defines the inverse of cosine function on type `T`.

### `atan`

**Declaration**

```clean
// CLEAN

class atan T
where
    atan :: T -> T
```

**Definition**

Defines the inverse of tangent function on type `T`.

### `sinh`

**Declaration**

```clean
// CLEAN

class sinh T
where
    sinh :: T -> T
```

**Definition**

Defines the hyperbolic sine function on type `T`.

### `cosh`

**Declaration**

```clean
// CLEAN

class cosh T
where
    cosh :: T -> T
```

**Definition**

Defines the hyperbolic cosine function on type `T`.

### `tanh`

**Declaration**

```clean
// CLEAN

class tanh T
where
    tanh :: T -> T
```

**Definition**

Defines the hyperbolic tangent function on type `T`.

### `asinh`

**Declaration**

```clean
// CLEAN

class asinh T
where
    asinh :: T -> T
```

**Definition**

Defines the inverse of hyperbolic sine function on type `T`.

### `acosh`

**Declaration**

```clean
// CLEAN

class acosh T
where
    acosh :: T -> T
```

**Definition**

Defines the inverse of hyperbolic cosine function on type `T`.

### `atanh`

**Declaration**

```clean
// CLEAN

class atanh T
where
    atanh :: T -> T
```

**Definition**

Defines the inverse of hyperbolic tangent function on type `T`.

---

## Validator function classes

### `isEven`

**Declaration**

```
// CLEAN

class isEven T
where
    isEven :: T -> Bool
```

**Definition**

Defines the `isEven` function on type `T`.

### `isOdd`

**Declaration**

```clean
// CLEAN

class isOdd T
where
    isOdd :: T -> Bool
```

**Definition**

Defines the `isOdd` function on type `T`.

---

## Property function classes

### `length`

**Declaration**

```clean
// CLEAN

class length T
where
    length :: (T a) -> Int
```

**Definition**

Defines the `length` function on type `T`.

## Type conversion function classes

### `toInt`

**Declaration**

```clean
// CLEAN

class toInt T
where
    toInt :: T -> Int
```

**Definition**

Defines conversion from type `T` to integer.

### `toReal`

**Declaration**

```clean
// CLEAN

class toReal T
where
    toReal :: T -> Real
```

**Definition**

Defines conversion from type `T` to real numbers.

### `toChar`

**Declaration**

```clean
// CLEAN

class toChar T
where
    toChar :: T -> Char
```

**Definition**

Defines conversion from type `T` to character.

### `toBool`

**Declaration**

```clean
// CLEAN

class toBool T
where
    toBool :: T -> Bool
```

**Definition**

Defines conversion from type `T` to Boolean.

### `toString`

**Declaration**

```clean
// CLEAN

class toString T
where
    toString :: T -> String
```

**Definition**

Defines conversion from type `T` to string.

### `fromInt`

**Declaration**

```clean
// CLEAN

class fromInt T
where
    fromInt :: Int -> T
```

**Definition**

Defines conversion from integer to type `T`.

### `fromReal`

**Declaration**

```clean
// CLEAN

class fromReal T
where
    fromReal :: Real -> T
```

**Definition**

Defines conversion from real number to type `T`.

### `fromChar`

**Declaration**

```clean
// CLEAN

class fromChar T
where
    fromChar :: Char -> T
```

**Definition**

Defines conversion from character to type `T`.

### `fromBool`

**Declaration**

```clean
// CLEAN

class fromBool T
where
    fromBool :: Bool -> T
```

**Definition**

Defines conversion from Boolean to type `T`.

### `fromString`

**Declaration**

```clean
// CLEAN

class fromString T
where
    fromString :: String -> T
```

**Definition**

Defines conversion from string to type `T`.
