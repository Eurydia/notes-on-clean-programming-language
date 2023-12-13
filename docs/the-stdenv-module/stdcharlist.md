# StdCharList

Visit [StdCharList](https://cloogle.org/src/#base-stdenv/StdCharList;icl;line=1) on Cloogle for source code of this module.

## Text alignment functions

### `cjustify`

**Signature**

```clean
// CLEAN

cjustify :: Int [Char] -> [Char]
cjustify    n   str    => ...
```

**Behavior**

Pads the start and end of `str` with spaces until the width is equal to `n`.

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
ljustify    n   str    => ...
```

**Behavior**

Pads the end of `str` with spaces until the width is equal to `n`.

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
rjustify    n   str    => ...
```

**Behavior**

Pads the start of `str` with spaces until the width is equal to `n`.

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
flatlines    lstr     => ...
```

**Behavior**

Flattens `lstr` and join them with newline characters.

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
mklines    str    => ...
```

**Behavior**

Splits `str` at newline characters.

**Usage**

```clean
// CLEAN

mklines ['a', '\n', 'b', '\n']  // [['a'], ['b']]
mklines ['a', '\n']             // [['a']]
mklines []                      // []
```
