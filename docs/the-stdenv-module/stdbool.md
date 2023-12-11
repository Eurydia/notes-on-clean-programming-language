# `StdBool`

Visit [StdBool](https://cloogle.org/src/#base-stdenv/StdBool;icl;line=1) on Cloogle for source code of this module.

## Operations and functions

### Logical negation

**Signature**

```Clean
// Language: Clean

not :: Bool -> Bool
not    a    => ...
```

**Behavior**

It negates the logical value of `a`.

**Usage**

```Clean
// Language: Clean

not True        // False
not False       // True
not (not True)  // True
```

### Logical equivalence

**Signature**

```Clean
// Language: Clean

(==) infix 4 :: Bool Bool -> Bool
(==)            a    b    => ...
```

**Behavior**

It returns true if `a` and `b` have the same logical value.

**Usage**

```Clean
// Language: Clean

True  == True   // True
True  == False  // False
False == True   // False
False == False  // True
```

### Logical OR

**Signature**

```Clean
// Language: Clean

(||) infixr 2 :: Bool Bool -> Bool
(||)             a    b    => ...
```

**Behavior**

It returns true if `a` or `b` is true.

**Usage**

```Clean
// Language: Clean

True  || True   // True
True  || False  // True
False || True   // True
False || False  // False
```

### Logical AND

**Signature**

```Clean
// Language: Clean

(&&) infixr 3 :: Bool Bool -> Bool
(&&)             a    b    => ...
```

**Behavior**

It returns true if `a`and `b` are true.

**Usage**

```Clean
// Language: Clean

True  && True   // True
True  && False  // False
False && True   // False
False && False  // False
```

---

## Conversions From Boolean Type

They explicitly convert Boolean type to other types.
The desired type must be unambiguous.

### To String type

**Signature**

```Clean
// Language: Clean

fromBool :: Bool -> { # Char }
fromBool    a    => ...
```

**Behavior**

It returns a string representation of `a`.

**Usage**

```Clean
// Language: Clean

expr :: { # Char }
expr =  fromBool True   // "True"
expr =  fromBool False  // "False"
```
