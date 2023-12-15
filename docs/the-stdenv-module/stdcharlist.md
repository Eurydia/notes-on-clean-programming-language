# StdCharList

Visit [StdCharList](https://cloogle.org/src/#base-stdenv/StdCharList;icl;line=1) on Cloogle for source code of this module.

## Text alignment functions

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

### `flatlines`

**Signature**

```clean
// CLEAN

flatlines :: [[Char]] -> [Char]
flatlines    ls       => ...
```

**Behavior**

Flattens two-dimensional character array `ls` and join them with newline characters.

**Usage**

```
// Language: Clean

flatlines [['a'], ['b']]  // ['a', '\n', 'b', '\n']
flatlines ['a']           // ['a', '\n']
flatlines []              // []
```

### `mklines`

**Signature**

```clean
// CLEAN

mklines :: [Char] -> [[Char]]
mklines    ls     => ...
```

**Behavior**

Splits character array `ls` at newline characters and transform it into two-dimensional character array.
The newline characters are removed.

**Usage**

```clean
// CLEAN

mklines ['a', '\n', 'b', '\n']  // [['a'], ['b']]
mklines ['a', '\n']             // [['a']]
mklines []                      // []
```
