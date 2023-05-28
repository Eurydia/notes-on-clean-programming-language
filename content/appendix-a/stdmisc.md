---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdMisc"

Last updated: MAY 26th, 2023
Revisions: 0
Data of last revision: MAY 26th, 2023
---

## Contents

- [Functions](#functions)
	- [abort](#abort)


## Functions

### abort

**Signature**

$$
\begin{align*}
\text{a}\rightarrow\text{b}
\end{align*}
$$

where:
- $a$ is of type $\textbf{String}$, and
- $b$ is of any type $\textbf{T}$.

**Behavior**: terminates the program and return a custom error message $a$.

**Usage**

```
// Language: Clean
 
abort "Aborted" // "Aborted"
```

[Back to top](#)

---