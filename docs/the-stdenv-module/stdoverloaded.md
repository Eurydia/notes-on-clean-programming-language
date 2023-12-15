# StdOverloaded

Visit [StdOverloaded](https://cloogle.org/src/#base-stdenv/StdOverloaded;icl;line=1) on Cloogle for source code of this module.

## Units

### `zero`

**Declaration**

```clean
// CLEAN

class zero T
where
    zero :: T
```

**Definition**

Defines the additive identity.

### `one`

**Declaration**

```clean
// CLEAN

class one T
where
    one :: T
```

**Definition**

Defines the multiplicative identity.

---

## Arithmetic operations

### `+`

**Declaration**

```clean
// CLEAN

class + T
where
    (+) infixl 6 :: T T -> T
    (+)             a b => ...
```

**Definition**

Defines the addition operation.

### `-`

**Declaration**

```clean
// CLEAN

class + T
where
    (-) infixl 6 :: T T -> T
	(-)             a b => ...
```

**Definition**

Defines the subtraction operation.

### `*`

**Declaration**

```clean
// CLEAN

class * T
where
    (*) infixl 7 :: T T -> T
```

**Definition**

Defines the multiplication operation.

### `/`

**Declaration**

```clean
// CLEAN

class / T
where
    (/) infixl 7 :: T T -> T
```

**Definition**

Defines the division operation.

### `rem`

**Declaration**

```clean
// CLEAN

class rem T
where
    (rem) infixl 7 :: T T -> T
```

**Definition**

Defines the reminder division operation.

### `mod`

**Declaration**

```clean
// CLEAN

class mod T
where
    (mod) infixl 7 :: T T -> T
```

**Definition**

Defines the modulo operation.

---

## Algebraic operations

### `^`

**Declaration**

```clean
// CLEAN

class ^ T
where
    (^) infixl 7 :: T T -> T
```

**Definition**

Defines the exponentiation operation.

## Relational operations

### `==`

**Declaration**

```clean
// CLEAN

class == T
where
    (==) infixl 4 :: T T -> T
```

**Definition**

Defines the equality operation.

### `<`

**Declaration**

```clean
// CLEAN

class < T
where
    (<) infixl 4 :: T T -> T
```

**Definition**

Defines the less than operation.

---

## Manipulation operations

### `%`

**Declaration**

```clean
// CLEAN

class % T
where
    (%) infixl 9 :: T (Int, Int) -> T
```

**Definition**

Defines the slicing operation.

### `+++`

**Declaration**

```
// CLEAN

class +++ T
where
    (+++) infixl 5 :: T T -> T
```

**Definition**

Defines the concatenation operation.

### `~`

**Declaration**

```
// CLEAN

class ~ T
where
    ~ :: T -> T
```

**Definition**

Defines the negation operation.

---

## Arithmetic functions

### `inc`

**Declaration**

```clean
// CLEAN

class inc T
where
    inc :: T -> T
```

**Definition**

Defines unit incrementation.

### `dec`

**Declaration**

```
// CLEAN

class dec T
where
    dec :: T -> T
```

**Definition**

Defines unit decrementation.

### `abs`

**Declaration**

```clean
// CLEAN

class abs T
where
    abs :: T -> T
```

**Definition**

Defines the absolute value function.

### `sign`

**Declaration**

```
// CLEAN

class sign T
where
    sign :: T -> Int
```

**Definition**

Defines the sign function.

---

## Validator functions

### `isEven`

**Declaration**

```
// CLEAN

class isEven T
where
    isEven :: T -> Bool
```

**Definition**

Defines the `isEven` function.

### `isOdd`

**Declaration**

```clean
// CLEAN

class isOdd T
where
    isOdd :: T -> Bool
```

**Definition**

Defines the `isOdd` function.

### `length`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: returns length of $a$.

**Declaration**

```
// CLEAN

class length T
where
    length :: (T a) -> Bool
```

### `gcd`

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where
- $a$, $b$, and $R$ are of a generic type. 

**Behavior**: returns greatest common divisor of $a$ and $b$.

**Declaration**

```
// CLEAN

class gcd T
where
    gcd :: T T -> T
```

### `lcm`

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where
- $a$, $b$, and $R$ are of a generic type. 

**Behavior**: returns least common multiple of $a$ and $b$.

**Declaration**

```
// CLEAN

class lcm T
where
    lcm :: T T -> T
```

### `ln`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns natural log of $a$.

**Declaration**

```
// CLEAN

class ln T
where
    ln :: T -> T
```

### `log10`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns logarithm base $10$ of $a$.

**Declaration**

```
// CLEAN

class log10 T
where
    log10 :: T -> T
```

### `exp`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns $e$ raise to the power of $a$.

**Declaration**

```
// CLEAN

class exp T
where
    exp :: T -> T
```

### `sqrt`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns square root of $a$.

**Declaration**

```
// CLEAN

class sqrt T
where
    sqrt :: T -> T
```

---

## Trigonometric functions

### `sin`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns sine of $a$.

**Declaration**

```
// CLEAN

class sin T
where
    sin :: T -> T
```

### `cos`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns cosine of $a$.

**Declaration**

```
// CLEAN

class cos T
where
    cos :: T -> T
```

### `tan`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns tangent of $a$.

**Declaration**

```
// CLEAN

class tan T
where
    tan :: T -> T
```

### `asin`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of sine of $a$.

**Declaration**

```
// CLEAN

class asin T
where
    asin :: T -> T
```

### `acos`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of cosine of $a$.

**Declaration**

```
// CLEAN

class acos T
where
    acos :: T -> T
```

### `atan`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of tangent of $a$.

**Declaration**

```
// CLEAN

class sin T
where
    sin :: T -> T
```

### `sinh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic sine of $a$.

**Declaration**

```
// CLEAN

class sinh T
where
    sinh :: T -> T
```

### `cosh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic cosine of $a$.

**Declaration**

```
// CLEAN

class cosh T
where
    cosh :: T -> T
```

### `tanh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic tangent of $a$.

**Declaration**

```
// CLEAN

class tanh T
where
    tanh :: T -> T
```

### `asinh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic sine of $a$.

**Declaration**

```
// CLEAN

class asinh T
where
    asinh :: T -> T
```

### `acosh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic cosine of $a$.

**Declaration**

```
// CLEAN

class acosh T
where
    acosh :: T -> T
```

### `atanh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic tangent of $a$.

**Declaration**

```
// CLEAN

class atanh T
where
    atanh :: T -> T
```

---

## Type conversion functions

### `toInt`

**Declaration**

```clean
// CLEAN

class toInt T
where
    toInt :: T -> Int
```

**Definition**

Defines conversion from another type to integer.

### `toReal`

**Declaration**

```clean
// CLEAN

class toReal T
where
    toReal :: T -> Real
```

**Definition**

Defines conversion from another type to real numbers.

### `toChar`

**Declaration**

```clean
// CLEAN

class toChar T
where
    toChar :: T -> Char
```

**Definition**

Defines conversion from another type to character.

### `toBool`

**Declaration**

```clean
// CLEAN

class toBool T
where
    toBool :: T -> Bool
```

**Definition**

Defines conversion from another type to Boolean.

### `toString`

**Declaration**

```clean
// CLEAN

class toString T
where
    toString :: T -> String
```

**Definition**

Defines conversion from another type to string.

### `fromInt`

**Declaration**

```clean
// CLEAN

class fromInt T
where
    fromInt :: Int -> T
```

**Definition**

Defines conversion from integer to another type.

### `fromReal`

**Declaration**

```clean
// CLEAN

class fromReal T
where
    fromReal :: Real -> T
```

**Definition**

Defines conversion from real number to another type.

### `fromChar`

**Declaration**

```clean
// CLEAN

class fromChar T
where
    fromChar :: Char -> T
```

**Definition**

Defines conversion from character to another type.

### `fromBool`

**Declaration**

```clean
// CLEAN

class fromBool T
where
    fromBool :: Bool -> T
```

**Definition**

Defines conversion from Boolean to another type.

### `fromString`

**Declaration**

```clean
// CLEAN

class fromString T
where
    fromString :: String -> T
```

**Definition**

Defines conversion from string to another type.
