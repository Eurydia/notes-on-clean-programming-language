# Typing a Function
A control function type may be written as follows.

```
// Language: Clean

parameterType -> returnType
```

Parameter types are space separated.

```
// Language: Clean

paramAType paramBType -> returnType
```

## Typing Ordinary Functions

A control function definition with one parameter may be explicitly typed as follows.

```
// Language: Clean

functionA :: parameterType -> expressionType
functionA    parameter     =  expression
```

Parameter types are space separated.

```
// Language: Clean

functionB :: paramAType paramBType -> expressionType
functionB    paramA     paramB     =  expression
```