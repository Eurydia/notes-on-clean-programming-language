---
Date of last full revision: 25 DEC 2023
---

# StdString

This module can be imported directly or as a part of the `StdEnv` module.
It provides useful definition for many critical interaction with strings.

Visit [StdString](https://cloogle.org/src/#base-stdenv/StdString;icl;line=1) on Cloogle for source code of this module.

## Basic operations

These operators provide ways to manipulate strings.

Note that strings are simply arrays of characters, operations on arrays will work on strings also.

### Concatenation

**Signature**

```clean
// CLEAN

(+++) infixr 5 :: {#Char} {#Char} -> {#Char}
(+++)             strL    strR    => ...
```

**Behavior**

Joins the string `strR` to the end of `strL`.

**Usage**

```clean
// CLEAN
 
"123" +++ "45"  // "12345"
"123" +++ "4"   // "1234"
"123" +++ ""    // "123"
```

### Slicing

**Signature**

```clean
// CLEAN

(%) infixl 9 :: {#Char} (Int, Int) -> {#Char}
(%)             strL    (l, r)     => ...
```

**Behavior**

Returns characters which are inclusive between the position `l` and `r`.

**Usage**

```
// CLEAN
 
"123" % (  2,  4)  // "3"
"123" % (  0,  2)  // "123"
"123" % ((-1), 0)  // "12"
"123" % ((-2), 5)  // "123"
```

### Update

**Signature**

```clean
// CLEAN

(:=) infixl 9 :: {#Char} (Int, Char) -> {#Char}
(:=)             str     (idx, ch)   => ...
```

**Behavior**

Overrides the character at the position `idx` with the given character `ch`.

Results in a run-time error when over-indexing or under-indexing.

```console
$ Index too high in UPDATE string.
```

**Usage**

```clean
// CLEAN
 
"abcde" := (  5,  'X')  // run-time error
"abcde" := (  2,  'C')  // "abCde"
"abcde" := (  0,  'A')  // "Abcde"
"abcde" := ((-1), 'A')  // run-time error
```

---

## Relational operations

CLEAN performs pairwise to compare two strings.
I recommend looking at the usage examples if the behavior is unclear.

### Equal to

**Signature**

```clean
// CLEAN

(==) infix 4 :: {#Char} {#Char} -> Bool
(==)            strL    strR    => ...
```

**Behavior**

Returns true if the two strings are equal.
Otherwise, returns false.

**Usage**

```clean
// CLEAN

""   == ""    // True
"12" == "12"  // True
"12" == "1"   // False
"1"  == "12"  // False
"12" == "13"  // False
"13" == "12"  // False
```

### Not equal to

**Signature**

```clean
// CLEAN

(<>) infix 4 :: {#Char} {#Char} -> Bool
(<>)            strL    strR    => ...
```

**Behavior**

Returns true if the two strings are not equal.
Otherwise, returns false.

**Usage**

```clean
// CLEAN

""   <> ""    // False
"12" <> "12"  // False
"12" <> "1"   // True
"1"  <> "12"  // True
"12" <> "13"  // True
"13" <> "12"  // True
```

### Less than

**Signature**

```clean
// CLEAN

(<) infix 4 :: {#Char} {#Char} -> Bool
(<)            strL    strR    => ...
```

**Behavior**

Returns true if the first string is lexically less than the second string. 
Otherwise, returns false.

**Usage**

```clean
// CLEAN

""   < ""    // False
"12" < "12"  // False
"12" < "1"   // False
"1"  < "12"  // True
"12" < "13"  // True
"13" < "12"  // False
```

### Less than or equal to

**Signature**

```clean
// CLEAN

(<=) infix 4 :: {#Char} {#Char} -> Bool
(<=)            strL    strR    => ...
```

**Behavior**

Returns true if the first string is lexically less than or equal to the second string.
Otherwise, returns false.

**Usage**

```
// CLEAN

""   <= ""    // True
"12" <= "12"  // True
"12" <= "1"   // False
"1"  <= "12"  // True
"12" <= "13"  // True
"13" <= "12"  // False
```

### Greater than

**Signature**

```clean
// CLEAN

(>) infix 4 :: {#Char} {#Char} -> Bool
(>)            strL    strR    => ...
```

**Behavior**

Returns true if the first string is lexically greater than the second string.
Otherwise, returns false.

**Usage**

```
// CLEAN

""   > ""    // False
"12" > "12"  // False
"12" > "1"   // True
"1"  > "12"  // False
"12" > "13"  // False
"13" > "12"  // True
```

### Greater than or equal to

**Signature**

```clean
// CLEAN

(>=) infix 4 :: {#Char} {#Char} -> Bool
(>=)            strL    strR    => ...
```

**Behavior**

Returns true if the first string is lexically greater than or equal to the second string.
Otherwise, returns false.

**Usage**

```clean
// CLEAN

""   >= ""    // True
"12" >= "12"  // True
"12" >= "1"   // True
"1"  >= "12"  // False
"12" >= "13"  // False
"13" >= "12"  // True
```

---
