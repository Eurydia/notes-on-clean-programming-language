# StdArray

Visit [SystemArray](https://cloogle.org/src/#base-stdenv/StdArray;icl;line=1) on Cloogle for source code of this module.

%% 
IMPORTANT: this part should be contained in notes detailing arrays, since they concern with syntax.


## Operations

### Element at

**Signature** (pseudo)

```
// CLEAN

??? :: { T } Int -> T
???    arr   i   => ...
```

**Behavior**

Returns `i`-th element of `arr`.

Results in a run-time error when over-indexing or under-indexing.

```
Run Time Error: index out of range
```

**Usage**

```
// CLEAN
 
"abcde".[5]     // Run-time error
"abcde".[2]     // 'c'
"abcde".[0]     // 'a'
"abcde".[(-1)]  // Run-time error
```

### Update at

**Signature** (pseudo)

```
// CLEAN

??? :: { T } Int T -> { T } 
???    arr   i   e => ...
```


**Behavior**: 

Replace the `i`-th element of `arr` with `e`.

Results in a run-time error when over-indexing or under-indexing.

```
Run Time Error: index out of range
```

**Usage**

```
// CLEAN
 
{"abcde" & [5] = 'X'}     // Run-time error
{"abcde" & [2] = 'C'}     // "abCde"
{"abcde" & [0] = 'A'}     // "Abcde"
{"abcde" & [(-1)] = 'X'}  // Run-time error

{"abcde" & [0] = 'A', [1] = 'B'}  // "ABcde"
``` 

---

%%


## Functions

### `select`

**Signature**

```
// CLEAN

select :: { T } Int -> T
select    A     i   => ...
```

**Behavior**: 

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

Returns the size of `A`.

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

Updates the `i`-th element of `A` with `a`.
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

