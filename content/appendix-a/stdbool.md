---
title: "Appendix A: StdBool"
---

## Logical Operations 

### Logical NEGATE

**Signature**

```
// Language: Clean

not :: Bool -> Bool
not    a    =  ...
```

**Behavior**: negates the logical value of `a`.

**Usage**

```
// Language: Clean

not True        // False
not False       // True
not (not True)  // True
```

### Logical EQUIVALENCE

**Signature**

```
// Language: Clean

(==) infix 4 :: Bool Bool -> Bool
(==)            a    b    =  ...
```

**Behavior**: returns true if and only if both `a` and `b` share the same logical value.

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
(||)             a    b    =  ...
```

**Behavior**: returns false if and only if both `a` and `b` are false.

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
(&&)             a    b    =  ...
```

**Behavior**: returns true if and only if both `a`and `b` are true.

**Usage**

```
// Language: Clean

True  && True   // True
True  && False  // False
False && True   // False
False && False  // False
```
