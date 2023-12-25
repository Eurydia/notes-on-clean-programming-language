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

I think an imperative style code provides a better illustration for this operator.

```python
# Python

def eq(lsA: list[T], lsB: list[T]) -> bool:
	if not (len(lsA) == len(lsB)):
		return False
	for a, b in zip(lsA, lsB):
		if not (a == b):
			return False
	return True
```

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

```text
lsA := [a1, a2, a3, ..., an]
lsB := [b1, b2, b3, ..., bm]
```

It performs equality operation on `a1` and `b1`, then `a2` and `b2`, and so on.

If every pair is not equal, returns true.
But if at least one pair is equal returns false.



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

If the length of list `lsA` is greater than or equal to the length of list `lsB`, returns false.

If the first element of `lsA` and `lsB` are equal, and the second element of `lsA` and `lsB` are equal, and the third element of `lsA` and `lsB` are equal, and so on, returns true.

If at least one pair is not equal, returns false.

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

### Less Than Or Equal To

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

Additionally, relational operations must be defined on $\text{T}$.

**Behavior**: checks if $A$ is less than or equal to $B$.

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

### Greater Than

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

Additionally, relational operations must be defined on $\textbf{T}$.

**Behavior**: checks if $A$ is greater than $B$.

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

### Greater Than Or Equal To

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

Additionally, relational operations must be defined on $\textbf{T}$.

**Behavior**: checks if $A$ is greater than or equal to $B$.

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

## Functions

### `length`

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Int}$.

**Behavior**: returns number of elements in $A$.

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

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $\[\[\textbf{T}\]\]$, and
- $R$ is of type $[\textbf{T}]$.

**Behavior**: concatenates elements $A$.

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

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

**Behavior**: returns the first element of $A$.
Results in a Run-time error if $A$ is empty.

```
hd of []
```

**Usage**

```Clean
// CLEAN

hd [1, 2, 3]  // 1
hd [1, 2]     // 1
hd [1]        // 1
hd []         // NOT OK
```

### `tl`

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: returns all except the first element of $A$.
A Run-time error will be thrown if $A$ is empty.

```
tl of []
```

**Usage**

```Clean
// CLEAN

tl [1, 2, 3]  // [2, 3]
tl [1, 2]     // [2]
tl [1]        // []
tl []         // NOT OK
```

### `last`

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

**Behavior**: returns the last element of $A$.
Results in a Run-time error if $A$ is empty.

```
last of []
```

**Usage**

```Clean
// CLEAN

last [1, 2, 3]  // 3
last [1, 2]     // 2
last [1]        // 1
last []         // NOT OK
```

### `init`

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: returns all except the last element of $A$.
Results in a Run-time error if $A$ is empty.

```
init of []
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

$$
\begin{align*}
n\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\textbf{Int}$, and
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: returns the first $n$ elements of $A$.

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

$$
\begin{align*}
n\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\textbf{Int}$, and
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: returns all but the first $n$ elements of $A$.

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

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: returns a reversed copy of $A$.

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

$$
\begin{align*}
i\rightarrow{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $i$ is of type $\textbf{Int}$,
- $a$ is of type $\textbf{T}$, and
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: inserts $a$ into the $i$-th index of $A$.
The previous element is shifted to the right to make room.

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

$$
\begin{align*}
i\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $i$ is of type $\textbf{Int}$, and
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: removes the element at $i$-th index of $A$.

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

$$
\begin{align*}
i\rightarrow{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $i$ is of type $\textbf{Int}$,
- $a$ is of type $\textbf{T}$, and
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: replaces the element at $i$-th index of $A$ with $a$.

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

$$
\begin{align*}
i\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $i$ is of type $\textbf{Int}$,
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $([\textbf{T}], [\textbf{T}])$.

**Behavior**: splits $A$ into two at $i$-th index.
The element at $i$-th index goes to the second half.

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

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $[\textbf{Int}]$.

**Behavior**: generates a list of indexes from $A$.

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

$$
\begin{align*}
{a}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{T}$, and
- $R$ is of type $[\textbf{T}]$.

**Behavior**: generates an infinite list of the same element $a$.

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

$$
\begin{align*}
{n}\rightarrow{a}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\textbf{Int}$,
- $a$ is of type $\textbf{T}$, and
- $R$ is of type $[\textbf{T}]$.

**Behavior**: generates a list of the same element $a$ with length of $n$.

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

$$
\begin{align*}
a\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where 
- $a$ is of type $\textbf{T}$,
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

Additionally, equality operation must be defined on $\textbf{T}$.

**Behavior**: checks $a$ is a member of $A$ or not.

**Usage**

```Clean
// CLEAN

