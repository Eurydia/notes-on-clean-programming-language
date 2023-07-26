# Pattern-Match Expressions
A pattern-match expression checks an expression against a pattern, and a control expression may be written as follows.

```
// Language: Clean

expression =: pattern
```

If a given expression matches with the pattern, it yields `true`.

Internally, it is compiled down to a `case..of..` expression.

```
// Language: Clean

case expression of
pattern = True
_       = False
```