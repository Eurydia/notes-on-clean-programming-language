---
Date of last full revision: 16/DEC/2023
---

# StdClass

Visit [StdClass](https://cloogle.org/src/#base-stdenv/StdClass;icl;line=1) on Cloogle for source code of this module.

## Arithmetic Classes

### `PlusMin`

**Declaration**

```clean
// CLEAN

class PlusMin T | (+ T) & (- T) & (zero T)
```

**Definition**

Ensures that type `T` is an instance of the following classes:

- `+` class,
- `-` class, and
- `zero` class.

### `MultDiv`

**Declaration**

```clean
// CLEAN

class MultDiv T | (* T) & (/ T) & (one T)
```

**Definition**

Ensures that type `T` is an instance of the following classes:

- `*` class,
- `/` class, and
- `one` class.

### `Arith`

**Declaration**

```clean
// CLEAN

class Arith T | (PlusMin T) & (MultDiv T) & (abs T) & (sign T) & (~ T)
```

**Definition**

Ensures that type `T` is an instance of the following classes:

- `+` class,
- `-` class,
- `zero` class,
- `*` class,
- `/` class,
- `one` class,
- `abs` class,
- `sign` class, and
- `~` class.

### `IncDec`

**Declaration**

```clean
// CLEAN

class IncDec T | (+ T) & (- T) & (one T) & (zero T)
where
    inc :: T -> T | + , one a

    dec :: T -> T | - , one a
```

**Definition**

Defines the `inc` and `dec` functions for type `T` if it is an instance of the following classes:

- `+` class,
- `-` class,
- `zero` class, and
- `one` class.

### `Enum`

**Declaration**

```clean
// CLEAN

class Enum T | (< T) & (IncDec T)
```

**Definition**

Ensures that type `T` is an instance of the following classes:

- `+` class,
- `-` class,
- `zero` class,
- `one` class, and
- `<` class.

---

## Relational Classes

### `Eq`

**Declaration**

```clean
// CLEAN

class Eq T | == T
where
    (<>) infixl 4 :: T T -> Bool
```

**Definition**

Defines the `<>` operation for type `T` if it is an instance of the `==` class.

### `Ord`

**Declaration**

```clean
// CLEAN

class Ord T | < T
where
    (<=) infixl 4 :: T T -> Bool

    (>) infixl 4 :: T T -> Bool

    (>=) infixl 4 :: T T -> Bool

    min :: T T -> T

    max :: T T -> T
```

**Definition**

Defines the `<=`, `>`, and `>=` operations, as well as, the `min`, and `max` functions for type `T` if it is an instance of the `<` class.
