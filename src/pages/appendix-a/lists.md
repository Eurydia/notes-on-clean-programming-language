---
layout: "@layouts/Blog.astro"
title: "Appendix A: Lists"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Basic operations](#basic-operations)
- [Relational operations](#relational-operations)
- [Basic functions](#basic-functions)
- [Character list functions](#character-list-functions)
- [Boolean list functions](#boolean-list-functions)
- [Ordering functions](#ordering-functions)
- [Higher-order functions](#higher-order-functions)
- [Property functions](#property-functions)
 
## Basic operations 

### Concatenation

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where 
- $A, B, R$ are of type $[T]$.

**Behavior**: appends $B$ to the end of $A$.

**Usage**

```
// Language: Clean
 
[1, 2, 3] ++ [4, 5] // [1, 2, 3, 4, 5]
[1, 2, 3] ++ [4]    // [1, 2, 3, 4]
[1, 2, 3] ++ []     // [1, 2, 3]
```

### Indexing

**Signature**

$$
\begin{align*}
A\rightarrow{i}\rightarrow{R}
\end{align*}
$$

where :
- $A$ is of type $[T]$,
- $i$ is of type $\text{Int}$, and
- $R$ is of type $T$.

**Behavior**: returns element at $i$-th index of $A$.
A run-time error is thrown if $i$ is not a valid index.

**Usage**

```
// Language: Clean
 
[1, 2, 3] !!   5  // NOT OK :(
[1, 2, 3] !!   2  // 3
[1, 2, 3] !!   0  // 1
[1, 2, 3] !! (-1) // NOT OK :(
```

**Note**:

The run-time error has the following message:

```
Subscript error in !!,index too large
```

### Slicing

**Signature**

$$
\begin{align*}
A\rightarrow(i, j)\rightarrow{R}
\end{align*}
$$

where:
- $A, R$ are of type $[T]$, and
- $i, j$ are of type $\text{Int}$.

**Behavior**: returns elements of $A$ which are inside $[i, j]$ interval.

**Usage**

```
// Language: Clean
 
[1, 2, 3] % (  2,  4)  // [3]
[1, 2, 3] % (  0,  2)  // [1, 2, 3]
[1, 2, 3] % ((-1), 0)  // [1, 2]
[1, 2, 3] % ((-2), 5)  // [1, 2, 3]
```

[Back to top](#)

---

## Relational operations

### Equal to

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A, B$ are of type $[T]$, and
- $R$ is of type $\text{Bool}$.

Additionally, equality operation must be defined on $T$.

**Behavior**: checks if $A$ is equal to $B$.

**Usage**

```
// Language: Clean

[]     == []     // True
[1, 2] == [1, 2] // True
[1, 2] == [1]    // False
[1]    == [1, 2] // False
[1, 2] == [1, 3] // False
[1, 3] == [1, 2] // False
```

### Not equal to

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A, B$ are of type $[T]$, and
- $R$ is of type $\text{Bool}$.

Additionally, equality operation must be defined on $T$.

**Behavior**: checks if $A$ is not equal to $B$.

**Usage**

```
// Language: Clean

[]     <> []        // False
[1, 2] <> [1, 2]    // False
[1, 2] <> [1]       // True
[1]    <> [1, 2]    // True
[1, 2] <> [1, 3]    // True
[1, 3] <> [1, 2]    // True
```

### Less than

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A, B$ are of type $[T]$, and
- $R$ is of type $\text{Bool}$.

Additionally, inequality operations must be defined on $T$.

**Behavior**: checks if $A$ is less than $B$.

**Usage**

```
// Language: Clean

[]     < []     // False
[1, 2] < [1, 2] // False
[1, 2] < [1]    // False
[1]    < [1, 2] // True
[1, 2] < [1, 3] // True
[1, 3] < [1, 2] // False
```

### Less than or equal to

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A, B$ are of type $[T]$, and
- $R$ is of type $\text{Bool}$.

Additionally, inequality operations must be defined on $T$.

**Behavior**: checks if $A$ is less than or equal to $B$.

**Usage**

```
// Language: Clean

[]     <= []     // True
[1, 2] <= [1, 2] // True
[1, 2] <= [1]    // False
[1]    <= [1, 2] // True
[1, 2] <= [1, 3] // True
[1, 3] <= [1, 2] // False
```

### Greater than

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A, B$ are of type $[T]$, and
- $R$ is of type $\text{Bool}$.

Additionally, inequality operations must be defined on $T$.

**Behavior**: checks if $A$ is greater than $B$.

**Usage**

```
// Language: Clean

[]     > []     // False
[1, 2] > [1, 2] // False
[1, 2] > [1]    // True
[1]    > [1, 2] // False
[1, 2] > [1, 3] // False
[1, 3] > [1, 2] // True
```

### Greater than or equal to

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A, B$ are of type $[T]$, and
- $R$ is of type $\text{Bool}$.

Additionally, inequality operations must be defined on $T$.

**Behavior**: checks if $A$ is greater than or equal to $B$.

**Usage**

```
// Language: Clean

[]     >= []     // True
[1, 2] >= [1, 2] // True
[1, 2] >= [1]    // True
[1]    >= [1, 2] // False
[1, 2] >= [1, 3] // False
[1, 3] >= [1, 2] // True
```

[Back to top](#)

---

##  Basic functions

### length

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $\text{Int}$.

**Behavior**: returns number of elements in $A$.

**Usage**

```
// Language: Clean

length [1, 2, 3] // 3
length [1, 2]    // 2
length [1]       // 1
length []        // 0
```

### flatten

**Signature** 

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[[T]]$, and
- $R$ is of type $[T]$.

**Behavior**: concatenates elements $A$.

**Usage**

```
// Language: Clean

flatten [[1], [2], [3]] // [1, 2, 3]
flatten [[1], [2, 3]]   // [1, 2, 3]
flatten [[1, 2, 3]]     // [1, 2, 3]
flatten []              // []
```

### hd

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

**Behavior**: returns the first element of $A$.
A run-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

hd [1, 2, 3] // 1
hd [1, 2]    // 1
hd [1]       // 1
hd []        // NOT OK
```

**Note**:

The run-time error has the following message:

```
hd of []
```

### tl

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $[T]$.

**Behavior**: returns all except the first element of $A$.
A run-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

tl [1, 2, 3] // [2, 3]
tl [1, 2]    // [2]
tl [1]       // []
tl []        // NOT OK
```

**Note**:

The run-time error has the following message:

```
tl of []
```

### last

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

**Behavior**: returns the last element of $A$.
A run-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

last [1, 2, 3] // 3
last [1, 2]    // 2
last [1]       // 1
last []        // NOT OK
```

**Note**:

The run-time error has the following message:

```
last of []
```

### init

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $[T]$.

**Behavior**: returns all except the last element of $A$.
A run-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

init [1, 2, 3] // [1, 2]
init [1, 2]    // [1]
init [1]       // []
init []        // NOT OK
```

**Note**:

The run-time error has the following message:

```
init of []
```

### take

**Signature**

$$
\begin{align*}
n\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\text{Int}$,
- $A$ is of type $[T]$, and
- $R$ is of type $[T]$.

**Behavior**: returns the first $n$ elements of $A$.

**Usage**

```
// Language: Clean

take 2 [1, 2, 3] // [1, 2]
take 1 [1, 2]    // [1]
take 0 [1]       // []
take 0 []        // []
```

### drop

**Signature**

$$
\begin{align*}
n\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\text{Int}$,
- $A$ is of type $[T]$, and
- $R$ is of type $[T]$.

**Behavior**: returns all but the first $n$ elements of $A$.

**Usage**

```
// Language: Clean

drop 2 [1, 2, 3] // [3]
drop 1 [1, 2]    // [2]
drop 1 [1]       // []
drop 0 []        // []
```

### reverse

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A, R$ is of type $[T]$.

**Behavior**: returns a reversed copy of $A$.

**Usage**

```
// Language: Clean

reverse [1, 2, 3] // [3, 2, 1]
reverse [1, 2]    // [2, 1]
reverse [1]       // [1]
reverse []        // []
```

### insertAt

**Signature**

$$
\begin{align*}
i\rightarrow{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $i$ is of type $\text{Int}$,
- $a$ is of type $T$, and
- $A, R$ is of type $[T]$.

**Behavior**: inserts $a$ into the $i$-th index of $A$.
The previous element is shifted to the right to make room.

**Usage**

```
// Language: Clean

insertAt   2  9 [1, 2] // [1, 2, 9]
insertAt   1  9 [1, 2] // [1, 9, 2]
insertAt   0  9 [1, 2] // [9, 1, 2]
insertAt (-1) 9 [1, 2] // [1, 2, 9]
```

### removeAt

**Signature**

$$
\begin{align*}
i\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $i$ is of type $\text{Int}$, and
- $A, R$ is of type $[T]$.

**Behavior**: removes the element at $i$-th index of $A$.

**Usage**

```
// Language: Clean

removeAt   2  [1, 2] // [1, 2]
removeAt   1  [1, 2] // [1]
removeAt   0  [1, 2] // [2]
removeAt (-1) [1, 2] // [1,2]
```

### updateAt

**Signature**

$$
\begin{align*}
i\rightarrow{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $i$ is of type $\text{Int}$,
- $a$ is of type $T$, and
- $A, R$ is of type $[T]$.

**Behavior**: replaces the element at $i$-th index of $A$ with $a$.

**Usage**

```
// Language: Clean

updateAt   2  9 [1, 2] // [1, 2]
updateAt   1  9 [1, 2] // [1, 9]
updateAt   0  9 [1, 2] // [9, 2]
updateAt (-1) 9 [1, 2] // [1, 2]
```

### splitAt

**Signature**

$$
\begin{align*}
i\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $i$ is of type $\text{Int}$,
- $A$ is of type $[T]$, and
- $R$ is of type $([T], [T])$.

**Behavior**: splits $A$ into two at $i$-th index.
The element at $i$-th index goes to the second half.

**Usage**

```
// Language: Clean

splitAt   2  [1, 2] // ([1, 2], [])
splitAt   1  [1, 2] // ([1], [2])
splitAt   0  [1, 2] // ([], [1, 2])
splitAt (-1) [1, 2] // ([1, 2], [])
```

### indexList

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $[\text{Int}]$.

**Behavior**: generates a list indexes from $A$.

**Usage**

```
// Language: Clean

indexList [3, 2, 1] // [0, 1, 2]
indexList [1, 2]    // [0, 1]
indexList [2]       // [0]
indexList []        // []
```

### repeat

**Signature**

$$
\begin{align*}
{a}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $T$, and
- $R$ is of type $[T]$.

**Behavior**: generates an infinite list of the same element $a$.

**Usage**

```
// Language: Clean

repeat 0    // [0, 0, 0, ...]
repeat 1.0  // [1.0, 1.0, 1.0, ...]
repeat 'a'  // ['a', 'a', 'a', ...] 
repeat True // [True, True, True, ...]
```

### repeatn

**Signature** 

$$
\begin{align*}
{n}\rightarrow{a}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\text{Int}$,
- $a$ is of type $T$, and
- $R$ is of type $[T]$.

**Behavior**: generates a list of the same element $a$ with length of $n$.

**Usage**

```
// Language: Clean

repeatn 0 0    // []
repeatn 1 1.0  // [1.0]
repeatn 2 'a'  // ['a', 'a'] 
repeatn 3 True // [True, True, True]
```

### unzip

**Signature** 

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[(T, K)]$, and
- $R$ is of type $([T], [K])$.

**Behavior**: unzips $A$ into a tuple of two lists.

**Usage**

```
// Language: Clean

unzip [(1, 'a'), (2, 'b')] // ([1, 2],['a', 'b'])
unzip []                   // ([], [])
```

### zip2

**Signature** 

$$
\begin{align*}
{A}\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$,
- $B$ is of type $[K]$, and
- $R$ is of type $[(T, K)]$.

**Behavior**: zips $A$ and $B$ into a list of $2$-tuples.

**Usage**

```
// Language: Clean

zip2 [1, 2] ['a', 'b'] // [(1, 'a'), (2, 'b')]
zip2 [1]    ['a', 'b'] // [(1, 'a')]
zip2 [1, 2] ['a']      // [(1, 'a')]
zip2 [] []             // []
```

### zip

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $([T], [K])$, and
- $R$ is of type $[(T, K)]$.

**Behavior**: zips components of $A$ into a list of $2$-tuples.

**Usage**

```
// Language: Clean

zip ([1, 2], ['a', 'b']) // [(1, 'a'), (2, 'b')]
zip ([1], ['a', 'b'])    // [(1, 'a')]
zip ([1, 2], ['a'])      // [(1, 'a')]
zip ([], [])             // []
```

### diag3

**Signature**

$$
\begin{align*}
{A}\rightarrow{B}\rightarrow{C}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$,
- $B$ is of type $[K]$,
- $C$ is of type $[V]$, and
- $R$ is of type $[(T, K, V)]$.

**Behavior**: generates the Cartesian product of $A$, $B$, and $C$.

**Usage**

```
// Language: Clean

diag3 [1, 2] ['a'] ['A']
// [(1,'a','A'),(2,'a','A')]

diag3 [] ['a'] ['A']
// []
```

### diag2

**Signature**

$$
\begin{align*}
{A}\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$,
- $B$ is of type $[K]$, and
- $R$ is of type $[(T, K)]$.

**Behavior**: generates the Cartesian product of $A$ and $B$.

**Usage**

```
// Language: Clean

diag2 [1, 2] ['a', 'b']
// [(1,'a'),(2,'a'),(1,'b'),(2,'b')]

diag2 [] ['a', 'b']
// []
```

### isMember

**Signature**

$$
\begin{align*}
a\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where 
- $a$ is of type $T$,
- $A$ is of type $[T]$, and
- $R$ is of type $\text{Bool}$.

Additionally, equality operation must be defined on $T$.

**Behavior**: checks $a$ is a member of $A$ or not.

**Usage**

```
// Language: Clean

isMember 4 [1, 2, 3] // False
isMember 2 [1, 2, 3] // True
isMember 1 []        // False
```

### isAnyMember

**Signature**

$$
\begin{align*}
{A}\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[T]$,
- $B$ is of type $[T]$, and
- $R$ is of type $\text{Bool}$.

Additionally, equality operation must be defined on $T$.

**Behavior**: returns true if any element of $B$ is also a member of $A$.

**Usage**

```
// Language: Clean

isAnyMember [1, 2] [1, 2] // True
isAnyMember [1, 2] [3, 4] // False
isAnyMember [1, 2] []     // False
isAnyMember [] [1, 2]     // False
```

### removeDup

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[T]$, and
- $R$ is of type $[T]$.

Additionally, equality operation must be defined on $T$.

**Behavior**: removes duplicate elements from $A$.

**Usage**

```
// Language: Clean

removeDup [1, 2, 2, 3] // [1, 2, 3]
removeDup [1, 2, 3, 4] // [1, 2, 3, 4]
removeDup []           // []
```

### removeMember

**Signature**

$$
\begin{align*}
{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where 
- $a$ is of type $T$, and
- $A, R$ is of type $[T]$.

Additionally, equality operation must be defined on $T$.

**Behavior**: removes the first occurence of $a$ from $A$.

**Usage**

```
// Language: Clean

removeMember 4 [1, 2, 2, 3] // [1, 2, 2, 3]
removeMember 2 [1, 2, 2, 3] // [1, 2, 3]
removeMember 1 [1, 2, 2, 3] // [2, 2, 3]
removeMember 0 []           // []
```

### removeMembers

**Signature**

$$
\begin{align*}
{A}\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where 
- $A, B, R$ is of type $[T]$.

Additionally, equality operation must be defined on $T$.

**Behavior**: removes the first occurrences of the elements of $B$ from $A$.

**Usage**

```
// Language: Clean

removeMembers [1, 2, 3] [] // [1, 2, 3]
removeMembers [2, 3] [1]   // [2, 3]
removeMembers [1, 1] [1]   // [1]
removeMembers [] [1, 2]    // []
```

### removeIndex

**Signature**

$$
\begin{align*}
{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where 
- $a$ is of type $T$,
- $A$ is of type $[T]$, and
- $R$ is of type $(\text{Int}, [T])$.

Additionally, equality operation must be defined on $T$.

**Behavior**: removes the first occurrence of $a$ from $A$ and returns the its index.
A run-time error will be thrown if $a$ is not a member of $A$.

**Usage**

```
// Language: Clean

removeIndex 2 [1, 2, 2, 3] // (1, [1, 2, 3])
removeIndex 1 [1, 2, 2, 3] // (0, [2, 2, 3])
removeIndex 4 [1, 2, 2, 3] // NOT OK :(
```

**Note**

The run-time error has the following message:

```
Error in removeIndex: element not found
```

### limit

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

Additionally, equality operation must be defined on $T$.

**Behavior**: returns the first element of $A$ for which the next element is the same.
A run-time error will be thrown if no such element exists.

**Usage**

```
// Language: Clean

limit [1, 2, 2, 3] // 2
limit [1, 2, 3]    // NOT OK :(
limit []           // NOT OK :(
```

**Note**

The run-time error has the following message:

```
incorrect use of limit
```

### sum

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

Additionally, addition and zero unit must be defined on $T$.

**Behavior**: returns sum of $A$.

**Usage**

```
// Language: Clean

sum [1, 2, 3, 4] // 10
sum [1, 2, 3]    // 6
sum [1, 2]       // 3
sum [1]          // 1
sum []           // zero
```

### prod

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

Additionally, multiplication and one unit must be defined on $T$.

**Behavior**: returns product of $A$.

**Usage**

```
// Language: Clean

prod [1, 2, 3, 4] // 24
prod [1, 2, 3]    // 6
prod [1, 2]       // 3
prod [1]          // 1
prod []           // one
```

### avg

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where 
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

Additionally, addition, zero unit, and division must be defined on $T$.

**Behavior**: returns average $A$.
A runt-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

avg [1, 2, 3, 4] // 2
avg [1, 2, 3]    // 2
avg [1, 2]       // 1
avg [1]          // 1
avg []           // NOT OK :(
```

**Note**:

The run-time error has the following message:

```
avg called with empty list
```

[Back to top](#)

---

## Character list functions

### cjustify

**Signature**

$$
\begin{align*}
n\rightarrow{A_{c}}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\text{Int}$,
- $A$ is of type $[\text{Char}]$, and
- $R$ is of type $[\text{Char}]$.

**Behavior**: center-aligns $A_{c}$ with left and right spaces.

**Usage**

```
// Language: Clean

cjustify 5 ['a', 'b', 'c'] // [' ', 'a', 'b', 'c', ' ']
cjustify 5 ['a', 'b']      // [' ', 'a', 'b', ' ', ' ']
cjustify 3 ['a', 'b']      // ['a', 'b', ' ']
cjustify 3 ['a']           // [' ', 'a', ' ']
cjustify 1 ['a', 'b']      // ['a', 'b']
```

### ljustify

**Signature**

$$
\begin{align*}
n\rightarrow{A_{c}}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\text{Int}$,
- $A$ is of type $[\text{Char}]$, and
- $R$ is of type $[\text{Char}]$.

**Behavior**: left-aligns $A_{c}$ with spaces.

**Usage**

```
// Language: Clean

ljustify 5 ['a', 'b', 'c'] // ['a', 'b', 'c', ' ', ' ']
ljustify 5 ['a', 'b']      // ['a', 'b', ' ', ' ', ' ']
ljustify 3 ['a', 'b']      // ['a', 'b', ' ']
ljustify 3 ['a']           // ['a', ' ', ' ']
ljustify 1 ['a', 'b']      // ['a', 'b']
```

### rjustify

**Signature**

$$
\begin{align*}
n\rightarrow{A_{c}}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\text{Int}$,
- $A$ is of type $[\text{Char}]$, and
- $R$ is of type $[\text{Char}]$.

**Behavior**: right-aligns $A_{c}$ with spaces.

**Usage**

```
// Language: Clean

rjustify 5 ['a', 'b', 'c'] // [' ', ' ', 'a', 'b', 'c']
rjustify 5 ['a', 'b']      // [' ', ' ', 'a', 'b']
rjustify 3 ['a', 'b']      // [' ', 'a', 'b']
rjustify 3 ['a']           // [' ', ' ', 'a']
rjustify 1 ['a', 'b']      // ['a', 'b']
```

### flatlines

**Signature**

$$
\begin{align*}
{A_{c}}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\text{Int}$,
- $A$ is of type $[[\text{Char}]]$, and
- $R$ is of type $[\text{Char}]$.

**Behavior**: joins elements of $A$ with $\text{\\n}$ characters.

**Usage**

```
// Language: Clean

flatlines [['a'], ['b']] // ['a', '\n', 'b', '\n']
flatlines ['a']          // ['a', '\n']
flatlines []             // []
```

### mklines

**Signature**

$$
\begin{align*}
A_{c}\rightarrow{R}
\end{align*}
$$

where:
- $n$ is of type $\text{Int}$,
- $A$ is of type $[\text{Char}]$, and
- $R$ is of type $[[\text{Char}]]$.

**Behavior**: splits $A_{c}$ at $\text{\\n}$ characters.

**Usage**

```
// Language: Clean

mklines ['a', '\n', 'b', '\n'] // [['a'], ['b']]
mklines ['a', '\n']            // [['a']]
mklines []                     // []
```

[Back to top](#)

---

## Boolean list functions

### and

**Signature**

$$
\begin{align*}
{A_{b}}\rightarrow{R}
\end{align*}
$$

where:
- $A_{b}$ is of type $[\text{Bool}]$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns true if and only if every element of $A_{b}$ is true.

**Usage**

```
// Language: Clean

and [False, False] // False
and [False, True]   // True
and [True, True]   // True
and [False]        // False
and [True]         // True
and []             // True
```

### or

**Signature**

$$
\begin{align*}
{A_{b}}\rightarrow{R}
\end{align*}
$$

where:
- $A_{b}$ is of type $[\text{Bool}]$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns false if and only if every element of $A_{b}$ is false.

**Usage**

```
// Language: Clean

or [False, False] // False
or [False, True]  // True
or [True, True]   // True
or [False]        // False
or [True]         // True
or []             // False
```

[Back to top](#)

---


## Ordering functions

### sort

**Signature** 

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $[T]$.

Additionally, equality operation must be defined on $T$.

**Behavior**: sorts $A$ in ascending order using mergesort.

**Usage**

```
// Language: Clean

sort [1, 1, 1] // [1, 1, 1]
sort [1, 2, 3] // [1, 2, 3]
sort [2, 1, 3] // [1, 2, 3]
sort []        // []
```

### sortBy

**Signature** 

$$
\begin{align*}
{P}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow{T}\rightarrow\text{Bool})$, 
- $A$ is of type $[T]$, and
- $R$ is of type $[T]$.

**Behavior**: sorts $A$ using an ordering function $P$.

**Usage**

```
// Language: Clean

sortBy (>) [1, 1, 1] // [1, 1, 1]
sortBy (>) [1, 2, 3] // [3, 2, 1]
sortBy (>) [2, 1, 3] // [3, 2, 1]
sortby (>) []        // []
```

### maxList

**Signature** 

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

Additionally, inequality operation must be defined on $T$.

**Behavior**: returns the biggest element of $A$.
A run-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

maxList [1, 1, 1] // 1
maxList [1, 2, 3] // 3
maxList []        // NOT OK :(
```

**Note**:

The run-time error has the following message:

```
maxList of []
```

### maxListBy

**Signature**

$$
\begin{align*}
{P}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow{T}\rightarrow\text{Bool})$, 
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

**Behavior**: returns the biggest element of $A$ using an ordering function $P$.
A run-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

maxListBy (<) [1, 2, 3] // 3
maxListBy (>) [1, 1, 1] // 1
maxListBy (>) [1, 2, 3] // 1
maxListBy (>) []        // NOT OK :(
```

**Note**:

The run-time error has the following message:

```
maxListBy of []
```

### minList

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

Additionally, inequality operation must be defined on $T$.

**Behavior**: returns the smallest element of $A$.
A run-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

minList [1, 1, 1] // 1
minList [1, 2, 3] // 1
minList []        // NOT OK :(
```

**Note**:

The run-time error has the following message:

```
minList of []
```

### minListBy

**Signature** 

$$
\begin{align*}
{P}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow{T}\rightarrow\text{Bool})$, 
- $A$ is of type $[T]$, and
- $R$ is of type $T$.

**Behavior**: returns the smallest element of $A$ using an ordering function $P$.
A run-time error will be thrown if $A$ is empty.

**Usage**

```
// Language: Clean

minListBy (<) [1, 2, 3] // 1
minListBy (>) [1, 1, 1] // 1
minListBy (>) [1, 2, 3] // 3
minListBy (>) []        // NOT OK :(
```

**Note**:

The run-time error has the following message:

```
minListBy of []
```

[Back to top](#)

---

## Higher-order functions

### takeWhile

**Signature** 
$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow{\text{Bool}})$, and
- $A, R$ is of type $[T]$.

**Behavior**: takes elements from the start of $A$ as long as $P$ is true.

**Usage**

```
// Language: Clean

takeWhile isOdd  [1, 1, 1] // [1, 1, 1]
takeWhile isOdd  [1, 2, 3] // [1]
takeWhile isEven [1, 2, 3] // []
takeWhile isOdd  []        // []
```

### dropWhile

**Signature** 
$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow{\text{Bool}})$, and
- $A, R$ is of type $[T]$.

**Behavior**: discards elements from the start of $A$ as long as $P$ is true.

**Usage**

```
// Language: Clean

dropWhile isOdd  [1, 1, 1] // []
dropWhile isOdd  [1, 2, 3] // [2, 3]
dropWhile isEven [1, 2, 3] // [1, 2, 3]
dropWhile isOdd  []        // []
```

### span

**Signature** 
$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow{\text{Bool}})$,
- $A$ is of type $[T]$, and
- $R$ is of type $([T], [T])$

**Behavior**: splits $A$ into two.
The first sublist contains elements which $P$ holds true, and the second contains the rest.

**Usage**

```
// Language: Clean

span isOdd  [1, 2, 3] // ([1], [2, 3])
span isEven [1, 2, 3] // ([ ], [1, 2, 3])
span isOdd  [2, 3, 4] // ([ ], [2, 3, 4])
span isEven [2, 3, 4] // ([2], [3, 4])
span isOdd  []        // ([ ], [])
```

### filter

**Signature** 
$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow{\text{Bool}})$, and
- $A, R$ is of type $[T]$.

**Behavior**: filters $A$ using $P$.

**Usage**

```
// Language: Clean

filter isEven [2, 3, 4] // [2, 4]
filter isEven [1, 2, 3] // [2, 3]
filter isOdd  [1, 2, 3] // [1]
filter isOdd  [2, 3, 4] // [3]
filter isOdd  []        // []
```

### insert

**Signature** 
$$
\begin{align*}
P\rightarrow{a}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow{T}\rightarrow{\text{Bool}})$, 
- $a$ is of type $T$, and
- $A, R$ is of type $[T]$.

**Behavior**: inserts $a$ in to $A$ when $P$ holds.

**Usage**

```
// Language: Clean

insert (<>) 2 [2, 3] // [2, 2, 3]
insert (==) 2 [1, 1] // [1, 1, 2]
```

### foldr

**Signature** 

$$
\begin{align*}
f\rightarrow{k}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $(T\rightarrow{K}\rightarrow{K})$, 
- $k, R$ is of type $K$, and
- $A$ is of type $[T]$.

**Behavior**: folds $A$ using a right-associative operation $f$.

**Usage**

```
// Language: Clean

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

### foldl

**Signature** 

$$
\begin{align*}
f\rightarrow{t}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $(T\rightarrow{K}\rightarrow{T})$, 
- $t$ is of type $T$,
- $A$ is of type $[K]$, and
- $R$ is of type $T$.

**Behavior**: folds $A$ using a left-associative operation $f$.

**Usage**

```
// Language: Clean

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

### iterate

**Signature** 

$$
\begin{align*}
f\rightarrow{a}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $(T\rightarrow{T})$,
- $a$ is of type $T$, and
- $R$ is of type $[T]$.

**Behavior**: generates an infinite list by repeatedly apply $f$ to $a$.

**Usage**

```
// Language: Clean

iterate ((+) 1) 0 // [0, 1, 2, ...]
iterate ((*) 2) 1 // [1, 2, 4, ...]
iterate toInt   1 // [1, 1, 1, ...]
```

### map

**Signature** 

$$
\begin{align*}
f\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $T\rightarrow{K}$,
- $A$ is of type $[T]$, and
- $R$ is of type $[K]$.

**Behavior**: applies $f$ to every element of $A$.

**Usage**

```
// Language: Clean

map isEven  [1, 2, 3] // [False, True, False]
map toReal  [1, 2, 3] // [1.0, 2.0, 3.0]
map ((+) 2) [1, 2, 3] // [3, 4, 5]
```

### scan

**Signature** 

$$
\begin{align*}
f\rightarrow{a}\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $f$ is of type $(T\rightarrow{K}\rightarrow{T})$, 
- $a$ is of type $T$,
- $B$ is of type $[K]$, and
- $R$ is of type $[T]$.

**Behavior**: generates a list of reduced values from apply $f$ to $A$.

**Usage**

```
// Language: Clean

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

### any

**Signature** 

$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow\text{Bool})$, 
- $A$ is of type $[T]$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns false if and only if $P$ does not hold for any element of $A$.

**Usage**

```
// Language: Clean

any isEven [1, 2, 3] // True
any isOdd  [1, 2, 3] // True
any isEven [1, 3, 5] // False
any isOdd  [2, 4, 6] // False
any isEven [] // False
any isOdd  [] // False
```

### all

**Signature** 

$$
\begin{align*}
P\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(T\rightarrow\text{Bool})$, 
- $A$ is of type $[T]$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns true if and only if $P$ holds for every element of $A$.

**Usage**

```
// Language: Clean

all isEven [1, 2, 3] // False
all isOdd  [1, 2, 3] // False
all isEven [2, 4, 6] // True
all isOdd  [1, 3, 5] // True
all isEven [] // True
all isOdd  [] // True
```

[Back to top](#)

---

## Property functions

### isEmpty

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[T]$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $A$ is empty or not.

**Usage**

```
// Language: Clean

isEmpty []  // True
isEmpty [1] // False
```

[Back to top](#)

---
