# Case Expressions
A `case..of..` expression matches a given expression with one of its patterns, and a control expression with one pattern may be written as follows.

```
// Language: Clean

case expression of
pattern = altExpression
```

Alternatively, right double arrow (`=>`) and right arrow (`->`) may be used to separated a pattern from an alternative expression, but they are not allowed to mix.

```
// Language: Clean

case expression of
pattern => altExpression

case expression of
pattern -> altExpression
```

Multiple patterns and alternative expressions can be introduced in the same way.

```
// Language: Clean

case expression of
patternA = altExpressionA
patternB = altExpressionB
patternC = altExpressionC
```

Guarded expressions can be introduced as well, which allows a case to have multiple guarded bodies.

```
// Language: Clean

case expression of
patternA
| guardA = altExpressionAA
| guardB = altExpressionAB
| guardC = altExpressionAC
```

Internally, a `case..of..` expression is compiled to a function.
That is, each case is transformed into an implementation of a function.

```
// language: Clean

__compiledExpr patternA = altExpressionA
__compiledExpr patternB = altExpressionB
__compiledExpr patternC = altExpressionC
```

This explains why guarded expressions can be introduced.

```
// language: Clean

__compiledExpr patternA
| guardAA               = altExpressionAA
| guardAB               = altExpressionAB
| guardAC               = altExpressionAC
```

Consequently, such an expression can result in a run-time error since it is translated into a partial function.