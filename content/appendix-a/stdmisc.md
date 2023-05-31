---
title: "Appendix A: StdMisc"
---

## Functions

### `abort`

**Signature**

$$\begin{align*}
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
