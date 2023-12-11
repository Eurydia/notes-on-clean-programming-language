# StdArray

Visit [SystemArray](https://cloogle.org/src/#base-stdenv/StdArray;icl;line=1) on Cloogle for source code of this module.

## Operations

### Element at

**Signature**

```
// CLEAN


```

**Signature**

$$
\begin{align*}
A\rightarrow{i}\rightarrow{R}
\end{align*}
$$

where :
- $A$ is of type $\{\textbf{T}\}$,
- $i$ is of type $\textbf{Int}$, and
- $R$ is of type $\textbf{T}$.

**Behavior**: returns element at $i$-th index of $A$.
Results in a run-time error if $i$ is not a valid index.

```
Run Time Error: index out of range
```

**Usage**

```
// Language: Clean
 
"abcde".[5]     // NOT OK :(
"abcde".[2]     // 'c'
"abcde".[0]     // 'a'
"abcde".[(-1)]  // NOT OK :(
```

### Update at

**Signature**

$$
\begin{align*}
A\rightarrow{i}\rightarrow{a}\rightarrow{R}
\end{align*}
$$

where :
- $A$ and $R$ are of type $\{\textbf{T}\}$,
- $i$ is of type $\textbf{Int}$, and
- $a$ is of type $\textbf{T}$.

**Behavior**: updates element at $i$-th index of $A$ with $a$.
Results in a run-time error if $i$ is not a valid index.

```
Run Time Error: index out of range
```

**Usage**

```
// Language: Clean
 
{"abcde" & [5] = 'X'}     // NOT OK :(
{"abcde" & [2] = 'C'}     // "abCde"
{"abcde" & [0] = 'A'}     // "Abcde"
{"abcde" & [(-1)] = 'X'}  // NOT OK :(

{"abcde" & [0] = 'A', [1] = 'B'}
// "ABcde"
```

---

## Basic Functions

### `select`

**Signature**

$$
\begin{align*}
A\rightarrow{i}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $\{\textbf{T}\}$,
- $i$ is of type $\textbf{Int}$, and
- $R$ are of type $\textbf{T}$.

**Behavior**: returns the $i$-th element of $A$.
Results in a run-time error if $i$ is not a valid index.

```
Run Time Error: index out of range
```

**Usage**


```
// Language: Clean
 
select "abcde" 5     // NOT OK :(
select "abcde" 2     // 'c'
select "abcde" 0     // 'a'
select "abcde" (-1)  // NOT OK :(
```

### `size`

**Signature**

$$
\begin{align*}
A\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $\{\textbf{T}\}$,
- $R$ are of type $\textbf{Int}$.

**Behavior**: returns size of $A$.

**Usage**


```
// Language: Clean
 
size "abcde"  // 5
size "abcd"   // 4
size "abc"    // 3
size "ab"     // 2
```

### `update`

**Signature**

$$
\begin{align*}
A\rightarrow{i}\rightarrow{a}\rightarrow{R}
\end{align*}
$$

where :
- $A$ and $R$ are of type $\{\textbf{T}\}$,
- $i$ is of type $\textbf{Int}$, and
- $a$ is of type $\textbf{T}$.

**Behavior**: updates element at $i$-th index of $A$ with $a$.
Results in a run-time error if $i$ is not a valid index.

```
Run Time Error: index out of range
```

**Usage**

```
// Language: Clean
 
update "abcde"   5  'X'  // NOT OK :(
update "abcde"   2  'C'  // "abCde"
update "abcde"   0  'A'  // "Abcde"
update "abcde" (-1) 'X'  // NOT OK :(
```

