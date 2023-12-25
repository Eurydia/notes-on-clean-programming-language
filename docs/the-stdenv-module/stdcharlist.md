---
Date of last full revision: 25/DEC/2023
---

# StdCharList

This module can be imported directly or as a part of the `StdEnv` module.
If CLEAN ever has a proper IO and formatting functionalities, I think this module would be just that.

Visit [StdCharList](https://cloogle.org/src/#base-stdenv/StdCharList;icl;line=1) on Cloogle for source code of this module.

## Text alignment functions

These functions pad the start and end of a character list until it has a specified length.

### `cjustify`

**Signature**

```clean
// CLEAN

cjustify :: Int     [Char] -> [Char]
cjustify    wLength cList  => ...
```

**Behavior**

Pads the start and end of character list `cList` with spaces until its width is equal to `wLength`.

The padding at the end of the string is prioritized.

This function does nothing if the length of the list is already equal to or greater than the desired length.

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

ljustify :: Int     [Char] -> [Char]
ljustify    wLength cList  => ...
```

**Behavior**

Pads the end of character list `cList` with spaces until its width is equal to `wLength`.

This function does nothing if the length of the list is already equal to or greater than the desired length.

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

rjustify :: Int     [Char] -> [Char]
rjustify    wLength cList  => ...
```

**Behavior**

Pads the start of character list `cList` with spaces until the width is equal to `wLength`.

This function does nothing if the length of the list is already equal to or greater than the desired length.

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
flatlines [['a']]         // ['a', '\n']
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
