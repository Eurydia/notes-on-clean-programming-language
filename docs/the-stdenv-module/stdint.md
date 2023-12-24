# StdInt

Visit [StdInt](https://cloogle.org/src/#base-stdenv/StdInt;icl;line=1) on Cloogle for source code of this module.

## Constants

### Zero

**Implementation**

```Clean
// CLEAN

zero ::  Int
zero :== 0
```

**Definition**

Represents the additive identity of integers.

### One

**Implementation**

```Clean
// CLEAN

one ::  Int
one :== 1
```

**Definition**

Represents the multiplicative identity of integers.

---

## Arithmetic operations

### Addition

**Signature**

```clean
// CLEAN

(+) infixl 6 :: Int Int -> Int
(+)             a   b   => ...
```

**Behavior**

Adds `a` and `b`.

**Usage**

```Clean
// CLEAN

  1  +   1   //  2
  1  + (-1)  //  0
(-1) +   1   //  0
(-1) + (-1)  // -2
```

### Subtraction

**Signature**

```Clean
// CLEAN

(-) infixl 6 :: Int Int -> Int
(-)             a   b   => ...
```

**Behavior**

Subtracts `b` from `a`.

**Usage**

```Clean
// CLEAN

  1  -   1  //  0
  1  - (-1) //  2
(-1) -   1  // -2
(-1) - (-1) //  0
```

### Multiplication

**Signature**

```Clean
// CLEAN

(*) infixl 7 :: Int Int -> Int
(*)             a   b   => ...
```

**Behavior**

Multiplies `a` and `b`.

**Usage**

```Clean
// CLEAN

  1  *   1  //  1
  1  * (-1) // -1
(-1) *   1  // -1
(-1) * (-1) //  1
```

### Floor Division

**Signature**

```Clean
// CLEAN

(/) infixl 7 :: Int Int -> Int
(/)             a   b   => ...
```

**Behavior**

Divides `a` by `b`.
Results in a silent run-time crash if `b` is zero.

**Usage**

```Clean
// CLEAN

  1  /   1   //  1
  1  / (-1)  // -1
(-1) /   1   // -1
(-1) / (-1)  //  1
  7  /   0   //  silently crashes
```

### Reminder Division

**Signature**

```Clean
// CLEAN

(rem) infix 7 :: Int Int -> Int
(rem)            a   b   => ...
```

and

```Clean
// CLEAN

(mod) infix 7 :: Int Int -> Int
(mod)            a   b   => ...
```

**Note**

For integers, `rem` and `mod` are aliases.

**Behavior**

Returns the reminded after dividing `a` by `b`.

**Usage**

```Clean
// CLEAN

  3  mod (-2)  //  1
(-3) mod (-2)  // -1
(-3) mod   2   // -1
  3  mod   2   //  1
```

### Exponentiation

**Signature**

```Clean
// CLEAN

(^) infixr 8 :: Int Int -> Int
(^)             a   b   => ...
```

**Behavior**

Raises `a` to the power of `b`.
Results in a run-time error if `b` is negative.

```console
$ ^ (Int) called with negative power argument
```

**Usage**

```Clean
// CLEAN

  1  ^   1   //  1
  1  ^ (-1)  //  Run-time error
(-1) ^   1   // -1
(-1) ^ (-1)  //  Run-time error
```

---

## Arithmetic functions

### Negation

**Signature**

```Clean
// CLEAN

~ :: Int -> Int
~    a   => ...
```

**Behavior**

Inverts the sign `a`.

**Usage**

```Clean
// CLEAN

~  0   //  0
~  1   // -1
~(-1)  //  1
```

---

## Relational operations

### Equal to

**Signature**

```Clean
// CLEAN

(==) infix 4 :: Int Int -> Bool
(==)            a   b   => ...
```

**Behavior**

Returns true if `a` is equal to `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  ==   2   // False
(-5) ==   2   // False
  5  == (-2)  // False
(-5) == (-2)  // False
(-2) == (-2)  // True
```

### Not equal to

**Signature**

```Clean
// CLEAN

(<>) infix 4 :: Int Int -> Bool
(<>)            a   b   => ...
```

**Behavior**

Returns true if `a` is not equal to `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  <>   2   // True
(-5) <>   2   // True
  5  <> (-2)  // True
(-5) <> (-2)  // True
(-2) <> (-2)  // False
```

### Less Than

**Signature**

```Clean
// CLEAN

(<) infix 4 :: Int Int -> Bool
(<)            a   b   => ...
```

**Behavior**

Returns true if `a` is strictly less than `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  <   2   // False
(-5) <   2   // True
  5  < (-2)  // False
(-5) < (-2)  // True
(-2) < (-2)  // False
```

### Less than or equal to

**Signature**

```Clean
// CLEAN

(<=) infix 4 :: Int Int -> Bool
(<=)            a   b   => ...
```

**Behavior**

Returns true if `a` is less than or equal to `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  <=   2   // False
(-5) <=   2   // True
  5  <= (-2)  // False
(-5) <= (-2)  // True
(-2) <= (-2)  // True
```

### Greater than

**Signature**

```Clean
// CLEAN

(>) infix 4 :: Int Int -> Bool
(>)            a   b   => ...
```

**Behavior**

Returns true if `a` is strictly greater than `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  >   2   // True
(-5) >   2   // False
  5  > (-2)  // True
(-5) > (-2)  // False
(-2) > (-2)  // False
```

### Greater than or equal to

**Signature**

```Clean
// CLEAN

(>=) infix 4 :: Int Int -> Bool
(>=)            a   b   => ...
```

**Behavior**

Returns true if `a` is greater than or equal to `b`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

  5  >=   2   // True
(-5) >=   2   // False
  5  >= (-2)  // True
(-5) >= (-2)  // False
(-2) >= (-2)  // True
```

---

## Bitwise operations

### Bitwise and

**Signature**

```Clean
// CLEAN

(bitand) infixl 6 :: Int Int -> Int
(bitand)             a   b   => ...
```

**Behavior**

Returns bitwise AND of `a` and `b`.

**Usage**

```Clean
// CLEAN

  5  bitand   2   //  0
(-5) bitand   2   //  2
  5  bitand (-2)  //  4
(-5) bitand (-2)  // -6
```

### Bitwise or

**Signature**

```Clean
// CLEAN

(bitor) infixl 6 :: Int Int -> Int
(bitor)             a   b   => ...
```

**Behavior**

Returns bitwise OR of `a` and `b`.

**Usage**

```Clean
// CLEAN

  5  bitor   2   //  7
(-5) bitor   2   // -5
  5  bitor (-2)  // -1
(-5) bitor (-2)  // -1
```

### Bitwise exclusive or

**Signature**

```Clean
// CLEAN

(bitxor) infixl 6 :: Int Int -> Int
(bitxor)             a   b   => ...
```

**Behavior**

Returns bitwise XOR of `a` and `b`.

**Usage**

```Clean
// CLEAN

  5  bitxor   2   //  7
(-5) bitxor   2   // -7
  5  bitxor (-2)  // -5
(-5) bitxor (-2)  //  5
```

### Bitwise left shift

**Signature**

```Clean
// CLEAN

(<<) infix 7 :: Int Int -> Int
(<<)            a   b   => ...
```

**Behavior**

Shifts `a` to the left by `b` bits.

**Usage**

```Clean
// CLEAN

  5  <<   2   //  20
(-5) <<   2   // -20
  5  << (-2)  //  4611686018427387904
(-5) << (-2)  // -4611686018427387904
```

### Bitwise right shift

**Signature**

```Clean
// CLEAN

(>>) infix 7 :: Int Int -> Int
(>>)            a   b   => ...
```

**Behavior**

Shifts `a` to the right by `b` bits.

**Usage**

```Clean
// CLEAN

  5  >>   2   //  1
(-5) >>   2   // -2
  5  >> (-2)  //  0
(-5) >> (-2)  // -1
```

---

## Bitwise functions

### `bitnot`

**Signature**

```Clean
// CLEAN

bitnot :: Int -> Int
bitnot    a   => ...
```

**Behavior**

Returns bitwise two-complement of `a`.

**Usage**

```Clean
// CLEAN

bitnot (-5)  //  -4
bitnot (-2)  //   1
bitnot   2   //  -3
bitnot   5   //  -6
```

---

## Math functions

### `sign`

**Signature**

```Clean
// CLEAN

sign :: Int -> Int
sign    a   => ...
```

**Behavior**

Returns the sign of `a`.

**Usage**

```Clean
// CLEAN

sign   1   //  1
sign   0   //  0
sign (-1)  // -1
```

### `abs`

**Signature**

```Clean
// CLEAN

abs :: Int -> Int
abs    a   => ...
```

**Behavior**

Returns the absolute value of `a`.

**Usage**

```Clean
// CLEAN

abs   1   // 1
abs   0   // 0
abs (-1)  // 1
```

### `gcd`

**Signature**

```Clean
// CLEAN

gcd :: Int Int -> Int
gcd    a   b   => ...
```

**Behavior**

Returns the greatest common divisor of `a` and `b`.

**Usage**

```Clean
// CLEAN

gcd   3    2   // 1
gcd (-3)   2   // 1
gcd   3  (-2)  // 1
gcd (-3) (-2)  // 1
```

### `lcm`

**Signature**

```Clean
// CLEAN

lcm :: Int Int -> Int
lcm    a   b   => ...
```

**Behavior**

Returns the least common multiple of `a` and `b`.

**Usage**

```Clean
// CLEAN

lcm   3    2   // 6
lcm (-3)   2   // 6
lcm   3  (-2)  // 6
lcm (-3) (-2)  // 6
```

---

## Validator functions

### `isEven`

**Signature**

```Clean
// CLEAN

isEven :: Int -> Bool
isEven    a   => ...
```

**Behavior**

Returns true if `a` is an even integer.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

isEven  2  // False
isEven  1  // True
isEven  0  // True
isEven -1  // True
isEven -2  // False
```

### `isOdd`

**Signature**

```Clean
// CLEAN

isOdd :: Int -> Bool
isOdd    a   => ...
```

**Behavior**

Returns true if `a` is an odd integer.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

isOdd  2  // True
isOdd  1  // False
isOdd  0  // False
isOdd -1  // False
isOdd -2  // True
```

---

## Conversions to integer

### From real number

**Signature**

```Clean
// CLEAN

toInt :: Real -> Int
toInt    a    => ...
```

**Behavior**

Rounds up or down `a` to its nearest integer.

**Usage**

```Clean
// CLEAN

toInt   1.5   //  2
toInt   1.4   //  1
toInt   0.0   //  0
toInt (-1.4)  // -1
toInt (-1.5)  // -2
```

### From character

**Signature**

```Clean
// CLEAN

toInt :: Char -> Int
toInt    a    => ...
```

**Behavior**

Returns the ASCII encoding of `a`.

**Usage**

```Clean
// CLEAN

toInt '1'  //  49
toInt '9'  //  59
toInt 'A'  //  65
toInt 'Z'  //  90
toInt 'a'  //  97
toInt 'z'  // 122
```

### From string

**Signature**

```Clean
// CLEAN

toInt :: {#Char} -> Int
toInt    a       => ...
```

**Behavior**

It attempts to parse `a` as an integer.
If it is unsuccessful, it returns zero.

**Usage**

```Clean
// CLEAN

toInt "1.0"   //  0
toInt "1"     //  1
toInt "0"     //  0
toInt "-1"    // -1
toInt "-1.0"  //  0
```

---

## Conversions from integer

The desired type must be unambiguous.

### To real number

**Signature**

```Clean
// CLEAN

fromInt :: Real -> Int
fromInt    a    => ...
```

**Behavior**

Sets the decimal places of `a` to zeroes.

**Usage**

```Clean
// CLEAN

expr :: Real
expr =  fromInt  1  // 1.0
expr =  fromInt  0  // 0.0
```

### To character

**Signature**

```Clean
// CLEAN

fromInt :: Int -> Char
fromInt    a   => ...
```

**Behavior**

Returns the character whose ASCII encoding is `a`.

**Usage**

```Clean
// CLEAN

expr :: Char
expr =  fromInt 49   // '1'
expr =  fromInt 59   // '9'
expr =  fromInt 65   // 'A'
expr =  fromInt 90   // 'Z'
expr =  fromInt 97   // 'a'
expr =  fromInt 122  // 'z'
```

### To string

**Signature**

```Clean
// CLEAN

fromInt :: Int -> {#Char}
fromInt    a   => ...
```

**Behavior**

Returns the string representation of `a`.

**Usage**

```Clean
// CLEAN

expr :: {#Char}
expr =  fromInt 1  // "1"
expr =  fromInt 0  // "0"
```
