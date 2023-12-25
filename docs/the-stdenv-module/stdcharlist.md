---
Date of last full revision: 16/DEC/2023
---

# StdCharList

This module can be imported individually or as a part of the *Standard Environment*.
If CLEAN ever has a proper IO and formatting functionalities, I think this module would be just that.

Visit [StdCharList](https://cloogle.org/src/#base-stdenv/StdCharList;icl;line=1) on Cloogle for source code of this module.

## Text alignment functions

These functions pad the start and end of a character list until it has a specified length.

### `cjustify`

**Signature**

```clean
// CLEAN

cjustify :: Int [Char] -> [Char]
cjustify    n   s      => ...
```

**Behavior**

Pads the start and end of string `s` with spaces until its width is equal to `n`.
The padding at the end of the string is prioritized.

**Usage**

```clean
// CLEAN

cjustify 5 ['abc']  // [' ', 'a', 'b', 'c', ' ']
cjustify 5 ['ab']   // [' ', 'a', 'b', ' ', ' ']
cjustify 3 ['ab']   // ['a', 'b', ' ']
cjustify 3 ['a']    // [' ', 'a', ' ']
cjustify 1 ['ab']   // ['a', 'b']
```

### `ljustify`

**Signature**

```clean
// CLEAN

ljustify :: Int [Char] -> [Char]
ljustify    n   s      => ...
```

**Behavior**

Pads the end of string `s` with spaces until its width is equal to `n`.

**Usage**

```clean
// CLEAN

ljustify 5 ['abc']  // ['a', 'b', 'c', ' ', ' ']
ljustify 5 ['ab']   // ['a', 'b', ' ', ' ', ' ']
ljustify 3 ['ab']   // ['a', 'b', ' ']
ljustify 3 ['a']    // ['a', ' ', ' ']
ljustify 1 ['ab']   // ['a', 'b']
```

### `rjustify`

**Signature**

```clean
// CLEAN

rjustify :: Int [Char] -> [Char]
rjustify    n   s      => ...
```

**Behavior**

Pads the start of string `s` with spaces until the width is equal to `n`.

**Usage**

```clean
// CLEAN

rjustify 5 ['abc']  // [' ', ' ', 'a', 'b', 'c']
rjustify 5 ['ab']   // [' ', ' ', 'a', 'b']
rjustify 3 ['ab']   // [' ', 'a', 'b']
rjustify 3 ['a']    // [' ', ' ', 'a']
rjustify 1 ['ab']   // ['a', 'b']
```

## Line manipulation functions

These functions transform and interact with the newline characters in a character list by either removing or adding them.

### `flatlines`

**Signature**

```clean
// CLEAN

flatlines :: [[Char]] -> [Char]
flatlines    cMat     => ...
```

**Behavior**

Flattens two-dimensional character list `cMat` and join them with newline characters.

**Usage**

```clean
// CLEAN

flatlines [['a'], ['b']]  // ['a', '\n', 'b', '\n']
flatlines ['a']           // ['a', '\n']
flatlines []              // []
```

### `mklines`

**Signature**

```clean
// CLEAN

mklines :: [Char] -> [[Char]]
mklines    cList  => ...
```

**Behavior**

Splits a character list `cList` at newline characters and transform it into two-dimensional character list.
The newline characters are removed from the result.

**Usage**

```clean
// CLEAN

mklines ['a', '\n', 'b', '\n']  // [['a'], ['b']]
mklines ['a', '\n']             // [['a']]
mklines []                      // []
```
