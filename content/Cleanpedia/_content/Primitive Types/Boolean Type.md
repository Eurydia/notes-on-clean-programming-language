---
dg-publish: true
---

# Boolean Type

## Boolean Literals

A Boolean literal can be constructed from two constructors.

```Clean
// Language: Clean

True
False
```

Boolean literals can be used as a **pattern**.

See [[_content/Functions/Pattern Matching/Pattern Matching Booleans|Pattern Matching Booleans]] for additional example.

## Typing Boolean Expressions

An expression, which resolves to a Boolean type, can be explicitly typed using `Bool`.

```Clean
// Language: Clean

expr :: Bool
expr =  True
```

## Built-In Functions on Boolean Type

Functions, which operate on Boolean type, are defined in `StdBool` module, which is a part of the Standard Environment.

See [[_content/Appendix A/StdBool|StdBool]] for additional details.