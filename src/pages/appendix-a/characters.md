---
layout: "@layouts/Blog.astro"
title: "Appendix A: Characters"

Last updated: April 26th, 2023
Revisions: 2
Data of last revision: 12 APR 2023
---

## Table of contents

- [Arithmetic operations](#arithmetic-operations)
	- [Addition](#addition)
	- [Subtraction](#subtraction)
- [Relational operations](#relational-operations)
	- [Equal to](#equal-to)
	- [Not equal to](#not-equal-to)
	- [Less than](#less-than)
	- [Less than or equal to](#less-than-or-equal-to)
	- [Greater than](#greater-than)
	- [Greater than or equal to](#greater-than-or-equal-to)
- [Basic functions](#basic-functions)
	- [toUpper](#toupper)
	- [toLower](#tolower)
- [Property functions](#property-functions)
	- [isLower](#islower)
	- [isUpper](#isupper)
	- [isAlphanum](#isalphanum)
	- [isAlpha](#isalpha)
	- [isDigit](#isdigit)
	- [isOctDigit](#isoctdigit)
	- [isHexDigit](#ishexdigit)
	- [isAscii](#isascii)
	- [isControl](#iscontrol)
	- [isPrint](#isprint)
	- [isSpace](#isspace)
- [Conversions to characters](#conversions-to-characters)
	- [Integers to characters](#integers-to-characters)
 
## Arithmetic operations 

### Addition

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$,
- $b$ is of type $\text{Char}$, and
- $R$ is of type $\text{Char}$.

**Behavior**: adds $a$ and $b$ together.

**Usage**

```
// Language: Clean

'1' + '1' //  49 + 49 ->  98 ('b')
'A' + 'A' //  65 + 65 -> 130 ('é')
'a' + 'a' //  97 + 97 -> 194 ('┬')
```

### Subtraction

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$,
- $b$ is of type $\text{Char}$, and
- $R$ is of type $\text{Char}$.

**Behavior**: subtracts $b$ from $a$.

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

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$,
- $b$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is equal to $b$.

**Usage**

```
// Language: Clean

'1' == 'A' // False
'a' == '1' // False
'A' == 'a' // False
'1' == '1' // True
```

### Not equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$,
- $b$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is not equal to $b$.

**Usage**

```
// Language: Clean

'1' <> 'A' // True
'a' <> '1' // True
'A' <> 'a' // True
'1' <> '1' // False
```

### Less than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$,
- $b$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is less than $b$.

**Usage**

```
// Language: Clean

'1' < 'A' // True
'a' < '1' // False
'A' < 'a' // True
'1' < '1' // False
```

### Less than or equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$,
- $b$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is less than or equal to $b$.

**Usage**

```
// Language: Clean

'1' <= 'A' // True
'a' <= '1' // False
'A' <= 'a' // True
'1' <= '1' // True
```

### Greater than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$,
- $b$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is greater than $b$.

**Usage**

```
// Language: Clean

'1' > 'A' // False
'a' > '1' // True
'A' > 'a' // False
'1' > '1' // False
```

### Greater than or equal to

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$,
- $b$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is greater than or equal to $b$.

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

## Basic functions

### toUpper

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns upper case of $a$ if possible.

**Usage**

```
// Language: Clean

toUpper '1' // '1'
toUpper 'a' // 'A'
toUpper 'A' // 'A'
toUpper '-' // '-'
```

### toLower

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: returns lower case of $a$ if possible.

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

### isLower

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is an lower case character or not.

**Usage**

```
// Language: Clean

isLower '1' // False
isLower 'a' // True
isLower 'A' // False
isLower '-' // False
```

### isUpper

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is an upper case character or not.

**Usage**

```
// Language: Clean

isUpper '1' // False
isUpper 'a' // False
isUpepr 'A' // True
isUpper '-' // False
```

### isAlphanum

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is alphanumeric or not.

**Usage**

```
// Language: Clean

isAlphanum '1' // True
isAlphanum 'a' // True
isAlphanum 'A' // True
isAlphanum '-' // False
```

### isAlpha

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is an alphabet or not.

**Usage**

```
// Language: Clean

isAlpha '1' // False
isAlpha 'a' // True
isAlpha 'A' // True
isAlpha '-' // False
```

### isDigit

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is a digit or not.

**Usage**

```
// Language: Clean

isDigit '1' // True
isDigit 'a' // False
isDigit 'A' // False
isDigit '-' // False
```

### isOctDigit

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is an octal digit or not.

**Usage**

```
// Language: Clean

isOctDigit '1' // True
isOctDigit '8' // False
isOctDigit 'a' // False
isOctDigit 'A' // False
isOctDigit '-' // False
```

### isHexDigit

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is a hexadecimal digit or not.

**Usage**

```
// Language: Clean

isHexDigit '1' // True
isHexDigit 'G' // False
isHexDigit 'a' // True
isHexDigit 'A' // True
isHexDigit '-' // False
```

### isAscii

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$is an ASCII character or not.

**Usage**

```
// Language: Clean

isAscii '1' // True
isAscii 'a' // True
isAscii 'A' // True
isAscii '-' // True
isAscii 'Ç' // False
```

### isControl

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is a control character or not.

**Usage**

```
// Language: Clean

isControl '1'  // False
isControl 'a'  // False
isControl 'A'  // False
isControl '-'  // False
isControl '\t' // True
```

### isPrint

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is printable or not.

**Usage**

```
// Language: Clean

isPrint '1'  // True
isPrint 'a'  // True
isPrint 'A'  // True
isPrint '-'  // True
isPrint '\t' // False
```

### isSpace

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Char}$, and
- $R$ is of type $\text{Bool}$.

**Behavior**: checks if $a$ is a space character or not.

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

## Conversions to characters

### Integers to characters

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\text{Int}$, and
- $R$ is of type $\text{Char}$.

**Behavior**: converts $a$ to its ASCII character.

**Usage**

```
// Language: Clean

toChar 49 // '1'
toChar 65 // 'A'
toChar 97 // 'a'
```

[Back to top](#)

---