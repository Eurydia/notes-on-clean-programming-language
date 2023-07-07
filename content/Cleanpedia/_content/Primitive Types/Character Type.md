---
dg-publish: true
---

# Character Type

## Character Literal

A character may be constructed by placing one character inside a pair of single quotation marks (`'..'`).

All Character can be constructed in the same way.

```Clean
// Language: Clean

'a'
'9'
'Z'
'+'
```

Character literal can be used as a **pattern**.

See [[_content/Functions/Pattern Matching/Pattern Matching Integers|Pattern Matching Integers]] for examples.

## Typing Character Expressions

An expression, which resolves to character type, may be explicitly typed using `Char`.

```Clean
// Language: Clean

expr :: Char
expr =  'a'
```

## Built-In Functions on Character Type

Functions, which operate on character type, are defined in `StdChar` module, which is a part of the Standard Environment.

See [[_content/Appendix A/StdChar|StdChar]] for additional details.
