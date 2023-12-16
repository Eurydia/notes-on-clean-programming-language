---
Date of last full revision: 16/DEC/2023
---

# StdArray

Visit [SystemArray](https://cloogle.org/src/#base-stdenv/StdArray;icl;line=1) on Cloogle for source code of this module.

## Functions

### `select`

**Signature**

```clean
// CLEAN

select :: {T} Int -> T
select    A   i   => ...
```

**Behavior**

Returns the element at position `i` of array `A`.
Results in a run-time error when over-indexing or under-indexing.

```console
$ Run Time Error: index out of range
```

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
size    A   => ...
```

**Behavior**

Returns the size of the array `A`.

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
update    A   i   a => ...
```

**Behavior**

Replaces the element at position `i` of array `A` with a new element `a`.
Results in a run-time error when over-indexing or under-indexing.

```console
$ Run Time Error: index out of range
```

**Usage**

```clean
// CLEAN
 
update "abcde"   5  'X'  // Run-time error
update "abcde"   2  'C'  // "abCde"
update "abcde"   0  'A'  // "Abcde"
update "abcde" (-1) 'X'  // Run-time error
```

