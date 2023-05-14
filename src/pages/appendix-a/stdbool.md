---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdBool"

Last updated: MAY 13th, 2023
Revisions: 3
Data of last revision: MAY 13th, 2023
---

## Contents

- [Part I: Logical Operations](#part-i-logical-operations)

## Part I: Logical Operations 

### 1.1 Logical NEGATE

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\textbf{Bool}$.

**Behavior**: negates the logical value of $a$.

**Usage**

```
// Language: Clean

not True        // False
not False       // True
not (not True)  // True
```

### 1.2 Logical AND

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Bool}$.

**Behavior**: returns true if and only if both $a$ and $b$ are true.

**Usage**

```
// Language: Clean

True  && True   // True
True  && False  // False
False && True   // False
False && False  // False
```

### 1.3 Logical OR

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Bool}$.

**Behavior**: returns false if and only if both $a$ and $b$ are false.

**Usage**

```
// Language: Clean

True  || True   // True
True  || False  // True
False || True   // True
False || False  // False
```

### 1.4 Logical EQUIVALENCE

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Bool}$.

**Behavior**: returns true if and only if both $a$ and $b$ share the same truth value.

**Usage**

```
// Language: Clean

True  == True   // True
True  == False  // False
False == True   // False
False == False  // True
```

[Back to top](#)

---