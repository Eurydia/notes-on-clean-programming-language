# StdBool

Visit [StdBool](https://cloogle.org/src/#base-stdenv/StdBool;icl;line=1) on Cloogle for source code of this module.

## Operations and functions

### Negation

**Signature**

```
// CLEAN

not :: Bool -> Bool
not    a    => ...
```

**Behavior**

Negates the logical value of `a`.

**Usage**

```
// CLEAN

not True   // False
not False  // True
```

### Logical equivalence

**Signature**

```
// CLEAN

(==) infix 4 :: Bool Bool -> Bool
(==)            a    b    => ...
```

**Behavior**

Returns true if `a` and `b` have the same logical value.
Otherwise, returns false.

**Usage**

```
// CLEAN

True  == True   // True
True  == False  // False
False == True   // False
False == False  // True
```

### Logical inclusive disjunction

**Signature**

```
// CLEAN

(||) infixr 2 :: Bool Bool -> Bool
(||)             a    b    => ...
```

**Behavior**

Returns `true` if at least one of `a` and `b` has a logical value of `true`. 
Otherwise, returns `false`.

**Usage**

```
// CLEAN

True  || True   // True
True  || False  // True
False || True   // True
False || False  // False
```

### Logical conjunction

**Signature**

```
// CLEAN

(&&) infixr 3 :: Bool Bool -> Bool
(&&)             a    b    => ...
```

**Behavior**

Returns true if the truth value of `a` and `b` are true.
Otherwise, returns false.

**Usage**

```
// CLEAN

True  && True   // True
True  && False  // False
False && True   // False
False && False  // False
```

---

## Conversions from Boolean

### To string

**Signature**

```
// CLEAN

fromBool :: Bool -> { # Char }
fromBool    a    => ...
```

**Behavior**

Returns the string representation of the logical value of `a`.

**Usage**

```
// CLEAN

expr :: { # Char }
expr =  fromBool True   // "True"
expr =  fromBool False  // "False"
```
