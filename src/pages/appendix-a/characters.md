---
layout: "@layouts/Blog.astro"
title: "Appendix A: Characters"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Arithmetic operations](#arithmetic-operations)
- [Relational operations](#relational-operations)
- [Standard functions](#standard-functions)
- [Property functions](#property-functions)
 
## Arithmetic operations 

### Addition

**Signature**: $A_{\text{Char}}{~}B_{\text{Char}}\rightarrow\text{Char}$.

**Behavior**: adds $A$ and $B$ together.

**Usage**

```
// Language: Clean

'1' + '1' //  49 + 49 ->  98 ('b')
'A' + 'A' //  65 + 65 -> 130 ('é')
'a' + 'a' //  97 + 97 -> 194 ('┬')
```

### Subtraction

**Signature**: $A_{\text{Char}}{~}B_{\text{Char}}\rightarrow\text{Char}$.

**Behavior**: subtracts $B$ from $A$.

**Usage**

```
// Language: Clean

'z' - '0' // 122 - 48 -> 74 ('J')
'z' - '1' // 122 - 49 -> 73 ('I')
'z' - '2' //  97 + 50 -> 72 ('H)
```

[Back to top](#)

---

## Relational operations

### Equal to

**Signature**: $A_{\text{Char}}{~}B_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is equal to $B$.

**Usage**

```
// Language: Clean

'1' == 'A' // False
'a' == '1' // False
'A' == 'a' // False
'1' == '1' // True
```

### Not equal to

**Signature**: $A_{\text{Char}}{~}B_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is not equal to $B$.

**Usage**

```
// Language: Clean

'1' <> 'A' // True
'a' <> '1' // True
'A' <> 'a' // True
'1' <> '1' // False
```

### Less than

**Signature**: $A_{\text{Char}}{~}B_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is less than $B$.

**Usage**

```
// Language: Clean

'1' < 'A' // True
'a' < '1' // False
'A' < 'a' // True
'1' < '1' // False
```

### Less than or equal to

**Signature**: $A_{\text{Char}}{~}B_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is less than or equal to $B$.

**Usage**

```
// Language: Clean

'1' <= 'A' // True
'a' <= '1' // False
'A' <= 'a' // True
'1' <= '1' // True
```

### Greater than

**Signature**: $A_{\text{Char}}{~}B_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is greater than $B$.

**Usage**

```
// Language: Clean

'1' > 'A' // False
'a' > '1' // True
'A' > 'a' // False
'1' > '1' // False
```

### Greater than or equal to

**Signature**: $A_{\text{Char}}{~}B_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is greater than or equal to $B$.

**Usage**

```
// Language: Clean

'1' >= 'A' // False
'a' >= '1' // True
'A' >= 'a' // False
'1' >= '1' // True
```

[Back to top](#)

---

## Standard functions

### Upper case

**Signature**: $A_{\text{Char}}\rightarrow\text{Char}$.

**Behavior**: returns upper case of $A$ if possible.

**Usage**

```
// Language: Clean

toUpper '1' // '1'
toUpper 'a' // 'A'
toUpper 'A' // 'A'
toUpper '-' // '-'
```

### Lower case

**Signature**: $A_{\text{Char}}\rightarrow\text{Char}$.

**Behavior**: returns lower case of $A$ if possible.

**Usage**

```
// Language: Clean

toLower '1' // '1'
toLower 'a' // 'a'
toLower 'A' // 'a'
toLower '-' // '-'
```

[Back to top](#)

---

## Property functions

### Lower case property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is an lower case character or not.

**Usage**

```
// Language: Clean

isLower '1' // False
isLower 'a' // True
isLower 'A' // False
isLower '-' // False
```

### Upper case property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is an upper case character or not.

**Usage**

```
// Language: Clean

isUpper '1' // False
isUpper 'a' // False
isUpepr 'A' // True
isUpper '-' // False
```

### Alphanumeric property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is alphanumeric or not.

**Usage**

```
// Language: Clean

isAlphanum '1' // True
isAlphanum 'a' // True
isAlphanum 'A' // True
isAlphanum '-' // False
```

### Alphabetic property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is a alphabet or not.

**Usage**

```
// Language: Clean

isAlpha '1' // False
isAlpha 'a' // True
isAlpha 'A' // True
isAlpha '-' // False
```

### Numeric property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is a digit or not.

**Usage**

```
// Language: Clean

isDigit '1' // True
isDigit 'a' // False
isDigit 'A' // False
isDigit '-' // False
```

### Octal numeric property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is an octal digit or not.

**Usage**

```
// Language: Clean

isOctDigit '1' // True
isOctDigit '8' // False
isOctDigit 'a' // False
isOctDigit 'A' // False
isOctDigit '-' // False
```

### Hexadecimal numeric property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is a hexadecimal digit or not.

**Usage**

```
// Language: Clean

isHexDigit '1' // True
isHexDigit 'G' // False
isHexDigit 'a' // True
isHexDigit 'A' // True
isHexDigit '-' // False
```

### ASCII property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is an ASCII character or not.

**Usage**

```
// Language: Clean

isAscii '1' // True
isAscii 'a' // True
isAscii 'A' // True
isAscii '-' // True
isAscii 'Ç' // False
```

### Control character property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is a control character or not.

**Usage**

```
// Language: Clean

isControl '1'  // False
isControl 'a'  // False
isControl 'A'  // False
isControl '-'  // False
isControl '\t' // True
```

### Printable property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is printable or not.

**Usage**

```
// Language: Clean

isPrint '1'  // True
isPrint 'a'  // True
isPrint 'A'  // True
isPrint '-'  // True
isPrint '\t' // False
```

### Space property

**Signature**: $A_{\text{Char}}\rightarrow\text{Bool}$.

**Behavior**: checks if $A$ is a space character or not.

**Usage**

```
// Language: Clean

isSpace '1'  // False
isSpace 'a'  // False
isSpace 'A'  // False
isSpace '-'  // False
isSpace '\t' // True
```

[Back to top](#)

---