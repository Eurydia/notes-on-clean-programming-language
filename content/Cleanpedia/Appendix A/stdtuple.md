---
title: "Appendix A: StdTuple"
---

## Relational Operations

### Equal To

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

### Not Equal To

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

### Less Than

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

### Less Than Or Equal To

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

### Greater Than

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

### Greater Than Or Equal To

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
