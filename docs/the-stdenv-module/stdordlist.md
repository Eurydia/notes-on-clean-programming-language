---
Date of last full revision: 25 DEC 2023
---

# StdOrdList

This module can be imported directly or as a part of the `StdEnv` module.
It provides definitions for list-ordering functions.

Visit [StdOrdList](https://cloogle.org/src/#base-stdenv/StdOrdList;icl;line=1) on Cloogle for source code of this module.

## Basic functions

These functions are not too difficult to define, but they are convenient to use.

### `sort`

**Signature** 

```clean
// CLEAN

sort :: [T] -> [T] | Ord T
sort    ls  => ...
```

The type `T` must be an instance of the `Ord` class from the `StdClass` module.

**Behavior**

Sorts the list in ascending order.
Under the hood, this function uses merge sort.

**Usage**

```clean
// CLEAN

sort [1, 1, 1]  // [1, 1, 1]
sort [1, 2, 3]  // [1, 2, 3]
sort [2, 1, 3]  // [1, 2, 3]
sort []         // []
```

### `maxList`

**Signature** 

```clean
// CLEAN

maxList :: [T] -> T | Ord T
maxList    ls  => ...
```

The type `T` must be an instance of the `Ord` class from the `StdClass` module.

**Behavior**

Returns the largest element of the list.
Under the hood, this function uses the equality and less than operations to determine which element to return.

Results in a run-time error if the given list is empty.

```console
$ maxList of []
```

**Usage**

```clean
// CLEAN

maxList [1, 1, 1]  // 1
maxList [1, 2, 3]  // 3
maxList []         // run-time error
```

### `minList`

**Signature** 

```clean
// CLEAN

minList :: [T] -> T | Ord T
minList    ls  => ...
```

The type `T` must be an instance of the `Ord` class from the `StdClass` module.

**Behavior**

Returns the smallest element of the list.
Under the hood, this function uses the equality and less than operations to determine which element to return.

Results in a run-time error if the given list is empty.

```console
$ minList of []
```

**Usage**

```clean
// CLEAN

minList [1, 1, 1]  // 1
minList [1, 2, 3]  // 1
minList []         // run-time error
```

---

## Higher-order functions

### `sortBy`

**Signature** 

```clean
// CLEAN

sortBy :: (T -> T -> Bool) [T] -> [T]
sortBy    sortRule         ls  => ...
```

The type `T` must be an instance of the `Ord` class from the `StdClass` module.

**Behavior**

Sorts the list based on the given `sortRule` function.

**Usage**

```clean
// CLEAN

sortBy (>) [1, 1, 1]  // [1, 1, 1]
sortBy (>) [1, 2, 3]  // [3, 2, 1]
sortBy (>) [2, 1, 3]  // [3, 2, 1]
sortby (>) []         // []
```

### `maxListBy`

**Signature** 

```clean
// CLEAN

maxListBy :: (T -> T -> Bool) [T] -> [T]
maxListBy    maxRule          ls  => ...
```

The type `T` must be an instance of the `Ord` class from the `StdClass` module.

**Behavior**

Returns the largest element from the given list.
The largest element is determined by the given `maxRule` function.

Results in a run-time error if the given list is empty.

```console
$ maxListBy of []
```

**Usage**

```clean
// CLEAN

maxListBy (<) [1, 2, 3]  // 3
maxListBy (>) [1, 1, 1]  // 1
maxListBy (>) [1, 2, 3]  // 1
maxListBy (>) []         // run-time error
```

### `minListBy`

**Signature** 

```clean
// CLEAN

maxListBy :: (T -> T -> Bool) [T] -> [T]
maxListBy    minRule          ls  => ...
```

The type `T` must be an instance of the `Ord` class from the `StdClass` module.

**Behavior**

Returns the smallest element from the given list.
The smallest element is determined by the given `minRule` function.

Results in a run-time error if the given list is empty.

```console
$ minListBy of []
```

**Usage**

```clean
// CLEAN

minListBy (<) [1, 2, 3]  // 1
minListBy (>) [1, 1, 1]  // 1
minListBy (>) [1, 2, 3]  // 3
minListBy (>) []         // run-time error
```
