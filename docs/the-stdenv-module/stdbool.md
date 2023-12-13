# StdBool

Visit [StdBool](https://cloogle.org/src/#base-stdenv/StdBool;icl;line=1) on Cloogle for source code of this module.

## Operations

### Logical equivalence

**Signature**

```clean
// CLEAN

(==) infix 4 :: Bool Bool -> Bool
(==)            a    b    => ...
```

**Behavior**

Returns true if `a` and `b` have the same logical value.
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

Returns true if at least one of `a` and `b` has a logical value of true. 
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

Returns true if the truth value of `a` and `b` are true.
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

## Functions

### Negation

**Signature**

```clean
// CLEAN

not :: Bool -> Bool
not    a    => ...
```

**Behavior**

Negates the logical value of `a`.

**Usage**

```clean
// CLEAN

not True   // False
not False  // True
```

---

## Conversions from Boolean

### To string

**Signature**

```clean
// CLEAN

fromBool :: Bool -> { # Char }
fromBool    a    => ...
```

**Behavior**

Returns the string representation of the logical value of `a`.

**Usage**

```clean
// CLEAN

expr :: { # Char }
expr =  fromBool True   // "True"
expr =  fromBool False  // "False"
```
