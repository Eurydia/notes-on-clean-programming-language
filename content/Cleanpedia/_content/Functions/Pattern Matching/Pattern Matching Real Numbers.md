---
dg-publish: true
---

# Pattern Matching Real Numbers

## Using Decimal Notation as Pattern

```Clean
// Language: Clean

isUnit :: Real -> Bool
isUnit    1.0  =  True
isUnit    _    =  False
```

---

## Using Scientific Notation as Pattern

```Clean
// Language: Clean

isUnit :: Real -> Bool
isUnit    1E1  =  True
isUnit    _    =  False
```

---

## Mixing Multiple Notations

Different notations can mix freely, as they represent the same numerical value.

```Clean
// Language: Clean

fastMul :: Real Real -> Real
fastMul    1.0  rhs  =  rhs
fastMul    lhs  1E0  =  lhs
fastMul    lhs  rhs  =  lhs * rhs
```