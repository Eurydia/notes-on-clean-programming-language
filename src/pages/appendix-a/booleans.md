---
layout: "@layouts/Blog.astro"
title: "Appendix A: Booleans"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Logical operations](#logical-operations)
	- [Logical NEGATE](#logical-negate)
	- [Logical AND](#logical-and)
	- [Logical OR](#logical-or)

## Logical operations 

### Logical NEGATE

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Bool}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: negates the logical value of $a$.

**Usage**

```
// Language: Clean

not True       // False
not False      // True
not (not True) // True
```

### Logical AND

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Bool}$,
- $b$ is of type $\text{Bool}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns true if and only if both $a$ and $b$ are true.

**Usage**

```
// Language: Clean

True  && True  // True
True  && False // False
False && True  // False
False && False // False
```

### Logical OR


$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Bool}$,
- $b$ is of type $\text{Bool}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns false if and only if both $a$ and $b$ are false.

**Usage**

```
// Language: Clean

True  || True  // True
True  || False // True
False || True  // True
False || False // False
```

[Back to top](#)

---