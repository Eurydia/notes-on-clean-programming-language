---
title: "Appendix A: StdChar"
---

## Introduction

The [StdChar](https://cloogle.org/src/#base-stdenv/StdChar;icl;line=1) module contains implementation for operations and functions relating to integer type.

When imported, this module allows for:
- addition and subtraction between two characters,
- comparison between two characters,
- character manipulation,
- property testing, and
- conversion to and from character type.

## Constants

### Zero Unit

**Implementation**

```
// Language: Clean

zero ::  Char
zero :== (toChar 0)
```

**Definition**: represents a character with ASCII value of zero.

### One Unit

**Implementation**

```
// Language: Clean

one ::  Char
one :== (toChar 1)
```

**Definition**: represents a character with ASCII value of one.

---

## Arithmetic Operations

Two arithmetic operations are available on character type.
They are rarely used due to their implementations.

### Addition

**Signature**

```
// Language: Clean

(+) infixl 6 :: Char Char -> Char
(+)             a    b    => ...
```

**Behavior**: converts `a` and `b` to integers based on their ASCII values.
The result of their addition is converted back to a character.

**Usage**

```
// Language: Clean

'1' + '1'  // 49 + 49 ->  98 ('b')
'A' + 'A'  // 65 + 65 -> 130 ('é')
'a' + 'a'  // 97 + 97 -> 194 ('┬')
```

### Subtraction

**Signature**

```
// Language: Clean

(-) infixl 6 :: Char Char -> Char
(-)             a    b    => ...
```

**Behavior**: converts `a` and `b` to integers based on their ASCII values. 
The result of their subtraction is converted back to a character.

**Usage**

```
// Language: Clean

'z' - '0'  // 122 - 48 -> 74 ('J')
'z' - '1'  // 122 - 49 -> 73 ('I')
'z' - '2'  //  97 + 50 -> 72 ('H')
```

---

## Relational Operations

All six relation operations are available on character type.
They are implemented with the same behavior.
That is, they compare two characters based on their ASCII values.

### Equal To

**Signature**

```
// Language: Clean

(==) infix 4 :: Char Char -> Bool
(==)            a    b    => ...
```

**Behavior**: returns true if ASCII value of `a` is equal to ASCII value of `b`.

**Usage**

```
// Language: Clean

'1' == 'A'  // False
'a' == '1'  // False
'A' == 'a'  // False
'1' == '1'  // True
```

### Not Equal To

**Signature**

```
// Language: Clean

(<>) infix 4 :: Char Char -> Bool
(<>)            a    b    => ...
```

**Behavior**: returns true if ASCII value of `a` is not equal to ASCII value of `b`.

**Usage**

```
// Language: Clean

'1' <> 'A'  // True
'a' <> '1'  // True
'A' <> 'a'  // True
'1' <> '1'  // False
```

### Less Than

**Signature**

```
// Language: Clean

(<) infix 4 :: Char Char -> Bool
(<)            a    b    => ...
```

**Behavior**: returns true if ASCII value of `a` is strictly less than ASCII value of `b`.

**Usage**

```
// Language: Clean

'1' < 'A'  // True
'a' < '1'  // False
'A' < 'a'  // True
'1' < '1'  // False
```

### Less Than Or Equal To

**Signature**

```
// Language: Clean

(<=) infix 4 :: Char Char -> Bool
(<=)            a    b    => ...
```

**Behavior**: returns true if ASCII value of `a` is less than or equal to ASCII value of `b`.

**Usage**

```
// Language: Clean

'1' <= 'A'  // True
'a' <= '1'  // False
'A' <= 'a'  // True
'1' <= '1'  // True
```

### Greater Than

**Signature**

```
// Language: Clean

(>) infix 4 :: Char Char -> Bool
(>)            a    b    => ...
```

**Behavior**: returns true if ASCII value of `a` is strictly greater than ASCII value of `b`.

**Usage**

```
// Language: Clean

'1' > 'A'  // False
'a' > '1'  // True
'A' > 'a'  // False
'1' > '1'  // False
```

### Greater Than Or Equal To

**Signature**

```
// Language: Clean

(>=) infix 4 :: Char Char -> Bool
(>=)            a    b    => ...
```

**Behavior**: returns true if ASCII value of `a` is greater than or equal to ASCII value of `b`.

**Usage**

```
// Language: Clean

'1' >= 'A'  // False
'a' >= '1'  // True
'A' >= 'a'  // False
'1' >= '1'  // True
```

---

## Manipulation Functions

This group of functions, as its name suggests, manipulate a character.

One function is left out which is `digitToInt`.
Its implementation can be found [here](https://cloogle.org/src/#base-stdenv/StdChar;icl;line=115).

### `toUpper`

**Signature**

```
// Language: Clean

toUpper :: Char -> Char
toUpper    a    => ...
```

**Behavior**: returns upper case of `a`.
If it is not possible, `a` itself is returned instead.

**Usage**

```
// Language: Clean

toUpper '1'  // '1'
toUpper 'a'  // 'A'
toUpper 'A'  // 'A'
toUpper '-'  // '-'
```

### `toLower`

**Signature**

```
// Language: Clean

toLower :: Char -> Char
toLower    a    => ...
```

**Behavior**: returns lower case of `a`.
If it is not possible, `a` itself is returned instead.

**Usage**

```
// Language: Clean

toLower '1'  // '1'
toLower 'a'  // 'a'
toLower 'A'  // 'a'
toLower '-'  // '-'
```

---

## Property Functions

### `isUpper`

**Signature**

```
// Language: Clean

isUpper :: Char -> Bool
isUpper    a    => ...
```

**Behavior**: returns true if `a` is an upper case character.

**Usage**

```
// Language: Clean

isUpper '1'  // False
isUpper 'a'  // False
isUpepr 'A'  // True
isUpper '-'  // False
```

### `isLower`

**Signature**

```
// Language: Clean

isLower :: Char -> Bool
isLower    a    => ...
```

**Behavior**: returns true if `a` is a lower case character.

**Usage**

```
// Language: Clean

isLower '1'  // False
isLower 'a'  // True
isLower 'A'  // False
isLower '-'  // False
```

### `isAlphanum`

**Signature**

```
// Language: Clean

isAlphanum :: Char -> Bool
isAlphanum    a    => ...
```

**Behavior**: returns true if `a` is an alphanumeric character.

**Usage**

```
// Language: Clean

isAlphanum '1'  // True
isAlphanum 'a'  // True
isAlphanum 'A'  // True
isAlphanum '-'  // False
```

### `isAlpha`

**Signature**

```
// Language: Clean

isAlpha :: Char -> Bool
isAlpha    a    => ...
```

**Behavior**: returns true if `a` is an alphabetic character.

**Usage**

```
// Language: Clean

isAlpha '1'  // False
isAlpha 'a'  // True
isAlpha 'A'  // True
isAlpha '-'  // False
```

### `isDigit`

**Signature**

```
// Language: Clean

isDigit :: Char -> Bool
isDigit    a    => ...
```

**Behavior**: returns true if `a` is a decimal digit.

**Usage**

```
// Language: Clean

isDigit '1'  // True
isDigit 'a'  // False
isDigit 'A'  // False
isDigit '-'  // False
```

### `isOctDigit`

**Signature**

```
// Language: Clean

isOctDigit :: Char -> Bool
isOctDigit    a    => ...
```

**Behavior**: returns true if `a` is an octal digit.

**Usage**

```
// Language: Clean

isOctDigit '1'  // True
isOctDigit '8'  // False
isOctDigit 'a'  // False
isOctDigit 'A'  // False
isOctDigit '-'  // False
```

### `isHexDigit`

**Signature**

```
// Language: Clean

isHexDigit :: Char -> Bool
isHexDigit    a    => ...
```

**Behavior**: returns true if `a` is a hexadecimal digit.

**Usage**

```
// Language: Clean

isHexDigit '1'  // True
isHexDigit 'G'  // False
isHexDigit 'a'  // True
isHexDigit 'A'  // True
isHexDigit '-'  // False
```

### `isAscii`

**Signature**

```
// Language: Clean

isAscii :: Char -> Bool
isAscii    a    => ...
```

**Behavior**: returns true if `a` is an [7-bit ASCII character](https://en.wikipedia.org/wiki/ASCII).

**Usage**

```
// Language: Clean

isAscii '1'  // True
isAscii 'a'  // True
isAscii 'A'  // True
isAscii '-'  // True
isAscii 'Ç'  // False
```

### `isControl`

**Signature**

```
// Language: Clean

isControl :: Char -> Bool
isControl    a    => ...
```

**Behavior**: returns true if `a` is a [control character](https://en.wikipedia.org/wiki/ASCII#Control_characters).

**Usage**

```
// Language: Clean

isControl '1'   // False
isControl 'a'   // False
isControl 'A'   // False
isControl '-'   // False
isControl '\t'  // True
```

### `isPrint`

**Signature**

```
// Language: Clean

isControl :: Char -> Bool
isControl    a    => ...
```

**Behavior**: returns true if `a` is a [printable character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

**Usage**

```
// Language: Clean

isPrint '1'  // True
isPrint 'a'  // True
isPrint 'A'  // True
isPrint '-'  // True
isPrint '\t' // False
```

### `isSpace`

**Signature**

```
// Language: Clean

isSpace :: Char -> Bool
isSpace    a    => ...
```

**Behavior**: returns true if `a` is a space character.
Space characters are defined as follows:

| Glyph  | Name            |
| ------ | --------------- |
| `' '`  | Space           |
| `'\t'` | Horizontal tab  |
| `'\v'` | Vertical tab    |
| `'\n'` | Line feed       |
| `'\r'` | Carriage return |
| `'\f'` | Form feed       |

**Usage**

```
// Language: Clean

isSpace '1'   // False
isSpace 'a'   // False
isSpace 'A'   // False
isSpace '-'   // False
isSpace '\t'  // True
```

---

## Conversions To Character Type

Explicitly converts other types to character type.

### From Integer Type

**Signature**

```
toChar :: Int -> Char
toChar    a   => ...
```

**Behavior**: returns an ASCII character whose value is `a`.

**Usage**

```
// Language: Clean

toChar 49  // '1'
toChar 65  // 'A'
toChar 97  // 'a'
```

---

## Conversions From Character Type

Explicitly converts character type to other types.
The desired type must be unambiguous.

### To Integer Type

**Signature**

```
fromChar :: Char -> Int
fromChar    a    =>  ...
```

**Behavior**: returns ASCII value of `a`.

**Usage**

```
// Language: Clean

expr :: Int
expr =  fromChar '1'  // 49
expr =  fromChar 'A'  // 65
expr =  fromChar 'a'  // 97
```

### To String Type

**Signature**

```
// Language: Clean

fromChar :: Char -> {#Char}
fromChar    a    => ...
```

**Behavior**: returns a one-character string containing `a`.

**Usage**

```
// Language: Clean

expr :: {#Char}
expr =  fromChar '1'  // "1"
expr =  fromChar 'A'  // "A"
expr =  fromChar 'a'  // "a"
```