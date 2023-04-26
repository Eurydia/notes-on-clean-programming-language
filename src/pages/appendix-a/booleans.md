---
layout: "@layouts/Blog.astro"
title: "Appendix A: Booleans"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Logical operations](#logical-operations)

## Logical operations 

### Logical NEGATE

**Signature**: $A_{\text{Bool}}\rightarrow\text{Bool}$.

**Behavior**: negates the logical value of $A$.

**Usage**

```
// Language: Clean

not True       // False
not False      // True
not (not True) // True
```

### Logical AND

**Signature**: $A_{\text{Bool}}{~}B_{\text{Bool}}\rightarrow\text{Bool}$.

**Behavior**: returns true if and only if both $A$ and $B$ are true.

**Usage**

```
// Language: Clean

True  && True  // True
True  && False // False
False && True  // False
False && False // False
```

### Logical OR

**Signature**: $A_{\text{Bool}}{~}B_{\text{Bool}}\rightarrow\text{Bool}$.

**Behavior**: returns false if and only if both $A$ and $B$ are false.

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