#### Parameter Matching Integers

Integer literals may be used in as parameters in function implementations.
Doing so will evokes a parameter-argument matching behavior.

A simple function which determines whether an integer is eight or not may be implemented as follows.

```
// Language: Clean

isIntEight :: Int -> Bool
isIntEight    8   =  True
isIntEight    n   =  False
```

Alternative, octal and hexadecimal representation of eight may be used as well.

`isIntEight` written with octal representation.

```
// Language: Clean

isIntEight :: Int -> Bool
isIntEight    010 =  True
isIntEight    n   =  False
```

And `isIntEight` written with hexadecimal representation.

```
// Language: Clean

isIntEight :: Int -> Bool
isIntEight    0x8 =  True
isIntEight    n   =  False
```


#### Parameter Matching Real Numbers

Real number literals may be used in as parameters in function implementations.
Doing so will evokes a parameter-argument matching behavior.

A simple function which determines whether a real number is a unit or not may be implemented as follows.

```
// Language: Clean

isUnit :: Real -> Bool
isUnit    1.0  =  True
isUnit    n    =  False
```

#### Parameter Matching Booleans

Boolean literals may be used in as parameters in function implementations.
Doing so will evokes a parameter-argument matching behavior.

The [logical implication](https://en.wikipedia.org/wiki/Material_conditional) operation may be implemented as follows.

```
// Language: Clean

(-->) infixr 9 :: Bool Bool  -> Bool
(-->)             True False =  False
(-->)             _     _    =  True
```
