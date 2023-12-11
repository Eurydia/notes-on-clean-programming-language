# StdOrdList


Visit [StdOrdList](https://cloogle.org/src/#base-stdenv/StdOrdList;icl;line=1) on Cloogle for source code of this module.

## Basic Functions

### `sort`

**Signature** 

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $R$ are of type $[\textbf{T}]$.

Additionally, equality and relational operations must be defined on $\textbf{T}$.

**Behavior**: sorts $A$ in ascending order using Merge Sort.

**Usage**

```
// Language: Clean

sort [1, 1, 1]  // [1, 1, 1]
sort [1, 2, 3]  // [1, 2, 3]
sort [2, 1, 3]  // [1, 2, 3]
sort []         // []
```

### `maxList`

**Signature** 

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

Additionally, equality and relational operations must be defined on $\textbf{T}$.

**Behavior**: returns the biggest element of $A$.
Results in a run-time error if $A$ is empty.

```
maxList of []
```

**Usage**

```
// Language: Clean

maxList [1, 1, 1]  // 1
maxList [1, 2, 3]  // 3
maxList []         // NOT OK :(
```

### `minList`

**Signature**

$$
\begin{align*}
{A}\rightarrow{R}
\end{align*}
$$

where:
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

Additionally, equality and relational operations must be defined on $\textbf{T}$.

**Behavior**: returns the smallest element of $A$.
Results in a run-time error if $A$ is empty.

```
minList of []
```

**Usage**

```
// Language: Clean

minList [1, 1, 1]  // 1
minList [1, 2, 3]  // 1
minList []         // NOT OK :(
```

---

## Higher-Order Functions

### `sortBy`

**Signature** 

$$
\begin{align*}
{P}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(\textbf{T}\rightarrow\textbf{T}\rightarrow\textbf{Bool})$, and
- $A$ and $R$ are of type $[\textbf{T}]$.

**Behavior**: sorts $A$ using an ordering function $P$.

**Usage**

```
// Language: Clean

sortBy (>) [1, 1, 1]  // [1, 1, 1]
sortBy (>) [1, 2, 3]  // [3, 2, 1]
sortBy (>) [2, 1, 3]  // [3, 2, 1]
sortby (>) []         // []
```

### `maxListBy`

**Signature**

$$
\begin{align*}
{P}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(\textbf{T}\rightarrow\textbf{T}\rightarrow\textbf{Bool})$, 
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

**Behavior**: returns the biggest element of $A$ using an ordering function $P$.
Results in a run-time error if $A$ is empty.

```
maxListBy of []
```

**Usage**

```
// Language: Clean

maxListBy (<) [1, 2, 3]  // 3
maxListBy (>) [1, 1, 1]  // 1
maxListBy (>) [1, 2, 3]  // 1
maxListBy (>) []         // NOT OK :(
```

### `minListBy`

**Signature** 

$$
\begin{align*}
{P}\rightarrow{A}\rightarrow{R}
\end{align*}
$$

where:
- $P$ is of type $(\textbf{T}\rightarrow\textbf{T}\rightarrow\textbf{Bool})$, 
- $A$ is of type $[\textbf{T}]$, and
- $R$ is of type $\textbf{T}$.

**Behavior**: returns the smallest element of $A$ using an ordering function $P$.
A run-time error will be thrown if $A$ is empty.

```
minListBy of []
```

**Usage**

```
// Language: Clean

minListBy (<) [1, 2, 3]  // 1
minListBy (>) [1, 1, 1]  // 1
minListBy (>) [1, 2, 3]  // 3
minListBy (>) []         // NOT OK :(
```
