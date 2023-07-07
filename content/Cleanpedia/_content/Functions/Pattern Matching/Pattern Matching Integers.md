---
dg-publish: true
---

# Pattern Matching Integers

## Using Decimal Notation as Pattern

```Clean
// Language: Clean

isUnit :: Int -> Bool
isUnit    1   =  True
isUnit    _   =  False
```

---

## Using Octal Notation as Pattern

```Clean
// Language: Clean

isUnit :: Int -> Bool
isUnit    01  =  True
isUnit    _   =  False
```

---

## Using Hexadecimal Notation as Pattern

```Clean
// Language: Clean

isUnit :: Int -> Bool
isUnit    0x1 =  True
isUnit    _   =  False
```

---

## Mixing Multiple Notations

Different notations can mix freely, as they represent the same numerical value.

```Clean
// Language: Clean

fastMul :: Int Int -> Int
fastMul    01  rhs =  rhs
fastMul    lhs 0x1 =  lhs
fastMul    lhs rhs =  lhs * rhs
```