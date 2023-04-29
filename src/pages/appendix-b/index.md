---
layout: "@layouts/Blog.astro"
title: "Appendix B: Error troubleshooting"
---

## Table of contents

- [Introduction](#introduction)
- [Multiple entry points](#multiple-entry-points)
- [Incorrect type](#incorrect-type)

## Introduction

This section mainly discusses about common mistakes and errors.

However, there is no formal mention of errors anywhere on the language report or, so it should be known that this section is an unofficial catalog of possible errors.

## Multiple entry points

**Error message**

```
Error [..., ... ,...]: multiply defined
```

**Solution**: ensures that your programm has only one $\text{Start}$.

**Meaning**:

$\text{Start}$ is used as the entry point of a programm.
Consequently, there should be only $\text{Start}$.

In this case, there are more than one $\text{Start}$ and the compiler is unsure which entry point should be used.

**Example**:

```
// Language: Clean

// ... CODE ...

Start = invoke X Y      // <- Start is defined here

// ... CODE ...

Start = computeSumOf Z  // <- but also here :(
```

[Back to top](#)

---

## Incorrect type

**Error message**

```
...
Type error [...,...,...]: ... : cannot unify demanded type with offered type:
...
```

**Solution**: ensures that expression types and expected types are correct.

**Meaning**

This error can be caused by many things, but commonly by a misunderstading of expression types and actualy return types.

**Example**:

```
// Language: Clean

intToDigit :: Int -> [Int]
intToDigit    n   =  ...

Start = intToDigit 2.3
```

[Back to top](#)

---