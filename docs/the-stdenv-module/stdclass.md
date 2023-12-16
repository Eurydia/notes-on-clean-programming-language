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

- [[stdoverloaded#`+` class|+ class]],
- [[stdoverloaded#`-` class|- class]], and
- [[stdoverloaded#`zero` class|zero class]].

### `MultDiv`

**Declaration**

```clean
// CLEAN

class MultDiv T | (* T) & (/ T) & (one T)
```

**Definition**

Ensures that type `T` is an instance of the following classes:

- [\*](stdoverloaded.md#`*`),
- [/](stdoverloaded#`/`), and
- [one](stdoverloaded.md#`one`).

### `Arith`

**Declaration**

```clean
// CLEAN

class Arith T | (PlusMin T) & (MultDiv T) & (abs T) & (sign T) & (~ T)
```

**Definition**

Ensures that type `T` is an instance of the following classes:

- [+](stdoverloaded.md#`+`),
- [-](stdoverloaded#`-`),
- [zero](stdoverloaded.md#`zero`),
- [\*](stdoverloaded.md#`*`),
- [/](stdoverloaded#`/`),
- [one](stdoverloaded.md#`one`),
- [abs](stdoverloaded.md#`abs`),
- [sign](stdoverloaded.md#`sign`), and
- [~](stdoverloaded.md#`~`).

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

- [+](stdoverloaded.md#`+`),
- [-](stdoverloaded#`-`),
- [zero](stdoverloaded.md#`zero`), and
- [one](stdoverloaded.md#`one`).

### `Enum`

**Declaration**

```clean
// CLEAN

class Enum T | (< T) & (IncDec T)
```

**Definition**

Ensures that type `T` is an instance of the following classes:

- [+](stdoverloaded.md#`+`),
- [-](stdoverloaded#`-`),
- [zero](stdoverloaded.md#`zero`),
- [one](stdoverloaded.md#`one`), and
- [<](stdoverloaded#`<`).

---

## Relational Classes

### `Eq`

**Declaration**

```clean
// CLEAN

class Eq T | == T
where
    (<>) infixl 4 :: T T -> Bool
    (<>)             x y =  not (x == y)
```

**Definition**

Defines the `<>` operation for type `T` if it is an instance of the [\=\=](stdoverloaded.md#`==`) class.

### `Ord`

**Declaration**

```clean
// CLEAN

class Ord T | < T
where
    (<=) infixl 4 :: T T -> Bool
    (<=)             x y =  not (y < x)

    (>) infixl 4 :: T T -> Bool
    (>)             x y =  y < x

    (>=) infixl 4 :: T T -> Bool
    (>=)             x y =  not (x < y)

    min :: T T -> T
    min    x y =  case (x < y) of
                  True = x
                  _    = y

    max :: T T -> T
    max    x y =  case (x < y) of
                  True = y
                  _    = x
```

**Definition**

Defines the `<=`, `>`, and `>=` operations, as well as, the `min`, and `max` functions for type `T` if it is an instance of the [<](stdoverloaded#`<`) class.
