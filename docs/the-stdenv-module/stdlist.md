---
Date of last full revision: 25 DEC 2023
---

# StdList

This module can be imported directly or as a part of the `StdEnv` module.
It provides definitions for operators and functions critical for interaction of lists.

Visit [StdList](https://cloogle.org/src/#base-stdenv/StdList;icl;icl;line=1) on Cloogle for source code of this module.

## Basic operations

These operators provide ways to manipulate lists.
Some of these operators have great importance since they are the only way of interacting with lists.

### Concatenation

**Signature**

```Clean
// CLEAN

(++) infixr 5 :: [T] [T] -> [T]
(++)             lsA lsB => ...
```

**Behavior**

Concatenates the list `lsB` to the end of list `lsA`.

**Usage**

```Clean
// CLEAN
 
[1, 2, 3] ++ [4, 5]  // [1, 2, 3, 4, 5]
[1, 2, 3] ++ [4]     // [1, 2, 3, 4]
[1, 2, 3] ++ []      // [1, 2, 3]
```

### Indexing

**Signature**

```Clean
// CLEAN

(!!) infixl 9 :: [T] Int -> T
(!!)             ls  idx => ...
```


**Behavior**

Returns the element at position `idx` of the list `ls`.
CLEAN starts counting index from zero.

Results in a run-time error when over-indexing or under-indexing.

```console
$ Subscript error in !!,index too large
```

**Usage**

```Clean
// CLEAN
 
[1, 2, 3] !!   5   // Run-time error
[1, 2, 3] !!   2   // 3
[1, 2, 3] !!   0   // 1
[1, 2, 3] !! (-1)  // Run-time error
```

### Slicing

**Signature**

```Clean
// CLEAN

(%) infixl 9 :: [T] (Int, Int) -> [T]
(%)             ls  (l, r)     => ...
```

**Behavior**

Returns elements inclusively between position `l` and position `r` of the list  `A`.

**Usage**

```Clean
// CLEAN
 
[1, 2, 3] % (  2,  4)  // [3]
[1, 2, 3] % (  0,  2)  // [1, 2, 3]
[1, 2, 3] % ((-1), 0)  // [1, 2]
[1, 2, 3] % ((-2), 5)  // [1, 2, 3]
```

---

## Relational operations

CLEAN performs pairwise to compare two lists, so by extension, two lists are only comparable if they contain the same element type.

Additionally, if the relational operation is not defined on the element type, it is not meaningful to compare two lists containing such type.

I suggest that if the behavior is unclear, check the usage example.
I try to include a comprehensive use case for each operators.

### Equal to

**Signature**

```Clean
// CLEAN

(==) infix 4 :: [T] [T] -> Bool | == T
(==)            lsA lsB => ...
```

The type `T` must be an instance of the `Equality` class from the `StdOverloaded` module.

**Behavior**

Returns true if the list `lsA` and the list `lsB` are pairwise equal.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

[]     == []      // True
[1, 2] == [1, 2]  // True
[1, 2] == [1]     // False
[1]    == [1, 2]  // False
[1, 2] == [1, 3]  // False
[1, 3] == [1, 2]  // False
```

### Not equal to

**Signature**

```Clean
// CLEAN

(<>) infix 4 :: [T] [T] -> Bool | == T
(<>)            A   B   => ...
```

The type `T` must be an instance of the `Equality` class from the `StdOverloaded` module.

**Behavior**

Returns true if list `A` and list `B` are not pairwise equal.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

[]     <> []      // False
[1, 2] <> [1, 2]  // False
[1, 2] <> [1]     // True
[1]    <> [1, 2]  // True
[1, 2] <> [1, 3]  // True
[1, 3] <> [1, 2]  // True
```

### Less than

**Signature**

```Clean
// CLEAN

(<) infix 4 :: [T] [T] -> Bool | Ord T
(<)            lsA lsB => ...
```

The type `T` must be and instance of the `Ord` class from the `StdClass` module.

**Behavior**

Returns true if list `lsA` and list `lsB` are pairwise less than.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

[]     < []      // False
[1, 2] < [1, 2]  // False
[1, 2] < [1]     // False
[1]    < [1, 2]  // True
[1, 2] < [1, 3]  // True
[1, 3] < [1, 2]  // False
```

### Less than or equal to

**Signature**

```Clean
// CLEAN

(<=) infix 4 :: [T] [T] -> Bool | Ord T
(<=)            lsA lsB => ...
```

The type `T` must be and instance of the `Ord` class from the `StdClass` module.

**Behavior**

Returns true if list `lsA` and list `lsB` are pairwise less than or equal.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

[]     <= []     // True
[1, 2] <= [1, 2] // True
[1, 2] <= [1]    // False
[1]    <= [1, 2] // True
[1, 2] <= [1, 3] // True
[1, 3] <= [1, 2] // False
```

### Greater than

**Signature**

```Clean
// CLEAN

(<=) infix 4 :: [T] [T] -> Bool | Ord T
(<=)            lsA lsB => ...
```

The type `T` must be and instance of the `Ord` class from the `StdClass` module.

**Behavior**

Returns true if list `lsA` and list `lsB` are pairwise greater than.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

[]     > []      // False
[1, 2] > [1, 2]  // False
[1, 2] > [1]     // True
[1]    > [1, 2]  // False
[1, 2] > [1, 3]  // False
[1, 3] > [1, 2]  // True
```

### Greater than or equal to

**Signature**

```Clean
// CLEAN

(>=) infix 4 :: [T] [T] -> Bool | Ord T
(>=)            lsA lsB => ...
```

The type `T` must be and instance of the `Ord` class from the `StdClass` module.

**Behavior**

Returns true if list `lsA` and list `lsB` are pairwise greater than or equal.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

[]     >= []      // True
[1, 2] >= [1, 2]  // True
[1, 2] >= [1]     // True
[1]    >= [1, 2]  // False
[1, 2] >= [1, 3]  // False
[1, 3] >= [1, 2]  // True
```

---

## Basic functions

These functions provide methods to interacting with lists.
Unlike some operations, the behaviors of these functions can be achieved using regular CLEAN syntax, but they are provided mostly for convenience purposes.

### `length`

**Signature**

```clean
// CLEAN

length :: [T] -> Int
length    ls  => ...
```

**Behavior**

Returns the number of elements in the list.

**Usage**

```Clean
// CLEAN

length [1, 2, 3]  // 3
length [1, 2]     // 2
length [1]        // 1
length []         // 0
```

### `flatten`

**Signature** 

```clean
// CLEAN

flatten :: [[T]] -> [T]
flatten    mat   => ...
```

**Behavior**

Transforms a two-dimensional list into a one-dimensional list.

**Usage**

```Clean
// CLEAN

flatten [[1], [2], [3]]  // [1, 2, 3]
flatten [[1], [2, 3]]    // [1, 2, 3]
flatten [[1, 2, 3]]      // [1, 2, 3]
flatten []               // []
```

### `hd`

**Signature** 

```clean
// CLEAN

hd :: [T] -> T
hd    ls  => ...
```

**Behavior**

Returns the first element of the list.

Results in a run-time error if the given list is empty.

```console
$ hd of []
```

**Usage**

```Clean
// CLEAN

hd [1, 2, 3]  // 1
hd [1, 2]     // 1
hd [1]        // 1
hd []         // run-time error
```

### `tl`

**Signature** 

```clean
// CLEAN

tl :: [T] -> [T]
tl    ls  => ...
```

**Behavior**

Returns the list with the first element excluded.

Results in a run-time error if the list is empty.

```console
$ tl of []
```

**Usage**

```Clean
// CLEAN

tl [1, 2, 3]  // [2, 3]
tl [1, 2]     // [2]
tl [1]        // []
tl []         // run-time error
```

### `last`

**Signature** 

```clean
// CLEAN

last :: [T] -> T
last    ls  => ...
```

**Behavior**

Returns the last element of the list.

Results in a run-time error if the given list is empty.

```console
$ last of []
```

**Usage**

```Clean
// CLEAN

last [1, 2, 3]  // 3
last [1, 2]     // 2
last [1]        // 1
last []         // run-time error
```

### `init`

**Signature** 

```clean
// CLEAN

init :: [T] -> [T]
init    ls  => ...
```

**Behavior**

Returns the list with the last element excluded.

Results in a run-time error if the given list is empty.

```console
$ init of []
```

**Usage**

```Clean
// CLEAN

init [1, 2, 3]  // [1, 2]
init [1, 2]     // [1]
init [1]        // []
init []         // NOT OK
```

### `take`

**Signature**

```clean
// CLEAN

take :: Int [T] -> [T]
take    cnt ls  => ...
```

**Behavior**

Returns the first `cnt` elements of of the list.

If `cnt` is greater than or equal to the length of the list, returns the entire list.

**Usage**

```Clean
// CLEAN

take 2 [1, 2, 3]  // [1, 2]
take 1 [1, 2]     // [1]
take 0 [1]        // []
take 0 []         // []
```

### `drop`

**Signature**

```clean
// CLEAN

drop :: Int [T] -> [T]
drop    cnt ls  => ...
```

**Behavior**

Returns the list with the first `cnt` elements excluded.

If `cnt` is greater than or equal to the length of the list, returns an empty list.

**Usage**

```Clean
// CLEAN

drop 2 [1, 2, 3]  // [3]
drop 1 [1, 2]     // [2]
drop 1 [1]        // []
drop 0 []         // []
```

### `reverse`

**Signature**

```clean
// CLEAN

reverse :: [T] -> [T]
reverse    ls  => ...
```

**Behavior**

Returns the list in reversed order.

**Usage**

```Clean
// CLEAN

reverse [1, 2, 3]  // [3, 2, 1]
reverse [1, 2]     // [2, 1]
reverse [1]        // [1]
reverse []         // []
```

### `insertAt`

**Signature**

```clean
// CLEAN

insertAt :: Int T [T] -> [T]
insertAt    idx e ls  => ...
```

**Behavior**

Inserts an element `e` into the position `idx` of the list.
The previous element at the position `idx` is moved to the right if there is such an element.

The position starts from zero.

**Usage**

```Clean
// CLEAN

insertAt   2  9 [1, 2]  // [1, 2, 9]
insertAt   1  9 [1, 2]  // [1, 9, 2]
insertAt   0  9 [1, 2]  // [9, 1, 2]
insertAt (-1) 9 [1, 2]  // [1, 2, 9]
```

### `removeAt`

**Signature**

```clean
// CLEAN

removeAt :: Int [T] -> [T]
removeAt    idx ls  => ...
```

**Behavior**

Removes the element at position `idx` from the list.
The position starts from zero.

**Usage**

```Clean
// CLEAN

removeAt   2  [1, 2]  // [1, 2]
removeAt   1  [1, 2]  // [1]
removeAt   0  [1, 2]  // [2]
removeAt (-1) [1, 2]  // [1,2]
```

### `updateAt`

**Signature**

```clean
// CLEAN

updateAt :: Int T [T] -> [T]
updateAt    idx e ls  => ...
```

**Behavior**

Overrides the element at position `idx` with a new element `e`.

If the `idx` is not a valid index of the list, does nothing.

**Usage**

```Clean
// CLEAN

updateAt   2  9 [1, 2]  // [1, 2]
updateAt   1  9 [1, 2]  // [1, 9]
updateAt   0  9 [1, 2]  // [9, 2]
updateAt (-1) 9 [1, 2]  // [1, 2]
```

### `splitAt`

**Signature**

```clean
// CLEAN

splitAt :: Int [T] => ([T], [T])
splitAt    idx ls  => ...
```

**Behavior**

Splits the list into two smaller lists at position `idx`.
The element at position `idx` moves to the second list.

The position starts from zero.

**Usage**

```Clean
// CLEAN

splitAt   2  [1, 2]  // ([1, 2], [])
splitAt   1  [1, 2]  // ([1], [2])
splitAt   0  [1, 2]  // ([], [1, 2])
splitAt (-1) [1, 2]  // ([1, 2], [])
```

### `indexList`

**Signature**

```clean
// Clean

indexList :: [T] -> [Int]
indexList    ls  => ...
```

**Behavior**

Returns a list of indexes equal to the length of the list.
If the given list is empty, returns an empty list.

**Usage**

```Clean
// CLEAN

indexList [3, 2, 1]  // [0, 1, 2]
indexList [1, 2]     // [0, 1]
indexList [2]        // [0]
indexList []         // []
```

### `repeat`

**Signature**

```clean
// CLEAN

repeat T -> [T]
repeat e => ...
```

**Behavior**

Returns a list of containing infinitely many of the given element `e`.

**Usage**

```Clean
// CLEAN

repeat 0     // [0, 0, 0, ...]
repeat 1.0   // [1.0, 1.0, 1.0, ...]
repeat 'a'   // ['a', 'a', 'a', ...] 
repeat True  // [True, True, True, ...]
```

### `repeatn`

**Signature** 

```clean
// CLEAN

repeatn :: Int T -> [T]
repeat     cnt e => ...
```

**Behavior**

Generates a list of length `cnt` contain a single element `e`.

**Usage**

```Clean
// CLEAN

repeatn 0 0     // []
repeatn 1 1.0   // [1.0]
repeatn 2 'a'   // ['a', 'a'] 
repeatn 3 True  // [True, True, True]
```

### `isMember`

**Signature**

```clean
// CLEAN

isMember :: T [T] -> Bool | == T
isMember    e ls  => ...
```

The type `T` must be an instance of the `Equality` class from `StdOverloaded` module.

**Behavior**

Returns true if the list contains the given element.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

isMember 4 [1, 2, 3]  // False
isMember 2 [1, 2, 3]  // True
isMember 1 []         // False
```

### `isAnyMember`

**Signature**

```clean
// CLEAN

isAnyMember :: [T] [T] -> Bool | == T
isAnyMember    lsA lsB => ...
```

The type `T` must be an instance of the `Equality` class from `StdOverloaded` module.

**Behavior**

Returns true if at least one element of the list `lsB` is an element of the list `lsA`.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

isAnyMember [1, 2] [1, 2]  // True
isAnyMember [1, 2] [1]     // True
isAnyMember [1, 2] [3, 4]  // False
isAnyMember [1, 2] []      // False
isAnyMember [] [1, 2]      // False
```

### `removeDup`

**Signature**

```clean
// CLEAN

removeDup :: [T] -> [T] | == T
removeDup    ls  => ...
```

The type `T` must be an instance of the class `Equality` from the `StdOverloaded` module.

**Behavior**

Removes duplicate elements from the given list.
Only the first occurrence of each element and discard other occurrences.

**Usage**

```Clean
// CLEAN

removeDup [1, 2, 2, 3]  // [1, 2, 3]
removeDup [1, 2, 3, 4]  // [1, 2, 3, 4]
removeDup []            // []
```

### `removeMember`

**Signature**

```clean
// CLEAN

removeMember :: T [T] -> [T] | == T
removeMember    e ls  => ...
```

The type `T` must be an instance of the `Equality` class from `StdOverloaded` module.

**Behavior**

Removes the first occurrence of the given element from the list.

**Usage**

```Clean
// CLEAN

removeMember 4 [1, 2, 2, 3]  // [1, 2, 2, 3]
removeMember 2 [1, 2, 2, 3]  // [1, 2, 3]
removeMember 1 [1, 2, 2, 3]  // [2, 2, 3]
removeMember 0 []            // []
```

### `removeMembers`

**Signature**

```clean
// CLEAN

removeMember :: [T] [T] -> [T] | == T
removeMember    oLs rLs  => ...
```

The type `T` must be an instance of the `Equality` class from `StdOverloaded` module.

**Behavior**

Removes the first occurrence of each element in the list `rLs` from the list `oLs`.

**Usage**

```Clean
// CLEAN

removeMembers [1, 2, 3] []  // [1, 2, 3]
removeMembers [2, 3] [1]    // [2, 3]
removeMembers [1, 1] [1]    // [1]
removeMembers [] [1, 2]     // []
```

### `removeIndex`

**Signature**

```clean
// CLEAN

removeIndex :: T [T] -> (Int, [T]) | == T
removeIndex    e ls  => ...
```

The type `T` must be an instance of the `Equality` class from the `StdOverloaded` module.

**Behavior**

Removes the first occurrence of the given element `e` from the list `ls`, then returns its index and the modified list.

Results in a run-time error the list does not contain the given element.

```console
$ Error in removeIndex: element not found
```

**Usage**

```Clean
// CLEAN

removeIndex 2 [1, 2, 2, 3]  // (1, [1, 2, 3])
removeIndex 1 [1, 2, 2, 3]  // (0, [2, 2, 3])
removeIndex 3 [1, 2, 2, 3]  // (2, [1, 2, 2])
removeIndex 4 [1, 2, 2, 3]  // run-time error
```

### `sum`

**Signature**

```clean
// CLEAN

sum :: [T] -> T | (+ T) & (zero T)
sum    ls  => ... 
```

The type `T` must be an instance of the `zero` and `Addition` class from `StdOverloaded`.

**Behavior**

Returns the sum of the list.

Under the hood, the function adds every element together using the defined addition operation and zero unit on the type `T`.

**Usage**

```Clean
// CLEAN

sum [1, 2, 3, 4]  // 10
sum [1, 2, 3]     // 6
sum [1, 2]        // 3
sum [1]           // 1
```

### `prod`

**Signature**

```clean
// CLEAN

prod :: [T] -> T | (+ T) & (zero T)
prod    ls  => ... 
```

The type `T` must be an instance of the `one` and `Multiplication` class from `StdOverloaded`.

**Behavior**

Returns the product of the list.

Under the hood, the function multiplies every element together using the defined multiplication operation and one unit on the type `T`.

**Usage**

```Clean
// CLEAN

prod [1, 2, 3, 4]  // 24
prod [1, 2, 3]     // 6
prod [1, 2]        // 3
prod [1]           // 1
```

### `avg`

**Signature**

```clean
// CLEAN

avg :: [T] -> T | (IncDec T) & (/ T)
avg    ls  => ... 
```

The type `T` must be an instance of the `IncDec` class from `StdClass` module and the `Division` class from `StdOverloaded`.

**Behavior**

Returns the average of the list.

Under the hood, the function adds every element together using the defined addition operation and zero unit on the type `T`, then it divides the sum by the length of the list.

Results in a run-time error if the given list is empty.

```console
$ avg called with empty list
```

**Usage**

```Clean
// CLEAN

avg [1, 2, 3, 4]  // 2
avg [1, 2, 3]     // 2
avg [1, 2]        // 1
avg [1]           // 1
avg []            // run-time error
```

### `and`

**Signature**

```clean
// CLEAn

and :: [Bool] -> Bool
and    bLs    => ...
```

**Behavior**

Returns true if every element in the given list is true.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

and [False, False]  // False
and [False, True]   // True
and [True, True]    // True
and [False]         // False
and [True]          // True
and []              // True
```

### `or`

**Signature**

```clean
// CLEAn

or :: [Bool] -> Bool
or    bLs    => ...
```

**Behavior**

Returns true if at least one element in the given list is true.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

or [False, False]  // False
or [False, True]   // True
or [True, True]    // True
or [False]         // False
or [True]          // True
or []              // False
```

---

## Higher-order functions

These are functions which accepts a list and another functions as arguments.
They provided a similar functionality to their basic counterpart but with additional flexibility.

### `takeWhile`

**Signature** 

```clean
// CLEAN

takeWhile :: (T -> Bool) [T] -> [T]
takeWhile    predicate   ls  => ...
```

**Behavior**

It performs the `predicate` on each element of the given list starting from the left.

If the predicate returns true for an element, it will be collected into the result.

If the predicate returns false for an element, the function stops and returns the element it has collected so far.

**Usage**

```Clean
// CLEAN

takeWhile isOdd  [1, 1, 1]  // [1, 1, 1]
takeWhile isOdd  [1, 2, 3]  // [1]
takeWhile isEven [1, 2, 3]  // []
takeWhile isOdd  []         // []
```

### `dropWhile`

**Signature** 

```clean
// CLEAN

dropWhile :: (T -> Bool) [T] -> [T]
dropWhile    predicate   ls  => ...
```

**Behavior**

It performs the `predicate` on each element of the given list starting from the left.

If the predicate returns true for an element, it will be discarded.

If the predicate returns false for an element, the function stops and the rest of the list.

**Usage**

```Clean
// CLEAN

dropWhile isOdd  [1, 1, 1]  // []
dropWhile isOdd  [1, 2, 3]  // [2, 3]
dropWhile isEven [1, 2, 3]  // [1, 2, 3]
dropWhile isOdd  []         // []
```

### `filter`

**Signature** 

```clean
// CLEAN

filter :: (T -> Bool) [T] -> [T]
filter    predicate   ls  => ...
```

**Behavior**

Filters the list using the given predicate, keeping only the element which yields true.

**Usage**

```Clean
// CLEAN

filter isEven [2, 3, 4]  // [2, 4]
filter isEven [1, 2, 3]  // [2, 3]
filter isOdd  [1, 2, 3]  // [1]
filter isOdd  [2, 3, 4]  // [3]
filter isOdd  []         // []
```

### `foldr`

**Signature**

```clean
// CLEAN

foldr :: (T -> K -> K) K [T] -> K
foldr    func          s ls  => ...
```

**Behavior**

Folds the list from left to right using the given `func`.
The starting value is determined by the argument `s`.

**Usage**

```Clean
// CLEAN

foldr (+) 0 [1, 2, 3]  // 1 + (2 + (3 + 0))
foldr (+) 0 [3, 2, 1]  // 3 + (2 + (1 + 0))
foldr (^) 1 [1, 2, 3]  // 1 ^ (2 ^ (3 ^ 1))
foldr (^) 1 [3, 2, 1]  // 3 ^ (2 ^ (1 ^ 1))
```

### `foldl`

**Signature**

```clean
// CLEAN

foldl :: (K -> T -> K) K [T] -> T
foldl    func          s ls  => ...
```

**Behavior**

Folds the list from right to left using the given `func`.
The starting value is determined by the argument `s`.

**Usage**

```Clean
// CLEAN

foldl (+) 0 [1, 2, 3]  // ((0 + 1) + 2) + 3
foldr (+) 0 [3, 2, 1]  // ((0 + 3) + 2) + 1
foldl (^) 1 [1, 2, 3]  // ((1 ^ 1) ^ 2) ^ 3
foldl (^) 1 [3, 2, 1]  // ((1 ^ 3) ^ 2) ^ 1
```

### `iterate`

**Signature**

```clean
// CLEAN

iterate :: (T -> T) T -> [T]
iterate    func     e => ...
```

**Behavior**

Returns an infinite list by repeatedly apply the `func` to `e`.

**Usage**

```Clean
// CLEAN

iterate ((+) 1) 0  // [0, 1, 2, ...]
iterate ((*) 2) 1  // [1, 2, 4, ...]
iterate toInt   1  // [1, 1, 1, ...]
```

### `map`

**Signature** 

```clean
// CLEAN

map :: (T -> K) [T] -> [K]
map    func     ls  => ...
```

**Behavior**

Applies the function `func` to every element of the given list.

**Usage**

```Clean
// CLEAN

map isEven  [1, 2, 3]  // [False, True, False]
map toReal  [1, 2, 3]  // [1.0, 2.0, 3.0]
map ((+) 2) [1, 2, 3]  // [3, 4, 5]
```

### `scan`

**Signature** 


```clean
// CLEAN

scan :: (T -> K -> T) T [K] -> [T]
scan    func          e ls  => ...
```

**Behavior**

Generates a list of reduced values from apply the function `func` to elements in the given list.

**Usage**

```Clean
// CLEAN

scan (+) 0 [1, 2, 3]
// [0, 0 + 1, (0 + 1) + 2, ((0 + 1) + 2) + 3]
// [0, 1, 3, 6]

scan (+) 0 [3, 2, 1]
// [0, 0 + 3, (0 + 3) + 2, ((0 + 3) + 2) + 1]
// [0, 3, 5, 6]

scan (^) 1 [1, 2, 3]
// [1, 1 ^ 1, (1 ^ 1) ^ 2, ((1 ^ 1) ^ 2) ^ 3]
// [1, 1, 1, 1]

scan (^) 1 [3, 2, 1]
// [1, 1 ^ 3, (1 ^ 3) ^ 2, ((1 ^ 3) ^ 2) ^ 1]
// [1, 1, 1, 1]
```

### `all`

**Signature** 

```clean
// CLEAN

all :: (T -> Bool) [T] -> Bool
all    predicate   ls  => ...
```

**Behavior**

Applies the function `predicate` to every element in the given list and returns true if at every element yields true.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

all isEven [1, 2, 3]  // False
all isOdd  [1, 2, 3]  // False
all isEven [2, 4, 6]  // True
all isOdd  [1, 3, 5]  // True
all isEven []         // True
all isOdd  []         // True
```

### `any`

**Signature** 

```clean
// CLEAN

any :: (T -> Bool) [T] -> Bool
any    predicate   ls  => ...
```

**Behavior**

Applies the function `predicate` to every element in the given list and returns true if at least one element yields true.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

any isEven [1, 2, 3]  // True
any isOdd  [1, 2, 3]  // True
any isEven [1, 3, 5]  // False
any isOdd  [2, 4, 6]  // False
any isEven []         // False
any isOdd  []         // False
```

---

## Validator functions

The function is not so difficult to defined, but they are convenient to use.

### `isEmpty`

**Signature**

```clean
// CLEAN

isEmpty :: [T] -> Bool
isEmpty	   A   => ...
```

**Behavior**

Returns true if the list is empty.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

isEmpty []   // True
isEmpty [1]  // False
```
