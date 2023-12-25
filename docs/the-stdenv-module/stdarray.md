---
Date of last full revision: 16/DEC/2023
---

# StdArray

This module can be imported directly or as a part of the `StdEnv` module.
It provides some basic functions which can be used to interact with arrays.
When compared to other modules in the Standard Environment, this module is much smaller due to the implementations of arrays in CLEAN.

Visit [\_SystemArray](https://cloogle.org/src/#base-stdenv/_SystemArray;icl;line=1) on Cloogle for source code of this module.

A few functions were omitted due to their lack of documentation.
Namely:

- `createArray`
- `_createArray`
- `usize`
- `uselect`
- `replace`

## Array functions

### `select`

**Signature**

```clean
// CLEAN

select :: {T} Int -> T
select    Arr i   => ...
```

**Behavior**

Returns the element at position `i` of the array.
The index starts from zero.

Results in a run-time error when over-indexing or under-indexing.

```console
$ Run Time Error: index out of range
```

Note that CLEAN provides a syntax for array indexing.

**Usage**

```clean
// CLEAN

select "abcde" 5     // Run-time error
select "abcde" 2     // 'c'
select "abcde" 0     // 'a'
select "abcde" (-1)  // Run-time error
```

### `size`

**Signature**

```clean
// CLEAN

size :: {T} -> Int
size    Arr => ...
```

**Behavior**

Returns the size of the array.

**Usage**

```clean
// CLEAN

size "abcde"  // 5
size "abcd"   // 4
size "abc"    // 3
size "ab"     // 2
```

### `update`

**Signature**

```clean
// CLEAN

update :: {T} Int T -> {T}
update    Arr i   e => ...
```

**Behavior**

Updates the element at position `i` of the array with a new element `e`.
The index starts from zero.

Results in a run-time error when over-indexing or under-indexing.

```console
$ Run Time Error: index out of range
```

Note that CLEAN provides a syntax for updating an element of an array at a specific index with a new element.

**Usage**

```clean
// CLEAN

update "abcde"   5  'X'  // Run-time error
update "abcde"   2  'C'  // "abCde"
update "abcde"   0  'A'  // "Abcde"
update "abcde" (-1) 'X'  // Run-time error
```
