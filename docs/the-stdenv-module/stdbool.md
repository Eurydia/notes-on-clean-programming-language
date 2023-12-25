---
Date of last full revision: 16/DEC/2023
---

# StdBool

This module can be imported individually or as a part of the *Standard Environment*.
It provides definitions for logical operations.

Although the size of the module is small compare to other primitive data types provided by CLEAN, this module is still quite important, on the account that it defines *logical equivalence*.

That is correct, without this module, CLEAN has no idea how to perform one of the most fundamental operation is Boolean algebra.

Visit [StdBool](https://cloogle.org/src/#base-stdenv/StdBool;icl;line=1) on Cloogle for source code of this module.

## Logical operations

Three logical operations are defined by this module.

### Logical equivalence

**Signature**

```clean
// CLEAN

(==) infix 4 :: Bool Bool -> Bool
(==)            a    b    => ...
```

**Behavior**

Returns true if both operands have the same logical value.
Otherwise, returns false.

**Usage**

```clean
// CLEAN

True  == True   // True
True  == False  // False
False == True   // False
False == False  // True
```

### Logical inclusive disjunction

**Signature**

```clean
// CLEAN

(||) infixr 2 :: Bool Bool -> Bool
(||)             a    b    => ...
```

**Behavior**

Returns true if at least one operand is true. 
Otherwise, returns false.

**Usage**

```clean
// CLEAN

True  || True   // True
True  || False  // True
False || True   // True
False || False  // False
```

### Logical conjunction

**Signature**

```clean
// CLEAN

(&&) infixr 3 :: Bool Bool -> Bool
(&&)             a    b    => ...
```

**Behavior**

Returns true if both operands are true.
Otherwise, returns false.

**Usage**

```clean
// CLEAN

True  && True   // True
True  && False  // False
False && True   // False
False && False  // False
```

---

## Logical functions

Although, technically speaking, *logical negation* is a unary operator, there is no such thing as a unary operator in CLEAN, as much as it pains me, I have decided to place it here.

### Logical negation

**Signature**

```clean
// CLEAN

not :: Bool -> Bool
not    a    => ...
```

**Behavior**

Negates the logical value of *a*.

**Usage**

```clean
// CLEAN

not True   // False
not False  // True
```

---

## Conversions from Boolean

The function which is responsible for converting Boolean to other types is overloaded, which means the desired type must be unambiguous.

Natively, Boolean may convert to string, but additional behavior may be added by creating new instances of *fromBool* class from *StdOverloaded* module.

### To string

**Signature**

```clean
// CLEAN

fromBool :: Bool -> {#Char}
fromBool    a    => ...
```

**Behavior**

Returns the string representation of `a` which is either "True" or "False".

**Usage**

```clean
// CLEAN

expr :: {#Char}
expr =  fromBool True   // "True"
expr =  fromBool False  // "False"
```
