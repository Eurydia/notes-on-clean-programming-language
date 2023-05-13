---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdBool"

Last updated: May 10th, 2023
---

## Table ontents

- [Logical operations](#logical-operations)
- [Conversions to booleans](#conversions-to-booleans)
- [Conversions from booleans](#conversions-from-booleans)

## Logical operations 

### Logical NEGATE

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ and $R$ are of type $\text{Bool}$.

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
- $a$, $b$, and $R$ are of type $\text{Bool}$.

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

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\text{Bool}$.

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

## Conversions to booleans

### Booleans to booleans

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$, and $R$ are of type $\text{Bool}$.

**Behavior**: does nothing.

**Example**

```
// Language: Clean

toBool True  // True
toBool False // False
```

[Back to top](#)

---

## Conversions from booleans

The expected types must be specified for functions of this category.

### Boolean to Boolean

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$, and $R$ are of type $\text{Bool}$.

**Behavior**: does nothing.

**Example**

```
// Language: Clean

Start :: Bool
Start =  fromBool True  // True
Start =  fromBool False // False
```

### Boolean to strings

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Bool}$, and
- $R$ i s of type $\text{String}$.

**Behavior**: converts $a$ into a string literal.

**Example**

```
// Language: Clean

Start :: String
Start =  fromBool True  // "True"
Start =  fromBool False // "False"
```

[Back to top](#)

---