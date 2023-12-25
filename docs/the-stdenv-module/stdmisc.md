---
Date of last full revision: 25 DEC 2023
---

# StdMisc

This module can be imported directly or as a part of the `StdEnv` module.
As the name suggests, it provides definitions for miscellaneous functions you might need in your program.
Though, they mostly concern with program termination.

Visit [StdMisc](https://cloogle.org/src/#base-stdenv/StdMisc;icl;line=1) on Cloogle for source code of this module.

## Units

### Undefined Entity

**Implementation**

```cleanm
// CLEAN

undef ::  anyType
undef :== ...
```

**Definition**

Represents an undefined value.

Forces a program to terminate if it is ever evaluated.
Under the hood, it invokes the `abort` function with a specific error message.

---

## Functions

### `abort`

**Signature**

```Clean
abort :: {#Char} -> anyType
abort    errMsg  => ...
```

**Behavior**

Terminates the program and return an error message `errMsh`.

**Usage**

```clean
// CLEAN
 
abort "Terminated"  // "Terminated"
```

---