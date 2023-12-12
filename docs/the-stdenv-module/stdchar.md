# StdChar

Visit [StdChar](https://cloogle.org/src/#base-stdenv/StdChar;icl;line=1) on Cloogle for source code of this module.

## Constants

### Zero unit

**Implementation**

```
// CLEAN

zero ::  Char
zero :== (toChar 0)
```

**Definition**

Represents a character whose ASCII encoding is zero.

### One unit

**Implementation**

```
// CLEAN

one ::  Char
one :== (toChar 1)
```

**Definition**

Represents a character whose ASCII encoding is one.

---

## Arithmetic operations

### Addition

**Signature**

```
// CLEAN

(+) infixl 6 :: Char Char -> Char
(+)             a    b    => ...
```

**Behavior**

Returns a character whose ASCII encoding is equal to the sum of ASCII encodings of `a` and `b`.

**Usage**

```
// CLEAN

'1' + '1'  // 49 + 49 ->  98 ('b')
'A' + 'A'  // 65 + 65 -> 130 ('é')
'a' + 'a'  // 97 + 97 -> 194 ('┬')
```

### Subtraction

**Signature**

```
// CLEAN

(-) infixl 6 :: Char Char -> Char
(-)             a    b    => ...
```

**Behavior**

Returns a character whose ASCII encoding is equal to the difference of ASCII encodings of `a` and `b`.

**Usage**

```
// CLEAN

'z' - '0'  // 122 - 48 -> 74 ('J')
'z' - '1'  // 122 - 49 -> 73 ('I')
'z' - '2'  //  97 + 50 -> 72 ('H')
```

---

## Relational operations

### Equal to

**Signature**

```
// CLEAN

(==) infix 4 :: Char Char -> Bool
(==)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is equal to the ASCII encoding of `b`.

**Usage**

```
// CLEAN

'1' == 'A'  // False
'a' == '1'  // False
'A' == 'a'  // False
'1' == '1'  // True
```

### Not equal to

**Signature**

```
// CLEAN

(<>) infix 4 :: Char Char -> Bool
(<>)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is not equal to the ASCII encoding of `b`.

**Usage**

```
// CLEAN

'1' <> 'A'  // True
'a' <> '1'  // True
'A' <> 'a'  // True
'1' <> '1'  // False
```

### Less than

**Signature**

```
// CLEAN

(<) infix 4 :: Char Char -> Bool
(<)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is strictly less than the ASCII encoding of `b`.

**Usage**

```
// CLEAN

'1' < 'A'  // True
'a' < '1'  // False
'A' < 'a'  // True
'1' < '1'  // False
```

### Less than or equal to

**Signature**

```
// CLEAN

(<=) infix 4 :: Char Char -> Bool
(<=)            a    b    => ...
```

**Behavior**

It returns true if the ASCII encoding of `a` is less than or equal to the ASCII encoding of `b`.

**Usage**

```
// CLEAN

'1' <= 'A'  // True
'a' <= '1'  // False
'A' <= 'a'  // True
'1' <= '1'  // True
```

### Greater than

**Signature**

```
// CLEAN

(>) infix 4 :: Char Char -> Bool
(>)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is strictly greater than the ASCII encoding of `b`.

**Usage**

```
// CLEAN

'1' > 'A'  // False
'a' > '1'  // True
'A' > 'a'  // False
'1' > '1'  // False
```

### Greater than or equal to

**Signature**

```
// CLEAN

(>=) infix 4 :: Char Char -> Bool
(>=)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is greater than or equal to the ASCII encoding of `b`.

**Usage**

```
// CLEAN

'1' >= 'A'  // False
'a' >= '1'  // True
'A' >= 'a'  // False
'1' >= '1'  // True
```

---

## Character manipulation functions

### `digitToInt`

**Signature**

```
// CLEAN

digitToInt :: Char -> Int
digitToInt    a    => ...
```

**Behavior**

Returns the ASCII encoding of `a` offset by `-48`.

**Usage**

```
// CLEAN

toUpper '1'  // 49 - 48 ->  1
toUpper 'a'  // 97 - 48 ->  49
toUpper 'A'  // 65 - 48 ->  17
toUpper '-'  // 45 - 48 -> -3
```

### `toUpper`

**Signature**

```
// CLEAN

toUpper :: Char -> Char
toUpper    a    => ...
```

**Behavior**

Returns the upper case of `a`.

If it is not possible to return an upper case of `a`, returns `a` as is.

**Usage**

```
// CLEAN

toUpper '1'  // '1'
toUpper 'a'  // 'A'
toUpper 'A'  // 'A'
toUpper '-'  // '-'
```

### `toLower`

**Signature**

```
// CLEAN

toLower :: Char -> Char
toLower    a    => ...
```

**Behavior**

Returns lower case of `a`.
If it is not possible to return a lower case of `a`, returns `a` as is.

**Usage**

```
// CLEAN

toLower '1'  // '1'
toLower 'a'  // 'a'
toLower 'A'  // 'a'
toLower '-'  // '-'
```

---

## Predicate Functions

### `isUpper`

**Signature**

```
// CLEAN

isUpper :: Char -> Bool
isUpper    a    => ...
```

**Behavior**

Returns true if `a` is an upper case character.

**Usage**

```
// CLEAN

isUpper '1'  // False
isUpper 'a'  // False
isUpepr 'A'  // True
isUpper '-'  // False
```

### `isLower`

**Signature**

```
// CLEAN

isLower :: Char -> Bool
isLower    a    => ...
```

**Behavior**

Returns true if `a` is a lower case character.

**Usage**

```
// CLEAN

isLower '1'  // False
isLower 'a'  // True
isLower 'A'  // False
isLower '-'  // False
```

### `isAlphanum`

**Signature**

```
// CLEAN

isAlphanum :: Char -> Bool
isAlphanum    a    => ...
```

**Behavior**

Returns true if `a` is an alphanumeric character.

**Usage**

```
// CLEAN

isAlphanum '1'  // True
isAlphanum 'a'  // True
isAlphanum 'A'  // True
isAlphanum '-'  // False
```

### `isAlpha`

**Signature**

```
// CLEAN

isAlpha :: Char -> Bool
isAlpha    a    => ...
```

**Behavior**

Returns true if `a` is an alphabetic character.

**Usage**

```
// CLEAN

isAlpha '1'  // False
isAlpha 'a'  // True
isAlpha 'A'  // True
isAlpha '-'  // False
```

### `isDigit`

**Signature**

```
// CLEAN

isDigit :: Char -> Bool
isDigit    a    => ...
```

**Behavior**

Returns true if `a` is a decimal digit.

**Usage**

```
// CLEAN

isDigit '1'  // True
isDigit 'a'  // False
isDigit 'A'  // False
isDigit '-'  // False
```

### `isOctDigit`

**Signature**

```
// CLEAN

isOctDigit :: Char -> Bool
isOctDigit    a    => ...
```

**Behavior**

Returns true if `a` is an octal digit.

**Usage**

```
// CLEAN

isOctDigit '1'  // True
isOctDigit '8'  // False
isOctDigit 'a'  // False
isOctDigit 'A'  // False
isOctDigit '-'  // False
```

### `isHexDigit`

**Signature**

```
// CLEAN

isHexDigit :: Char -> Bool
isHexDigit    a    => ...
```

**Behavior**

Returns true if `a` is a hexadecimal digit.

**Usage**

```
// CLEAN

isHexDigit '1'  // True
isHexDigit 'G'  // False
isHexDigit 'a'  // True
isHexDigit 'A'  // True
isHexDigit '-'  // False
```

### `isAscii`

**Signature**

```
// CLEAN

isAscii :: Char -> Bool
isAscii    a    => ...
```

**Behavior**

Returns true if `a` is a 7-bit ASCII character.

The ASCII encoding of `a` has to be between 0 and 127 inclusive.
See [7-bit ASCII characters](https://en.wikipedia.org/wiki/ASCII) for more information.

**Usage**

```
// CLEAN

isAscii '1'  // True
isAscii 'a'  // True
isAscii 'A'  // True
isAscii '-'  // True
isAscii 'Ç'  // False
```

### `isControl`

**Signature**

```
// CLEAN

isControl :: Char -> Bool
isControl    a    => ...
```

**Behavior**

Returns true if `a` is an ASCII control character.

See [ASCII control characters](https://en.wikipedia.org/wiki/ASCII#Control_characters) for more information on ASCII control characters.

**Usage**

```
// CLEAN

isControl '1'   // False
isControl 'a'   // False
isControl 'A'   // False
isControl '-'   // False
isControl '\t'  // True
```

### `isPrint`

**Signature**

```
// CLEAN

isControl :: Char -> Bool
isControl    a    => ...
```

**Behavior**

Returns true if `a` is an ASCII printable character.

See [ASCII printable character](https://en.wikipedia.org/wiki/ASCII#Printable_characters) for more information on ASCII printable characters.

**Usage**

```
// CLEAN

isPrint '1'  // True
isPrint 'a'  // True
isPrint 'A'  // True
isPrint '-'  // True
isPrint '\t' // False
```

### `isSpace`

**Signature**

```
// CLEAN

isSpace :: Char -> Bool
isSpace    a    => ...
```

**Behavior**

Returns true if `a` is a whitespace character.

Space characters include:

| Glyph | Name            |
| ----- | --------------- |
| ` `   | Space           |
| `\t`  | Horizontal tab  |
| `\v`  | Vertical tab    |
| `\n`  | Line feed       |
| `\r`  | Carriage return |
| `\f`  | Form feed       |

**Usage**

```
// CLEAN

isSpace '1'   // False
isSpace 'a'   // False
isSpace 'A'   // False
isSpace '-'   // False
isSpace '\t'  // True
```

---

## Conversions to character

### From integer

**Signature**

```
// CLEAN

toChar :: Int -> Char
toChar    a   => ...
```

**Behavior**

Returns a character whose ASCII encoding is `a`.

**Usage**

```
// CLEAN

toChar 49  // '1'
toChar 65  // 'A'
toChar 97  // 'a'
```

---

## Conversions from character

Explicitly convert characters to other types.
The desired type must be unambiguous.

### To integer

**Signature**

```
// CLEAN

fromChar :: Char -> Int
fromChar    a    => ...
```

**Behavior**

Returns the ASCII encoding of `a`.

**Usage**

```
// CLEAN

expr :: Int
expr =  fromChar '1'  // 49
expr =  fromChar 'A'  // 65
expr =  fromChar 'a'  // 97
```

### To string

**Signature**

```
// CLEAN

fromChar :: Char -> { #Char }
fromChar    a    => ...
```

**Behavior**

Returns a one-character string containing only `a`.

**Usage**

```
// CLEAN

expr :: { #Char }
expr =  fromChar '1'  // "1"
expr =  fromChar 'A'  // "A"
expr =  fromChar 'a'  // "a"
```