isMember 4 [1, 2, 3]  // False
isMember 2 [1, 2, 3]  // True
isMember 1 []         // False
```

### `isAnyMember`

**Signature**

$$
\begin{align*}
{A}\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where 
- $A$ and $B$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

Additionally, equality operation must be defined on $\textbf{T}$.

**Behavior**: returns true if any element of $B$ is also a element of $A$.

**Usage**

```Clean
// CLEAN

isAnyMember [1, 2] [1, 2]  // True
isAnyMember [1, 2] [3, 4]  // False
isAnyMember [1, 2] []      // False
isAnyMember [] [1, 2]      // False
```

### `removeDup`

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ and $R$ are of type $[\textbf{T}]$.

Additionally, equality operation must be defined on $\textbf{T}$.

**Behavior**: removes duplicate elements from $A$.

**Usage**

```Clean
// CLEAN

removeDup [1, 2, 2, 3]  // [1, 2, 3]
removeDup [1, 2, 3, 4]  // [1, 2, 3, 4]
removeDup []            // []
```

### `removeMember`

**Signature**

$$
\begin{align*}
{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where 
- $a$ is of type $\textbf{T}$, and
- $A$ and $R$ are of type $[\textbf{T}]$.

Additionally, equality operation must be defined on $\textbf{T}$.

**Behavior**: removes the first occurrence of $a$ from $A$.

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

$$
\begin{align*}
{A}\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where 
- $A$, $B$, and $R$ are of type $[\textbf{T}]$.

Additionally, equality operation must be defined on $\textbf{T}$.

**Behavior**: removes the first occurrences of the elements of $B$ from $A$.

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

$$
\begin{align*}
{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where 
- $a$ is of type $\textbf{T}$,
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $(\textbf{Int}, [\textbf{T}])$.

Additionally, equality operation must be defined on $\textbf{T}$.

**Behavior**: removes the first occurrence of $a$ from $A$ and returns the its index, as well as, the new list.
Results in a Run-time error if $a$ is not a member of $A$.

```
Error in removeIndex: element not found
```

**Usage**

```Clean
// CLEAN

removeIndex 2 [1, 2, 2, 3]  // (1, [1, 2, 3])
removeIndex 1 [1, 2, 2, 3]  // (0, [2, 2, 3])
removeIndex 4 [1, 2, 2, 3]  // NOT OK :(
```

### `sum`

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

Additionally, addition and zero unit must be defined on $\textbf{T}$.

**Behavior**: returns sum of $A$.

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

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

Additionally, multiplication and one unit must be defined on $\textbf{T}$.

**Behavior**: returns product of $A$.

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

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

Additionally, addition, zero unit, and division must be defined on $\textbf{T}$.

**Behavior**: returns average $A$.
Results in a Run-time error if $A$ is empty.

```
avg called with empty list
```

**Usage**

```Clean
// CLEAN

avg [1, 2, 3, 4]  // 2
avg [1, 2, 3]     // 2
avg [1, 2]        // 1
avg [1]           // 1
avg []            // NOT OK :(
```

### `and`

**Signature**

$$
\begin{align*}
{A_{b}}\rightarrow{R}
\end{align*}
$$

where:
- $A_{b}$ is of type $[\textbf{Bool}]$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns true if and only if every element of $A_{b}$ is true.

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

$$
\begin{align*}
{A_{b}}\rightarrow{R}
\end{align*}
$$

where:
- $A_{b}$ and $R$ are of type $[\textbf{Bool}]$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns false if and only if every element of $A_{b}$ is false.

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

## Higher-Order Functions

### `takeWhile`

**Signature** 
$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(\textbf{T}\rightarrow\textbf{Bool})$, and
- $A$ and $R$ is of type $[\textbf{T}]$.

**Behavior**: takes elements from the start of $A$ as long as $P$ is true.

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
$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(\textbf{T}\rightarrow\textbf{Bool})$, and
- $A$ and $R$ is of type $[\textbf{T}]$.

**Behavior**: discards elements from the start of $A$ as long as $P$ is true.

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
$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(\textbf{T}\rightarrow\textbf{Bool})$, and
- $A$ and $R$ is of type $[\textbf{T}]$.

**Behavior**: filters $A$ using $P$.

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

$$
\begin{align*}
f\rightarrow{k}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $(\textbf{T}\rightarrow\textbf{K}\rightarrow\textbf{K})$, 
- $k$ and $R$ are of type $\textbf{K}$, and
- $A$ is of type $[\textbf{T}]$.

**Behavior**: folds $A$ using a right-associative operation $f$.

**Usage**

```Clean
// CLEAN

