# StdMisc

Visit [StdMisc](https://cloogle.org/src/#base-stdenv/StdMisc;icl;line=1) on Cloogle for source code of this module.

## Constants

### Undefined Entity

**Implementation**

```Clean
// Language: Clean

undef :: anyType
undef = abort "Run-time error! Program evaluated undefined value?!"
```

**Definition**: represents an undefined value.
Forces a program to terminate if it is ever evaluated.

---

## Functions

### `abort`

**Signature**

```Clean
abort :: {#Char} -> anyType
abort    a       => ...
```

**Behavior**: terminates the program and return an error message `a`.

**Usage**

```
// Language: Clean
 
abort "Terminated"  // "Terminated"
```

---