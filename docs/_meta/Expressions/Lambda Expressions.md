# Lambda Expressions
## Lambda Functions

A control lambda function may be written as follows.

```
// Language: Clean

\ parameter = expression
```

Alternatively, dot (`.`) and right arrow (`->`) may be used to separate parameters from expression.
It should be noted that they have different semantic meanings.

```
// Language: Clean

\ parameter .  expression
\ parameter -> expression
```

Parameters of a lambda function are space separated.

```
// Language: Clean

\ paramA paramB = expression
```

Guarded expressions can be introduced as well.

```
// Language: Clean

\ parameter | guardA = expressionA | guardB = expressionB | guardC = expressionC
```

To increase readability, a lambda definition maybe placed between a pair of parentheses, which allows it to span multiple lines.

```
// Language: Clean

(\ parameter 
| guardA = expressionA 
| guardB = expressionB 
| guardC = expressionC)
```