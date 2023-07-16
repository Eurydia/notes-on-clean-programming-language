---
title: "Appendix A: StdString"
---

## Basic Operations 

### Concatenation

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where 
- $A$, $B$, and $R$ are of type $\textbf{String}$.

**Behavior**: joins$B$ to the end of $A$.

**Usage**

```
// Language: Clean
 
"123" +++ "45"  // "12345"
"123" +++ "4"   // "1234"
"123" +++ ""    // "123"
```

### Slicing

**Signature**

$$
\begin{align*}
A\rightarrow(i, j)\rightarrow{R}
\end{align*}
$$

where:
- $A, R$ are of type $\textbf{String}$, and
- $i, j$ are of type $\textbf{Int}$.

**Behavior**: returns elements of $A$ which are inside $[i, j]$ interval.

**Usage**

```
// Language: Clean
 
"123" % (  2,  4)  // "3"
"123" % (  0,  2)  // "123"
"123" % ((-1), 0)  // "12"
"123" % ((-2), 5)  // "123"
```

### Update

**Signature**

$$
\begin{align*}
A\rightarrow(i,\ a)\rightarrow{R}
\end{align*}
$$

where :
- $A$ and $R$ are of type $\textbf{String}$,
- $i$ is of type $\textbf{Int}$, and
- $a$ is of type $\textbf{Char}$.

**Behavior**: updates element at $i$-th index of $A$ with $a$.
Results in a run-time error if $i$ is not a valid index.

```
Index too high in UPDATE string.

```

**Usage**

```
// Language: Clean
 
"abcde" := (  5,  'X')  // NOT OK :(
"abcde" := (  2,  'C')  // "abCde"
"abcde" := (  0,  'A')  // "Abcde"
"abcde" := ((-1), 'A')  // NOT OK :(
```

---

## Relational Operations

### Equal To

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $\textbf{String}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $A$ is equal to $B$.

**Usage**

```
// Language: Clean

""   == ""    // True
"12" == "12"  // True
"12" == "1"   // False
"1"  == "12"  // False
"12" == "13"  // False
"13" == "12"  // False
```

### Not Equal To

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $\textbf{String}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $A$ is not equal to $B$.

**Usage**

```
// Language: Clean

""   <> ""    // False
"12" <> "12"  // False
"12" <> "1"   // True
"1"  <> "12"  // True
"12" <> "13"  // True
"13" <> "12"  // True
```

### Less Than

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $\textbf{String}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $A$ is less than $B$.

**Usage**

```
// Language: Clean

""   < ""    // False
"12" < "12"  // False
"12" < "1"   // False
"1"  < "12"  // True
"12" < "13"  // True
"13" < "12"  // False
```

### Less Than Or Equal To

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $\textbf{String}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $A$ is less than or equal to $B$.

**Usage**

```
// Language: Clean

""   <= ""    // True
"12" <= "12"  // True
"12" <= "1"   // False
"1"  <= "12"  // True
"12" <= "13"  // True
"13" <= "12"  // False
```

### Greater Than

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $\textbf{String}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $A$ is greater than $B$.

**Usage**

```
// Language: Clean

""   > ""    // False
"12" > "12"  // False
"12" > "1"   // True
"1"  > "12"  // False
"12" > "13"  // False
"13" > "12"  // True
```

### Greater Than Or Equal To

**Signature**

$$
\begin{align*}
A\rightarrow{B}\rightarrow{R}
\end{align*}
$$

where:
- $A$ and $B$ are of type $\textbf{String}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $A$ is greater than or equal to $B$.

**Usage**

```
// Language: Clean

// Language: Clean

""   >= ""    // True
"12" >= "12"  // True
"12" >= "1"   // True
"1"  >= "12"  // False
"12" >= "13"  // False
"13" >= "12"  // True
```

[Back to top](#)

---
