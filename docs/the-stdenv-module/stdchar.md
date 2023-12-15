# StdChar

Visit [StdChar](https://cloogle.org/src/#base-stdenv/StdChar;icl;line=1) on Cloogle for source code of this module.

## Constants

### Zero unit

**Implementation**

```clean
// CLEAN

zero ::  Char
zero :== (toChar 0)
```

**Definition**

Represents a character whose ASCII encoding is zero.

### One unit

**Implementation**

```clean
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

```clean
// CLEAN

(+) infixl 6 :: Char Char -> Char
(+)             a    b    => ...
```

**Behavior**

Returns a character whose ASCII encoding is equal to the sum of ASCII encodings of `a` and `b`.

**Usage**

```clean
// CLEAN

'1' + '1'  // 49 + 49 ->  98 ('b')
'A' + 'A'  // 65 + 65 -> 130 ('é')
'a' + 'a'  // 97 + 97 -> 194 ('┬')
```

### Subtraction

**Signature**

```clean
// CLEAN

(-) infixl 6 :: Char Char -> Char
(-)             a    b    => ...
```

**Behavior**

Returns a character whose ASCII encoding is equal to the difference of ASCII encodings of `a` and `b`.

**Usage**

```clean
// CLEAN

'z' - '0'  // 122 - 48 -> 74 ('J')
'z' - '1'  // 122 - 49 -> 73 ('I')
'z' - '2'  //  97 + 50 -> 72 ('H')
```

---

## Relational operations

### Equal to

**Signature**

```clean
// CLEAN

(==) infix 4 :: Char Char -> Bool
(==)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is equal to the ASCII encoding of `b`.

**Usage**

```clean
// CLEAN

'1' == 'A'  // False
'a' == '1'  // False
'A' == 'a'  // False
'1' == '1'  // True
```

### Not equal to

**Signature**

```clean
// CLEAN

(<>) infix 4 :: Char Char -> Bool
(<>)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is not equal to the ASCII encoding of `b`.

**Usage**

```clean
// CLEAN

'1' <> 'A'  // True
'a' <> '1'  // True
'A' <> 'a'  // True
'1' <> '1'  // False
```

### Less than

**Signature**

```clean
// CLEAN

(<) infix 4 :: Char Char -> Bool
(<)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is strictly less than the ASCII encoding of `b`.

**Usage**

```clean
// CLEAN

'1' < 'A'  // True
'a' < '1'  // False
'A' < 'a'  // True
'1' < '1'  // False
```

### Less than or equal to

**Signature**

```clean
// CLEAN

(<=) infix 4 :: Char Char -> Bool
(<=)            a    b    => ...
```

**Behavior**

It returns true if the ASCII encoding of `a` is less than or equal to the ASCII encoding of `b`.

**Usage**

```clean
// CLEAN

'1' <= 'A'  // True
'a' <= '1'  // False
'A' <= 'a'  // True
'1' <= '1'  // True
```

### Greater than

**Signature**

```clean
// CLEAN

(>) infix 4 :: Char Char -> Bool
(>)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is strictly greater than the ASCII encoding of `b`.

**Usage**

```clean
// CLEAN

'1' > 'A'  // False
'a' > '1'  // True
'A' > 'a'  // False
'1' > '1'  // False
```

### Greater than or equal to

**Signature**

```clean
// CLEAN

(>=) infix 4 :: Char Char -> Bool
(>=)            a    b    => ...
```

**Behavior**

Returns true if the ASCII encoding of `a` is greater than or equal to the ASCII encoding of `b`.

**Usage**

```clean
// CLEAN

'1' >= 'A'  // False
'a' >= '1'  // True
'A' >= 'a'  // False
'1' >= '1'  // True
```

---

## Case conversion functions

### `toUpper`

**Signature**

```clean
// CLEAN

toUpper :: Char -> Char
toUpper    a    => ...
```

**Behavior**

Returns the upper case of `a`.

If it is not possible to return an upper case of `a`, returns `a` as is.

**Usage**

```clean
// CLEAN

toUpper '1'  // '1'
toUpper 'a'  // 'A'
toUpper 'A'  // 'A'
toUpper '-'  // '-'
```

### `toLower`

**Signature**

```clean
// CLEAN

toLower :: Char -> Char
toLower    a    => ...
```

**Behavior**

Returns lower case of `a`.
If it is not possible to return a lower case of `a`, returns `a` as is.

**Usage**

```clean
// CLEAN

toLower '1'  // '1'
toLower 'a'  // 'a'
toLower 'A'  // 'a'
toLower '-'  // '-'
```

---

## Validator functions

### `isUpper`

**Signature**

```clean
// CLEAN

isUpper :: Char -> Bool
isUpper    a    => ...
```

**Behavior**

Returns true if `a` is an upper case character.

**Usage**

```clean
// CLEAN

isUpper '1'  // False
isUpper 'a'  // False
isUpepr 'A'  // True
isUpper '-'  // False
```

### `isLower`

**Signature**

```clean
// CLEAN

isLower :: Char -> Bool
isLower    a    => ...
```

**Behavior**

Returns true if `a` is a lower case character.

**Usage**

```clean
// CLEAN

isLower '1'  // False
isLower 'a'  // True
isLower 'A'  // False
isLower '-'  // False
```

### `isAlphanum`

**Signature**

```clean
// CLEAN

isAlphanum :: Char -> Bool
isAlphanum    a    => ...
```

**Behavior**

Returns true if `a` is an alphanumeric character.

**Usage**

```clean
// CLEAN

isAlphanum '1'  // True
isAlphanum 'a'  // True
isAlphanum 'A'  // True
isAlphanum '-'  // False
```

### `isAlpha`

**Signature**

```clean
// CLEAN

isAlpha :: Char -> Bool
isAlpha    a    => ...
```

**Behavior**

Returns true if `a` is an alphabetic character.

**Usage**

```clean
// CLEAN

isAlpha '1'  // False
isAlpha 'a'  // True
isAlpha 'A'  // True
isAlpha '-'  // False
```

### `isDigit`

**Signature**

```clean
// CLEAN

isDigit :: Char -> Bool
isDigit    a    => ...
```

**Behavior**

Returns true if `a` is a decimal digit.

**Usage**

```clean
// CLEAN

isDigit '1'  // True
isDigit 'a'  // False
isDigit 'A'  // False
isDigit '-'  // False
```

### `isOctDigit`

**Signature**

```clean
// CLEAN

isOctDigit :: Char -> Bool
isOctDigit    a    => ...
```

**Behavior**

Returns true if `a` is an octal digit.

**Usage**

```clean
// CLEAN

isOctDigit '1'  // True
isOctDigit '8'  // False
isOctDigit 'a'  // False
isOctDigit 'A'  // False
isOctDigit '-'  // False
```

### `isHexDigit`

**Signature**

```clean
// CLEAN

isHexDigit :: Char -> Bool
isHexDigit    a    => ...
```

**Behavior**

Returns true if `a` is a hexadecimal digit.

**Usage**

```clean
// CLEAN

isHexDigit '1'  // True
isHexDigit 'G'  // False
isHexDigit 'a'  // True
isHexDigit 'A'  // True
isHexDigit '-'  // False
```

### `isAscii`

**Signature**

```clean
// CLEAN

isAscii :: Char -> Bool
isAscii    a    => ...
```

**Behavior**

Returns true if `a` is a 7-bit ASCII character.

The ASCII encoding of `a` has to be between 0 and 127 inclusive.
See [7-bit ASCII characters](https://en.wikipedia.org/wiki/ASCII) for more information.

**Usage**

```clean
// CLEAN

isAscii '1'  // True
isAscii 'a'  // True
isAscii 'A'  // True
isAscii '-'  // True
isAscii 'Ç'  // False
```

### `isControl`

**Signature**

```clean
// CLEAN

isControl :: Char -> Bool
isControl    a    => ...
```

**Behavior**

Returns true if `a` is an ASCII control character.

See [ASCII control characters](https://en.wikipedia.org/wiki/ASCII#Control_characters) for more information on ASCII control characters.

**Usage**

```clean
// CLEAN

isControl '1'   // False
isControl 'a'   // False
isControl 'A'   // False
isControl '-'   // False
isControl '\t'  // True
```

### `isPrint`

**Signature**

```clean
// CLEAN

isControl :: Char -> Bool
isControl    a    => ...
```

**Behavior**

Returns true if `a` is an ASCII printable character.

See [ASCII printable character](https://en.wikipedia.org/wiki/ASCII#Printable_characters) for more information on ASCII printable characters.

**Usage**

```clean
// CLEAN

isPrint '1'  // True
isPrint 'a'  // True
isPrint 'A'  // True
isPrint '-'  // True
isPrint '\t' // False
```

### `isSpace`

**Signature**

```clean
// CLEAN

isSpace :: Char -> Bool
isSpace    a    => ...
```

**Behavior**

Returns true if `a` is a whitespace character.
Whitespace characters include:

- space character
- horizontal tab `\t`
- form feed `\f`
- line feed `\n`
- carriage return `\r`
- vertical tab `\v`

**Usage**

```clean
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

```clean
// CLEAN

toChar :: Int -> Char
toChar    a   => ...
```

**Behavior**

Returns a character whose ASCII encoding is `a`.

**Usage**

```clean
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

```clean
// CLEAN

fromChar :: Char -> Int
fromChar    a    => ...
```

**Behavior**

Returns the ASCII encoding of `a`.

**Usage**

```clean
// CLEAN

expr :: Int
expr =  fromChar '1'  // 49
expr =  fromChar 'A'  // 65
expr =  fromChar 'a'  // 97
```

### To string

**Signature**

```clean
// CLEAN

fromChar :: Char -> {#Char}
fromChar    a    => ...
```

**Behavior**

Returns a one-character string containing `a`.

**Usage**

```clean
// CLEAN

expr :: {#Char}
expr =  fromChar '1'  // "1"
expr =  fromChar 'A'  // "A"
expr =  fromChar 'a'  // "a"
```

### To integer with offset

**Signature**

```clean
// CLEAN

digitToInt :: Char -> Int
digitToInt    a    => ...
```

**Behavior**

Returns the ASCII encoding of `a` offset by `-48`.

**Usage**

```clean
// CLEAN

digitToInt '1'  // 49 - 48 ->  1
digitToInt 'a'  // 97 - 48 ->  49
digitToInt 'A'  // 65 - 48 ->  17
digitToInt '-'  // 45 - 48 -> -3
```