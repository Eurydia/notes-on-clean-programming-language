---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdTuple"

Last updated: MAY 13th, 2023
Revisions: 3
Data of last revision: MAY 13th, 2023
---

## Contents

- [Part I: Relational Operations](#part-i-relational-operations)
- [Part II: Basic Functions](#part-ii-basic-functions)
 
## Part II: Relational Operations

### 1.1 Equal To

**Signature**

$$
\begin{align*}
(\textbf{T}, \textbf{K})\rightarrow(\textbf{T}, \textbf{K})\rightarrow{R}
\end{align*}
$$

or

$$
\begin{align*}
(\textbf{T},\textbf{K},\textbf{V})\rightarrow(\textbf{T},\textbf{K},\textbf{V})\rightarrow{R}
\end{align*}
$$

where:
- $R$ is of type $\textbf{Bool}$.

Additionally, equality operation must be defined on $\textbf{T}$, $\textbf{K}$, and $\textbf{V}$.

**Behavior**: checks if two tuples are equal or not.
Internally, this is equivalent to the following.

```
// Language: Clean

(Tx == Ty) && (Kx == Ky)  // for 2-tuples

(Tx == Ty) && (Kx == Ky) && (Vx == Vy)  // for 3-tuples
```

**Usage**

```
// Language: Clean

(1, 'a') == (1, 'a')  // True
(1, 'a') == (1, 'b')  // False
(1, 'a') == (1, 'b')  // False
(2, 'a') == (1, 'a')  // False
```

### 1.2 Not Equal To

**Signature**

**Signature**

$$
\begin{align*}
(\textbf{T}, \textbf{K})\rightarrow(\textbf{T}, \textbf{K})\rightarrow{R}
\end{align*}
$$

or

$$
\begin{align*}
(\textbf{T},\textbf{K},\textbf{V})\rightarrow(\textbf{T},\textbf{K},\textbf{V})\rightarrow{R}
\end{align*}
$$

where:
- $R$ is of type $\textbf{Bool}$.

Additionally, equality operation must be defined on $\textbf{T}$, $\textbf{K}$, and $\textbf{V}$.

**Behavior**: checks if two tuples are not equal or not.
Internally, this is equivalent to the following.

```
// Language: Clean

(Tx <> Ty) && (Kx <> Ky)  // for 2-tuples

(Tx <> Ty) && (Kx <> Ky) && (Vx <> Vy)  // for 3-tuples
```

**Usage**

```
// Language: Clean

(1, 'a') <> (1, 'a')  // False
(1, 'a') <> (1, 'b')  // False
(1, 'a') <> (1, 'b')  // False
(2, 'a') <> (1, 'a')  // False
```

### 1.3 Less Than

**Signature**

$$
\begin{align*}
(\textbf{T}, \textbf{K})\rightarrow(\textbf{T}, \textbf{K})\rightarrow{R}
\end{align*}
$$

or

$$
\begin{align*}
(\textbf{T},\textbf{K},\textbf{V})\rightarrow(\textbf{T},\textbf{K},\textbf{V})\rightarrow{R}
\end{align*}
$$

where:
- $R$ is of type $\textbf{Bool}$.

Additionally, relation operations must be defined on $\textbf{T}$, $\textbf{K}$, and $\textbf{V}$.

**Behavior**: checks if one tuple is less than another tuple.
Internally, this is equivalent to the following.

```
// Language: Clean

(Tx < Ty) && (Kx < Ky)  // for 2-tuples

(Tx < Ty) && (Kx < Ky) && (Vx < Vy)  // for 3-tuples
```

**Usage**

```
// Language: Clean

(1, 'a') < (1, 'a')  // False
(1, 'a') < (1, 'b')  // False
(1, 'a') < (1, 'b')  // False
(2, 'a') < (1, 'a')  // False
```

### 1.4 Less Than Or Equal To

**Signature**

$$
\begin{align*}
(\textbf{T}, \textbf{K})\rightarrow(\textbf{T}, \textbf{K})\rightarrow{R}
\end{align*}
$$

or

$$
\begin{align*}
(\textbf{T},\textbf{K},\textbf{V})\rightarrow(\textbf{T},\textbf{K},\textbf{V})\rightarrow{R}
\end{align*}
$$

where:
- $R$ is of type $\textbf{Bool}$.

Additionally, relation operations must be defined on $\textbf{T}$, $\textbf{K}$, and $\textbf{V}$.

**Behavior**: checks if one tuple is less than or equal to another tuple.
Internally, this is equivalent to the following.

```
// Language: Clean

(Tx <= Ty) && (Kx <= Ky)  // for 2-tuples

(Tx <= Ty) && (Kx <= Ky) && (Vx <= Vy)  // for 3-tuples
```

**Usage**

```
// Language: Clean

(1, 'a') <= (1, 'a')  // True
(1, 'a') <= (1, 'b')  // True
(1, 'a') <= (1, 'b')  // True
(2, 'a') <= (1, 'a')  // False
```

### 1.5 Greater Than

**Signature**

$$
\begin{align*}
(\textbf{T}, \textbf{K})\rightarrow(\textbf{T}, \textbf{K})\rightarrow{R}
\end{align*}
$$

or

$$
\begin{align*}
(\textbf{T},\textbf{K},\textbf{V})\rightarrow(\textbf{T},\textbf{K},\textbf{V})\rightarrow{R}
\end{align*}
$$

where:
- $R$ is of type $\textbf{Bool}$.

Additionally, relation operations must be defined on $\textbf{T}$, $\textbf{K}$, and $\textbf{V}$.

**Behavior**: checks if one tuple is greater than another tuple.
Internally, this is equivalent to the following.

```
// Language: Clean

(Tx > Ty) && (Kx > Ky)  // for 2-tuples

(Tx > Ty) && (Kx > Ky) && (Vx > Vy)  // for 3-tuples
```

**Usage**

```
// Language: Clean

(1, 'a') > (1, 'a')  // True
(1, 'a') > (1, 'b')  // True
(1, 'a') > (1, 'b')  // True
(2, 'a') > (1, 'a')  // False
```

### 1.6 Greater Than Or Equal To

**Signature**

$$
\begin{align*}
(\textbf{T}, \textbf{K})\rightarrow(\textbf{T}, \textbf{K})\rightarrow{R}
\end{align*}
$$

or

$$
\begin{align*}
(\textbf{T},\textbf{K},\textbf{V})\rightarrow(\textbf{T},\textbf{K},\textbf{V})\rightarrow{R}
\end{align*}
$$

where:
- $R$ is of type $\textbf{Bool}$.

Additionally, relation operations must be defined on $\textbf{T}$, $\textbf{K}$, and $\textbf{V}$.

**Behavior**: checks if one tuple is greater than or equal to another tuple.
Internally, this is equivalent to the following.

```
// Language: Clean

(Tx >= Ty) && (Kx >= Ky)  // for 2-tuples

(Tx >= Ty) && (Kx >= Ky) && (Vx >= Vy)  // for 3-tuples
```

**Usage**

```
// Language: Clean

(1, 'a') >= (1, 'a')  // False
(1, 'a') >= (1, 'b')  // False
(1, 'a') >= (1, 'b')  // False
(2, 'a') >= (1, 'a')  // True
```

[Back to top](#)

---

## Part II: Basic Functions

### 2.1 fst

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $(\textbf{T}, \textbf{K})$, and
- $R$ are of type $\textbf{T}$.

**Behavior**: returns the first element of a $2$-tuple.

**Usage**

```
// Language: Clean

fst (1, 'a')  // 1
fst ('a', 1)  // 'a'
```

### 2.2 snd

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $(\textbf{T}, \textbf{K})$, and
- $R$ are of type $\textbf{T}$.

**Behavior**: returns the second element of a $2$-tuple.

**Usage**

```
// Language: Clean

fst (1, 'a')  // 1
fst ('a', 1)  // 'a'
```

### 2.3 fst3

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $(\textbf{T},\textbf{K},\textbf{V})$, and
- $R$ are of type $\textbf{T}$.

**Behavior**: returns the first element of a $3$-tuple.

**Usage**

```
// Language: Clean

fst3 (1, 'a', True)   // 1
fst3 ('a', 1, False)  // 'a'
```

### 2.4 snd3

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $(\textbf{T},\textbf{K},\textbf{V})$, and
- $R$ are of type $\textbf{K}$.

**Behavior**: returns the second element of a $3$-tuple.

**Usage**

```
// Language: Clean

snd3 (1, 'a', True)   // 'a'
snd3 ('a', 1, False)  // 1
```

### 2.5 thd3

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $(\textbf{T},\textbf{K},\textbf{V})$, and
- $R$ are of type $\textbf{V}$.

**Behavior**: returns the third element of a $3$-tuple.

**Usage**

```
// Language: Clean

thd3 (1, 'a', True)   // True
thd3 ('a', 1, False)  // False
```

[Back to top](#)

---