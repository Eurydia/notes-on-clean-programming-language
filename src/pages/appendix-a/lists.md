---
layout: "@layouts/Blog.astro"
title: "Appendix A: Lists"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Standatd operations](#standard-operations)
- [Relational operations](#relational-operations)
- [Standard functions](#standard-functions)
- [Property functions](#property-functions)
 
## Standard operations 

### Concatenation

**Signature**: $A_{\text{[T]}}\ B_{\text{[T]}}\rightarrow\text{[T]}$.

**Behavior**: appends $B$ to the end of $A$.

**Usage**

```
// Language: Clean
 
[1, 2, 3] ++ [4, 5] // [1, 2, 3, 4, 5]
[1, 2, 3] ++ [4]    // [1, 2, 3, 4]
[1, 2, 3] ++ []     // [1, 2, 3]
```

### Indexing

**Signature**: $A_{\text{[T]}}\ B_{\text{Int}}\rightarrow\text{T}$.

**Behavior**: returns element at $B$-th index of $A$.
A run-time error is thrown if $B$ is not a valid index.

**Usage**

```
// Language: Clean
 
[1, 2, 3, 4, 5] !!   5  // NOT OK :(
[1, 2, 3, 4, 5] !!   2  // 3
[1, 2, 3, 4, 5] !!   0  // 1
[1, 2, 3, 4, 5] !! (-1) // NOT OK :(
```

**Note**:

The run-time error has the following message:

```
Subscript error in !!,index too large
```

### Slicing

**Signature**: $A_{\text{[T]}}\ (B_{\text{Int}},\ C_{\text{Int}})\rightarrow\text{[T]}$.

**Behavior**: returns elements of $A$ which are inside $[B,\ C]$ interval.

**Usage**

```
// Language: Clean
 
[1, 2, 3, 4, 5] % (  2,  4)  // [3, 4, 5]
[1, 2, 3, 4, 5] % (  0,  4)  // [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5] % ((-1), 0)  // [1, 2]
[1, 2, 3, 4, 5] % ((-2), 5)  // [1, 2, 3, 4, 5]
```

[Back to top](#)

---

## Relational operations

### Equal to

**Signature**: $A_{\text{[T]}}\ B_{\text{[T]}}\rightarrow\text{Bool}\ |\ \text{Eq}\ \text{T}$.

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

**Signature**: $A_{\text{[T]}}\ B_{\text{[T]}}\rightarrow\text{Bool}\ |\ \text{Eq}\ \text{T}$.

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

**Signature**: $A_{\text{[T]}}\ B_{\text{[T]}}\rightarrow\text{Bool}\ |\ \text{Ord}\ \text{T}$.

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

**Signature**: $A_{\text{[T]}}\ B_{\text{[T]}}\rightarrow\text{Bool}\ |\ \text{Ord}\ \text{T}$.

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

**Signature**: $A_{\text{[T]}}\ B_{\text{[T]}}\rightarrow\text{Bool}\ |\ \text{Ord}\ \text{T}$.

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

**Signature**: $A_{\text{[T]}}\ B_{\text{[T]}}\rightarrow\text{Bool}\ |\ \text{Ord}\ \text{T}$.

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

## Standard functions

### Reverse function

**Signature**: $A_{\text{[T]}}\rightarrow\text{[T]}$.

**Behavior**: returns a reversed copy of $A$.

**Usage**

```
// Language: Clean

reverse [1, 2, 3] // [3, 2, 1]
reverse [1, 2]    // [2, 1]
reverse [1]       // [1]
reverse []        // []
```

### Length function

**Signature**: $A_{\text{[T]}}\rightarrow\text{Int}$.

**Behavior**: returns the length of $A$.

**Usage**

```
// Language: Clean

length [1, 2, 3] // 3
length [1, 2]    // 2
length [1]       // 1
length []        // 0
```

### Summation

**Signature**: $A_{\text{[T]}}\rightarrow\text{T}\ |\ +\ ,\ \text{one}\ \text{T}$.

**Behavior**: returns summation of $A$.

**Usage**

```
// Language: Clean

sum [1, 2, 3] // 6
sum [1, 2]    // 3
sum [1]       // 1
sum []        // 0
```

### Product

**Signature**: $A_{\text{[T]}}\rightarrow\text{T}\ |\ *\ ,\ \text{one}\ \text{T}$.

**Behavior**: returns product of $A$.

**Usage**

```
// Language: Clean

prod [1, 2, 3] // 6
prod [1, 2]    // 2
prod [1]       // 1
prod []        // 1
```

### Average function

**Signature**: $A_{\text{[T]}}\rightarrow\text{T}\ |\ {/}\ ,\ +\ ,\ \text{zero}\ ,\text{one}\ \text{T}$.

**Behavior**: returns average of $A$.
A run-time error will be thrown if $A$ is an empty list.

**Usage**

```
// Language: Clean

avg [1.0, 2.0, 3.0] // 3.0
avg [1.0, 2.0]      // 1.5
avg [1.0]           // 1.0
avg [1, 2, 3]       // 3
avg [1, 2]          // 1
avg [1]             // 1
avg []              // NOT OK :(
```

**Note**:

The run-time error has the following message:

```
avg called with empty list
```

### Flatten function

**Signature**: $A_{\text{[[T]]}}\rightarrow\text{[T]}$.

**Behavior**: returns a copy of flattened $A$.

**Usage**

```
// Language: Clean

flatten [[1], [2], [3]] // [1, 2, 3]
flatten [[1], [2, 3]]   // [1, 2, 3]
flatten [[1, 2, 3]]     // [1, 2, 3]
flatten []              // []
```

### Infinite repeat function

**Signature**: $A_{\text{T}}\rightarrow\text{[T]}$.

**Behavior**: generates an infinite list of $A$.

**Usage**

```
// Language: Clean

repeat 0    // [0, 0, 0, ...]
repeat 1.0  // [1.0, 1.0, 1.0, ...]
repeat 'a'  // ['a', 'a', 'a', ...] 
repeat True // [True, True, True, ...]
```

### Finite repeat function

**Signature**: $B_{\text{Int}}\ A_{\text{T}}\rightarrow\text{[T]}$.

**Behavior**: generates a list of $A$ with length of $B$.

**Usage**

```
// Language: Clean

repeatn 0 0    // []
repeatn 1 1.0  // [1.0]
repeatn 2 'a'  // ['a', 'a'] 
repeatn 3 True // [True, True, True]
```

### Iteration function

**Signature**: $f_{\text{T}\rightarrow\text{T}}\ A_{\text{T}}\rightarrow\text{[T]}$.

**Behavior**: generates an infinite list by repeatedly apply $f$ to $A$.

**Usage**

```
// Language: Clean

iterate ((+) 1) 0 // [0, 1, 2, ...]
iterate ((*) 2) 1 // [1, 2, 4, ...]
iterate toInt   0 // [0, 0, 0, ...]
```

[Back to top](#)

---

## Extraction functions

### First element

**Signature**: $A_{\text{[T]}}\rightarrow\text{T}$.

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

### All but first

**Signature**: $A_{\text{[T]}}\rightarrow\text{[T]}$.

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

### Last element

**Signature**: $A_{\text{[T]}}\rightarrow\text{T}$.

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

### All but last

**Signature**: $A_{\text{[T]}}\rightarrow\text{[T]}$.

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


[Back to top](#)

---

## Property functions

### Empty property

**Signature**: $A_{\text{[T]}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is empty or not.

**Usage**

```
// Language: Clean

isEmpty []  // True
isEmpty [1] // False
```

[Back to top](#)

---

#### Lists manipulation methods

| Name                          | Meaning                                               | Signature                             |
| ----------------------------- | ----------------------------------------------------- | ------------------------------------- |
| <nobr>`take n X`</nobr>       | Take the first $n$ elements of $X$                    | <nobr>`Int [T] -> [T]`</nobr>         |
| <nobr>`takeWhile P X`</nobr>  | Take elements of $X$ until $P$ is false               | <nobr>`(T -> Bool) [T] -> [T]`</nobr> |
| <nobr>`drop n X`</nobr>       | Discard the first $n$ elements of $X$                 | <nobr>`Int [T] -> [T]`</nobr>         |
| <nobr>`dropWhile P X`</nobr>  | Discard elements of $X$ until $P$ is false            | <nobr>`(T -> Bool) [T] -> [T]`</nobr> |
| <nobr>`filter P X`</nobr>     | Filter $X$ using $P$                                  | <nobr>`(T -> Bool) [T] -> [T]`</nobr> |
| <nobr>`map F X`</nobr>        | Apply $F$ to every element of $X$                     | <nobr>`(T -> K) [T] -> [K]`</nobr>    |
| <nobr>`insertAt i a X`</nobr> | Insert $a$ into $X$ at $i$-th element (shifted right) | <nobr>`Int T [T] -> [T]`</nobr>       |
| <nobr>`removeAt i X`</nobr>   | Remove $i$-th element of $X$                          | <nobr>`Int [T] -> [T]`</nobr>         |
| <nobr>`updateAt i a X`</nobr> | Replace $i$-th element of $X$ with $a$                | <nobr>`Int T [T] -> [T]`</nobr>       |
| <nobr>`splitAt i X`</nobr>    | Split $X$ into two at $i$-th index (left preferred)   | <nobr>`Int [T] -> ([T], [T])`</nobr>  |

#### Set-like methods

| Name                             | Meaning                             | Signature                      |
| -------------------------------- | ----------------------------------- | ------------------------------ |
| <nobr>`isMember a X`</nobr>      | True if $a$ is in $X$               | <nobr>`T [T] -> Bool`</nobr>   |
| <nobr>`removeDup X`</nobr>    | Unique elements of $X$                                | <nobr>`[T] -> [T]`</nobr>             |
| <nobr>`isAnyMember X Y`</nobr>   | True if $X$ intersects with $Y$     | <nobr>`[T] [T] -> Bool`</nobr> |
| <nobr>`removeMember a X`</nobr>  | Remove all $a$ from $X$             | <nobr>`T [T] -> [T]`</nobr>    |
| <nobr>`removeMembers X Y`</nobr> | Remove all elements of $Y$ from $X$ | <nobr>`[T] [T] -> [T]`</nobr>  |

#### Logical methods

| Name                   | Meaning                               | Signature                              |
| ---------------------- | ------------------------------------- | -------------------------------------- |
| <nobr>`and Xb`</nobr>  | True if every element in $Xb$ is true | <nobr>`[Bool] -> Bool`</nobr>          |
| <nobr>`or Xb`</nobr>   | True if some element in $Xb$ is true  | <nobr>`[Bool] -> Bool`</nobr>          |
| <nobr>`all P X`</nobr> | $P$ is true for every element in $X$  | <nobr>`(T -> Bool) [T] -> Bool`</nobr> |
| <nobr>`any P X`</nobr> | $P$ is true for some element in $X$   | <nobr>`(T -> Bool) [T] -> Bool`</nobr> |

Definitions:
- $Xb$ is a list of type $\text {Bool}$,
- $X$ is a list of type $T$, and
- $P$ is a predicate with $T\rightarrow\text{Bool}$ signature.
