---
dg-publish: true
---

# Pattern Matching Characters

```Clean
// Language: Clean

isA :: Char -> Bool
isA    'A'  =  True
isA    'a'  =  True
isA    _    =  False
```