foldr (+) 0 [1, 2, 3]
// 1 + (2 + (3 + 0))
// 6

foldr (+) 0 [3, 2, 1]
// 3 + (2 + (1 + 0))
// 6

foldr (^) 1 [1, 2, 3]
// 1 ^ (2 ^ (3 ^ 1))
// 1

foldr (^) 1 [3, 2, 1]
// 3 ^ (2 ^ (1 ^ 1))
// 9
```

### `foldl`

**Signature** 

$$
\begin{align*}
f\rightarrow{t}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $(\textbf{T}\rightarrow\textbf{K}\rightarrow\textbf{T})$, 
- $t$ is of type $\textbf{T}$,
- $A$ is of type $[\textbf{K}]$, and
- $R$ is of type $\textbf{T}$.

**Behavior**: folds $A$ using a left-associative operation $f$.

**Usage**

```Clean
// CLEAN

foldl (+) 0 [1, 2, 3]
// ((0 + 1) + 2) + 3
// 6

foldr (+) 0 [3, 2, 1]
// ((0 + 3) + 2) + 1
// 6

foldl (^) 1 [1, 2, 3]
// ((1 ^ 1) ^ 2) ^ 3
// 1

foldl (^) 1 [3, 2, 1]
// ((1 ^ 3) ^ 2)  ^ 1
// 1
```

### `iterate`

**Signature** 

$$
\begin{align*}
f\rightarrow{a}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $(\textbf{T}\rightarrow\textbf{T})$,
- $a$ is of type $\textbf{T}$, and
- $R$ is of type $[\textbf{T}]$.

**Behavior**: generates an infinite list by repeatedly apply $f$ to $a$.

**Usage**

```Clean
// CLEAN

iterate ((+) 1) 0  // [0, 1, 2, ...]
iterate ((*) 2) 1  // [1, 2, 4, ...]
iterate toInt   1  // [1, 1, 1, ...]
```

### `map`

**Signature** 

$$
\begin{align*}
f\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $\textbf{T}\rightarrow\textbf{K}$,
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $[\textbf{K}]$.

**Behavior**: applies $f$ to every element of $A$.

**Usage**

```Clean
// CLEAN

map isEven  [1, 2, 3]  // [False, True, False]
map toReal  [1, 2, 3]  // [1.0, 2.0, 3.0]
map ((+) 2) [1, 2, 3]  // [3, 4, 5]
```

### `scan`

**Signature** 

$$
\begin{align*}
f\rightarrow{a}\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $(\textbf{T}\rightarrow\textbf{K}\rightarrow\textbf{T})$, 
- $a$ is of type $\textbf{T}$,
- $B$ is of type $[\textbf{K}]$, and
- $R$ is of type $[\textbf{T}]$.

**Behavior**: generates a list of reduced values from apply $f$ to $A$.

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

### `any`

**Signature** 

$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(\textbf{T}\rightarrow\textbf{Bool})$, 
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns false if and only if $P$ does not hold for any element of $A$.

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

### `all`

**Signature** 

$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(\textbf{T}\rightarrow\textbf{Bool})$, 
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns true if and only if $P$ holds for every element of $A$.

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

---

## Validator functions

### `isEmpty`

**Signature**

```clean
// CLEAN

isEmpty :: [T] -> Bool
isEmpty	   A   => ...
```

**Behavior**

Returns true if list `A` is empty.
Otherwise, returns false.

**Usage**

```Clean
// CLEAN

isEmpty []   // True
isEmpty [1]  // False
```
