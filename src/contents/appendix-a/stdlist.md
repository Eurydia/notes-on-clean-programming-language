---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdList"

Last updated: MAY 14th, 2023
Revisions: 3
Data of last revision: MAY 14th, 2023
---

## Contents

- [Part I: Basic Operations](#part-i-basic-operations)
- [Part II: Relational Operations](#part-ii-relational-operations)
- [Part III: Basic Functions](#part-iii-basic-functions)
- [Part IV: Higher-Order Functions](#part-iv-higher-order-functions)
- [Part V: Property Functions](#part-v-property-functions)
 
## Part I: Basic Operations 

### 1.1 Concatenation

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where 
- $A$, $B$, and $R$ are of type $[\textbf{T}]$.

**Behavior**: appends $B$ to the end of $A$.

**Usage**

```
// Language: Clean
 
[1, 2, 3] ++ [4, 5]  // [1, 2, 3, 4, 5]
[1, 2, 3] ++ [4]     // [1, 2, 3, 4]
[1, 2, 3] ++ []      // [1, 2, 3]
```

### 1.2 Indexing

**Signature**

$$
\begin{align*}
A\rightarrow{i}\rightarrow{R}
\end{align*}
$$

where :
- $A$ is of type $[\textbf{T}]$,
- $i$ is of type $\textbf{Int}$, and
- $R$ is of type $\textbf{T}$.

**Behavior**: returns element at $i$-th index of $A$.
Results in a run-time error if $i$ is not a valid index.

```
Subscript error in !!,index too large
```

**Usage**

```
// Language: Clean
 
[1, 2, 3] !!   5   // NOT OK :(
[1, 2, 3] !!   2   // 3
[1, 2, 3] !!   0   // 1
[1, 2, 3] !! (-1)  // NOT OK :(
```

### 1.3 Slicing

**Signature**

$$
\begin{align*}
A\rightarrow(i, j)\rightarrow{R}
\end{align*}
$$

where:
- $A, R$ are of type $[\textbf{T}]$, and
- $i, j$ are of type $\textbf{Int}$.

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

## Part II: Relational Operations

### 2.1 Equal To

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

Additionally, equality operation must be defined on $\textbf{T}$.

**Behavior**: checks if $A$ is equal to $B$.

**Usage**

```
// Language: Clean

[]     == []      // True
[1, 2] == [1, 2]  // True
[1, 2] == [1]     // False
[1]    == [1, 2]  // False
[1, 2] == [1, 3]  // False
[1, 3] == [1, 2]  // False
```

### 2.2 Not Equal To

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

Additionally, equality operation must be defined on $\textbf{T}$.

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

### 2.3 Less Than

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

**Behavior**: checks if $A$ is less than $B$.

**Usage**

```
// Language: Clean

[]     < []      // False
[1, 2] < [1, 2]  // False
[1, 2] < [1]     // False
[1]    < [1, 2]  // True
[1, 2] < [1, 3]  // True
[1, 3] < [1, 2]  // False
```

### 2.4 Less Than Or Equal To

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

```
// Language: Clean

[]     <= []     // True
[1, 2] <= [1, 2] // True
[1, 2] <= [1]    // False
[1]    <= [1, 2] // True
[1, 2] <= [1, 3] // True
[1, 3] <= [1, 2] // False
```

### 2.5 Greater Than

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

```
// Language: Clean

[]     > []      // False
[1, 2] > [1, 2]  // False
[1, 2] > [1]     // True
[1]    > [1, 2]  // False
[1, 2] > [1, 3]  // False
[1, 3] > [1, 2]  // True
```

### 2.6 Greater Than Or Equal To

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

```
// Language: Clean

[]     >= []      // True
[1, 2] >= [1, 2]  // True
[1, 2] >= [1]     // True
[1]    >= [1, 2]  // False
[1, 2] >= [1, 3]  // False
[1, 3] >= [1, 2]  // True
```

[Back to top](#)

---

##  Part III: Basic functions

### 3.1 length

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

```
// Language: Clean

length [1, 2, 3]  // 3
length [1, 2]     // 2
length [1]        // 1
length []         // 0
```

### 3.2 flatten

**Signature** 

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[[\textbf{T}]]$, and
- $R$ is of type $[\textbf{T}]$.

**Behavior**: concatenates elements $A$.

**Usage**

```
// Language: Clean

flatten [[1], [2], [3]]  // [1, 2, 3]
flatten [[1], [2, 3]]    // [1, 2, 3]
flatten [[1, 2, 3]]      // [1, 2, 3]
flatten []               // []
```

### 3.3 hd

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
Results in a run-time error if $A$ is empty.

```
hd of []
```

**Usage**

```
// Language: Clean

hd [1, 2, 3]  // 1
hd [1, 2]     // 1
hd [1]        // 1
hd []         // NOT OK
```

### 3.4 tl

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: returns all except the first element of $A$.
A run-time error will be thrown if $A$ is empty.

```
tl of []
```

**Usage**

```
// Language: Clean

tl [1, 2, 3]  // [2, 3]
tl [1, 2]     // [2]
tl [1]        // []
tl []         // NOT OK
```

### 3.5 last

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
Results in a run-time error if $A$ is empty.

```
last of []
```

**Usage**

```
// Language: Clean

last [1, 2, 3]  // 3
last [1, 2]     // 2
last [1]        // 1
last []         // NOT OK
```

### 3.6 init

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: returns all except the last element of $A$.
Results in a run-time error if $A$ is empty.

```
init of []
```

**Usage**

```
// Language: Clean

init [1, 2, 3]  // [1, 2]
init [1, 2]     // [1]
init [1]        // []
init []         // NOT OK
```

### 3.7 take

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

```
// Language: Clean

take 2 [1, 2, 3]  // [1, 2]
take 1 [1, 2]     // [1]
take 0 [1]        // []
take 0 []         // []
```

### 3.8 drop

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

```
// Language: Clean

drop 2 [1, 2, 3]  // [3]
drop 1 [1, 2]     // [2]
drop 1 [1]        // []
drop 0 []         // []
```

### 3.9 reverse

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

```
// Language: Clean

reverse [1, 2, 3]  // [3, 2, 1]
reverse [1, 2]     // [2, 1]
reverse [1]        // [1]
reverse []         // []
```

### 3.10 insertAt

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

```
// Language: Clean

insertAt   2  9 [1, 2]  // [1, 2, 9]
insertAt   1  9 [1, 2]  // [1, 9, 2]
insertAt   0  9 [1, 2]  // [9, 1, 2]
insertAt (-1) 9 [1, 2]  // [1, 2, 9]
```

### 3.11 removeAt

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

```
// Language: Clean

removeAt   2  [1, 2]  // [1, 2]
removeAt   1  [1, 2]  // [1]
removeAt   0  [1, 2]  // [2]
removeAt (-1) [1, 2]  // [1,2]
```

### 3.12 updateAt

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

```
// Language: Clean

updateAt   2  9 [1, 2]  // [1, 2]
updateAt   1  9 [1, 2]  // [1, 9]
updateAt   0  9 [1, 2]  // [9, 2]
updateAt (-1) 9 [1, 2]  // [1, 2]
```

### 3.12 splitAt

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

```
// Language: Clean

splitAt   2  [1, 2]  // ([1, 2], [])
splitAt   1  [1, 2]  // ([1], [2])
splitAt   0  [1, 2]  // ([], [1, 2])
splitAt (-1) [1, 2]  // ([1, 2], [])
```

### 3.13 indexList

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

```
// Language: Clean

indexList [3, 2, 1]  // [0, 1, 2]
indexList [1, 2]     // [0, 1]
indexList [2]        // [0]
indexList []         // []
```

### 3.14 repeat

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

```
// Language: Clean

repeat 0     // [0, 0, 0, ...]
repeat 1.0   // [1.0, 1.0, 1.0, ...]
repeat 'a'   // ['a', 'a', 'a', ...] 
repeat True  // [True, True, True, ...]
```

### 3.15 repeatn

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

```
// Language: Clean

repeatn 0 0     // []
repeatn 1 1.0   // [1.0]
repeatn 2 'a'   // ['a', 'a'] 
repeatn 3 True  // [True, True, True]
```

### 3.16 isMember

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

```
// Language: Clean

isMember 4 [1, 2, 3]  // False
isMember 2 [1, 2, 3]  // True
isMember 1 []         // False
```

### 3.17 isAnyMember

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

```
// Language: Clean

isAnyMember [1, 2] [1, 2]  // True
isAnyMember [1, 2] [3, 4]  // False
isAnyMember [1, 2] []      // False
isAnyMember [] [1, 2]      // False
```

### 3.18 removeDup

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

```
// Language: Clean

removeDup [1, 2, 2, 3]  // [1, 2, 3]
removeDup [1, 2, 3, 4]  // [1, 2, 3, 4]
removeDup []            // []
```

### 3.19 removeMember

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

```
// Language: Clean

removeMember 4 [1, 2, 2, 3]  // [1, 2, 2, 3]
removeMember 2 [1, 2, 2, 3]  // [1, 2, 3]
removeMember 1 [1, 2, 2, 3]  // [2, 2, 3]
removeMember 0 []            // []
```

### 3.20 removeMembers

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

```
// Language: Clean

removeMembers [1, 2, 3] []  // [1, 2, 3]
removeMembers [2, 3] [1]    // [2, 3]
removeMembers [1, 1] [1]    // [1]
removeMembers [] [1, 2]     // []
```

### 3.21 removeIndex

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
Results in a run-time error if $a$ is not a member of $A$.

```
Error in removeIndex: element not found
```

**Usage**

```
// Language: Clean

removeIndex 2 [1, 2, 2, 3]  // (1, [1, 2, 3])
removeIndex 1 [1, 2, 2, 3]  // (0, [2, 2, 3])
removeIndex 4 [1, 2, 2, 3]  // NOT OK :(
```

### 3.22 sum

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

```
// Language: Clean

sum [1, 2, 3, 4]  // 10
sum [1, 2, 3]     // 6
sum [1, 2]        // 3
sum [1]           // 1
```

### 3.23 prod

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

```
// Language: Clean

prod [1, 2, 3, 4]  // 24
prod [1, 2, 3]     // 6
prod [1, 2]        // 3
prod [1]           // 1
```

### 3.24 avg

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
Results in a run-time error if $A$ is empty.

```
avg called with empty list
```

**Usage**

```
// Language: Clean

avg [1, 2, 3, 4]  // 2
avg [1, 2, 3]     // 2
avg [1, 2]        // 1
avg [1]           // 1
avg []            // NOT OK :(
```

### 3.25 and

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

```
// Language: Clean

and [False, False]  // False
and [False, True]   // True
and [True, True]    // True
and [False]         // False
and [True]          // True
and []              // True
```

### 3.26 or

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

```
// Language: Clean

or [False, False]  // False
or [False, True]   // True
or [True, True]    // True
or [False]         // False
or [True]          // True
or []              // False
```

[Back to top](#)

---

## Part IV: Higher-Order Functions

### 4.1 takeWhile

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

```
// Language: Clean

takeWhile isOdd  [1, 1, 1]  // [1, 1, 1]
takeWhile isOdd  [1, 2, 3]  // [1]
takeWhile isEven [1, 2, 3]  // []
takeWhile isOdd  []         // []
```

### 4.2 dropWhile

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

```
// Language: Clean

dropWhile isOdd  [1, 1, 1]  // []
dropWhile isOdd  [1, 2, 3]  // [2, 3]
dropWhile isEven [1, 2, 3]  // [1, 2, 3]
dropWhile isOdd  []         // []
```

### 4.3 filter

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

```
// Language: Clean

filter isEven [2, 3, 4]  // [2, 4]
filter isEven [1, 2, 3]  // [2, 3]
filter isOdd  [1, 2, 3]  // [1]
filter isOdd  [2, 3, 4]  // [3]
filter isOdd  []         // []
```

### 4.4 foldr

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

### 4.5 foldl

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

### 4.6 iterate

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

```
// Language: Clean

iterate ((+) 1) 0  // [0, 1, 2, ...]
iterate ((*) 2) 1  // [1, 2, 4, ...]
iterate toInt   1  // [1, 1, 1, ...]
```

### 4.7 map

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

```
// Language: Clean

map isEven  [1, 2, 3]  // [False, True, False]
map toReal  [1, 2, 3]  // [1.0, 2.0, 3.0]
map ((+) 2) [1, 2, 3]  // [3, 4, 5]
```

### 4.8 scan

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

### 4.9 any

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

```
// Language: Clean

any isEven [1, 2, 3]  // True
any isOdd  [1, 2, 3]  // True
any isEven [1, 3, 5]  // False
any isOdd  [2, 4, 6]  // False
any isEven []         // False
any isOdd  []         // False
```

### 4.10 all

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

```
// Language: Clean

all isEven [1, 2, 3]  // False
all isOdd  [1, 2, 3]  // False
all isEven [2, 4, 6]  // True
all isOdd  [1, 3, 5]  // True
all isEven []         // True
all isOdd  []         // True
```

[Back to top](#)

---

## Part V: Property Functions

### 5.1 isEmpty

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $A$ is empty or not.

**Usage**

```
// Language: Clean

isEmpty []   // True
isEmpty [1]  // False
```

[Back to top](#)

---
