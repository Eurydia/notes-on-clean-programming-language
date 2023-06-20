---
title: "Appendix A: StdBool"
---

## Introduction

The [StdBool](https://cloogle.org/src/#base-stdenv/StdBool;icl;line=1) module contains implementation for logical operations.

When imported, this module allows for:
- evaluation of Boolean expressions, and
- conversion from Boolean type.

---

## Logical Operations

### Logical EQUIVALENCE

**Signature**

```
// Language: Clean

(==) infix 4 :: Bool Bool -> Bool
(==)            a    b    => ...
```

**Behavior**: returns true if both `a` and `b` have the same logical value.

**Usage**

```
// Language: Clean

True  == True   // True
True  == False  // False
False == True   // False
False == False  // True
```

### Logical OR

**Signature**

```
// Language: Clean

(||) infixr 2 :: Bool Bool -> Bool
(||)             a    b    => ...
```

**Behavior**: returns true if  `a` or `b` is true.

**Usage**

```
// Language: Clean

True  || True   // True
True  || False  // True
False || True   // True
False || False  // False
```

### Logical AND

**Signature**

```
// Language: Clean

(&&) infixr 3 :: Bool Bool -> Bool
(&&)             a    b    => ...
```

**Behavior**: returns true if `a`and `b` are true.

**Usage**

```
// Language: Clean

True  && True   // True
True  && False  // False
False && True   // False
False && False  // False
```

---

## Logical Functions

### Logical NEGATE

**Signature**

```
// Language: Clean

not :: Bool -> Bool
not    a    => ...
```

**Behavior**: negates the logical value of `a`.

**Usage**

```
// Language: Clean

not True        // False
not False       // True
not (not True)  // True
```

---

## Conversions From Boolean Type

Explicitly converts Boolean type to other types.
The desired type must be unambiguous.

### To String type

**Signature**

```
fromBool :: Bool -> {#Char}
fromBool    a    => ...
```

**Behavior**: returns a string representation of `a`.

**Usage**

```
// Language: Clean

expr :: {#Char}
expr =  fromBool True   // "True"
expr =  fromBool False  // "False"
```