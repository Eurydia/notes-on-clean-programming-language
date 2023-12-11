# StdOverloaded

Visit [StdOverloaded](https://cloogle.org/src/#base-stdenv/StdOverloaded;icl;line=1) on Cloogle for source code of this module.

## Operations

### Addition

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: adds $a$ and $b$.

**Declaration**

```
// Language: Clean

class + T
where:
    (+) infixl 6 :: T T -> T
```

### Subtraction

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: subtracts $b$ from $a$.

**Declaration**

```
// Language: Clean

class + T
where:
    (-) infixl 6 :: T T -> T
```

### Multiplication

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: multiplies $a$ and $b$.

**Declaration**

```
// Language: Clean

class * T
where:
    (*) infixl 7 :: T T -> T
```

### Division

**Signature**

$$
\begin{align*}
a\rightarrow{a}\rightarrow{a}
\end{align*}
$$

where:
- $a$ is a generic type.

**Behavior**: divides $a$ with $b$.

**Declaration**

```
// Language: Clean

class / T
where:
    (/) infixl 7 :: T T -> T
```

### Exponentiation

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: raises $a$ to the power of $b$.

**Declaration**

```
// Language: Clean

class ^ T
where:
    (^) infixl 7 :: T T -> T
```

### Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: checks if $a$ and $b$ are equal.

**Declaration**

```
// Language: Clean

class == T
where:
    (==) infixl 4 :: T T -> T
```

### Less Than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: checks if $a$ is less than $b$.

**Declaration**

```
// Language: Clean

class < T
where:
    (<) infixl 4 :: T T -> T
```

### Slicing

**Signature**

$$
\begin{align*}
a\rightarrow(i,\ j)\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type, and
- $i$ and $j$ are of type $\textbf{Int}$.

**Behavior**: slices $[i,\ j]$ interval from $a$.

**Declaration**

```
// Language: Clean

class % T
where:
    (%) infixl 9 :: T (Int, Int) -> T
```

### Concatenation

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: joins $a$ and $b$.

**Declaration**

```
// Language: Clean

class +++ T
where:
    (+++) infixl 5 :: T T -> T
```

### Modulo

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: $a\mod{b}$

**Declaration**

```
// Language: Clean

class mod T
where:
    (mod) infixl 7 :: T T -> T
```

### Reminder Of Division

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type.

**Behavior**: reminder after dividing $a$ with $b$.

**Declaration**

```
// Language: Clean

class rem T
where:
    (rem) infixl 7 :: T T -> T
```

### Negate

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type.

**Behavior**: negates $a$.

**Declaration**

```
// Language: Clean

class ~ T
where:
    ~ :: T -> T
```

---

## Units

### Zero Unit

**Behavior**: unit element for addition.

**Declaration**

```
// Language: Clean

class zero T
where:
    zero :: T
```

### One Unit

**Behavior**: unit element for multiplication.

**Declaration**

```
// Language: Clean

class one T
where:
    one :: T
```

---

## Functions

### `inc`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type.

**Behavior**: adds $a$ by its one unit.

**Declaration**

```
// Language: Clean

class inc T
where:
    inc :: T -> T
```

### `dec`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type.

**Behavior**: subtracts $a$ by its one unit.

**Declaration**

```
// Language: Clean

class dec T
where:
    dec :: T -> T
```

### `abs`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type.

**Behavior**: returns absolute value of $a$.

**Declaration**

```
// Language: Clean

class abs T
where:
    abs :: T -> T
```

### `sign`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: returns sign of $a$.

**Declaration**

```
// Language: Clean

class sign T
where:
    sign :: T -> Int
```

### `isEven`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns true if and only if $a$ is even.

**Declaration**

```
// Language: Clean

class isEven T
where:
    isEven :: T -> Bool
```

### `isOdd`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns true if and only if $a$ is odd.

**Declaration**

```
// Language: Clean

class isOdd T
where:
    isOdd :: T -> Bool
```

### `length`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: returns length of $a$.

**Declaration**

```
// Language: Clean

class length T
where:
    length :: (T a) -> Bool
```

### `gcd`

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type. 

**Behavior**: returns greatest common divisor of $a$ and $b$.

**Declaration**

```
// Language: Clean

class gcd T
where:
    gcd :: T T -> T
```

### `lcm`

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of a generic type. 

**Behavior**: returns least common multiple of $a$ and $b$.

**Declaration**

```
// Language: Clean

class lcm T
where:
    lcm :: T T -> T
```

### `ln`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns natural log of $a$.

**Declaration**

```
// Language: Clean

class ln T
where:
    ln :: T -> T
```

### `log10`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns logarithm base $10$ of $a$.

**Declaration**

```
// Language: Clean

class log10 T
where:
    log10 :: T -> T
```

### `exp`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns $e$ raise to the power of $a$.

**Declaration**

```
// Language: Clean

class exp T
where:
    exp :: T -> T
```

### `sqrt`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns square root of $a$.

**Declaration**

```
// Language: Clean

class sqrt T
where:
    sqrt :: T -> T
```

### `sin`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns sine of $a$.

**Declaration**

```
// Language: Clean

class sin T
where:
    sin :: T -> T
```

### `cos`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns cosine of $a$.

**Declaration**

```
// Language: Clean

class cos T
where:
    cos :: T -> T
```

### `tan`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns tangent of $a$.

**Declaration**

```
// Language: Clean

class tan T
where:
    tan :: T -> T
```

### `asin`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of sine of $a$.

**Declaration**

```
// Language: Clean

class asin T
where:
    asin :: T -> T
```

### `acos`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of cosine of $a$.

**Declaration**

```
// Language: Clean

class acos T
where:
    acos :: T -> T
```

### `atan`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of tangent of $a$.

**Declaration**

```
// Language: Clean

class sin T
where:
    sin :: T -> T
```

### `sinh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic sine of $a$.

**Declaration**

```
// Language: Clean

class sinh T
where:
    sinh :: T -> T
```

### `cosh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic cosine of $a$.

**Declaration**

```
// Language: Clean

class cosh T
where:
    cosh :: T -> T
```

### `tanh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns hyperbolic tangent of $a$.

**Declaration**

```
// Language: Clean

class tanh T
where:
    tanh :: T -> T
```

### `asinh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic sine of $a$.

**Declaration**

```
// Language: Clean

class asinh T
where:
    asinh :: T -> T
```

### `acosh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic cosine of $a$.

**Declaration**

```
// Language: Clean

class acosh T
where:
    acosh :: T -> T
```

### `atanh`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of a generic type. 

**Behavior**: returns inverse of hyperbolic tangent of $a$.

**Declaration**

```
// Language: Clean

class atanh T
where:
    atanh :: T -> T
```

---

## Conversion Functions

### `toInt`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and 
- $R$ is of type $\textbf{Int}$.

**Behavior**: converts $a$ to $\textbf{Int}$.

**Declaration**

```
// Language: Clean

class toInt T
where:
    toInt :: T -> Int
```

### `toReal`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and 
- $R$ is of type $\textbf{Real}$.

**Behavior**: converts $a$ to $\textbf{Real}$.

**Declaration**

```
// Language: Clean

class toReal T
where:
    toReal :: T -> Real
```

### `toChar`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and 
- $R$ is of type $\textbf{Char}$.

**Behavior**: converts $a$ to $\textbf{Char}$.

**Declaration**

```
// Language: Clean

class toChar T
where:
    toChar :: T -> Char
```

### `toBool`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and 
- $R$ is of type $\textbf{Bool}$.

**Behavior**: converts $a$ to $\textbf{Bool}$.

**Declaration**

```
// Language: Clean

class toBool T
where:
    toBool :: T -> Bool
```

### `toString`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of a generic type, and 
- $R$ is of type $\textbf{String}$.

**Behavior**: converts $a$ to $\textbf{String}$.

**Declaration**

```
// Language: Clean

class toString T
where:
    toString :: T -> String
```

### `fromInt`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Int}$, and
- $R$ is of a generic type.

**Behavior**: converts an integer $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromInt T
where:
    fromInt :: Int -> T
```

### `fromReal`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Real}$, and
- $R$ is of a generic type.

**Behavior**: converts a real number $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromReal T
where:
    fromReal :: Real -> T
```

### `fromChar`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $a$ is of a generic type.

**Behavior**: converts a character $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromChar T
where:
    fromChar :: Char -> T
```

### `fromBool`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Bool}$, and
- $R$ is of a generic type.

**Behavior**: converts a Boolean $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromBool T
where:
    fromBool :: Bool -> T
```

### `fromString`

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{String}$, and
- $R$ is of a generic type. 

**Behavior**: converts a string $a$ to a generic type.

**Declaration**

```
// Language: Clean

class fromString T
where:
    fromString :: String -> T
```
