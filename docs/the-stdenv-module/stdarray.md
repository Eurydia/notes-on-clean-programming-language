# StdArray

Visit [SystemArray](https://cloogle.org/src/#base-stdenv/StdArray;icl;line=1) on Cloogle for source code of this module.

## Functions

### `select`

**Signature**

```
// CLEAN

select :: { T } Int -> T
select    A     i   => ...
```

**Behavior**

Returns the `i`-th element of `A`.
Results in a run-time error when over-indexing or under-indexing.

```
Run Time Error: index out of range
```

**Usage**

```
// CLEAN
 
select "abcde" 5     // Run-time error
select "abcde" 2     // 'c'
select "abcde" 0     // 'a'
select "abcde" (-1)  // Run-time error
```

### `size`

**Signature**

```
// CLEAN

size :: { T } -> Int
size    A     => ...
```

**Behavior**

Returns the number of elements that `A` can hold.

**Usage**

```
// CLEAN
 
size "abcde"  // 5
size "abcd"   // 4
size "abc"    // 3
size "ab"     // 2
```

### `update`

**Signature**

```
// CLEAN

update :: { T } Int T -> { T } 
update    A     i   a => ...
```

**Behavior**

Replaces the `i`-th element of `A` with `a`.
Results in a run-time error when over-indexing or under-indexing.

```
Run Time Error: index out of range
```

**Usage**

```
// CLEAN
 
update "abcde"   5  'X'  // Run-time error
update "abcde"   2  'C'  // "abCde"
update "abcde"   0  'A'  // "Abcde"
update "abcde" (-1) 'X'  // Run-time error
```

