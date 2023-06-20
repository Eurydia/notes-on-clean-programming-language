---
title: "Typing Operators"
---

A control operator definition may be explicitly typed as follows.

```
// Language: Clean

(operator) :: paramLType paramRType -> expressionType
(operator)    paramL     paramR     =  expression
```

In addition, operator associativity (`A`) and precedence (`P`) may be specified as well.

```
// Language: Clean

(operator) A P :: paramLType paramRType -> expressionType
(operator)        paramL     paramR     =  expression
```