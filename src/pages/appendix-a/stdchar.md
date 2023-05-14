---
layout: "@layouts/Blog.astro"
title: "Appendix A: StdChar"

Last updated: MAY 13th, 2023
Revisions: 3
Data of last revision: MAY 13th, 2023
---

## Contents

- [Part I: Arithmetic Operations](#part-i-arithmetic-operations)
- [Part II: Relational Operations](#part-ii-relational-operations)
- [Part III: Basic Functions](#part-iii-basic-functions)
- [Part IV: Property Functions](#part-iv-property-functions)
- [Part V: Conversions To Characters](#part-v-conversions-to-characters)
 
## Part I: Arithmetic Operations 

### 1.1 Addition

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Char}$.

**Behavior**: $a$ and $b$ are converted to their ASCII values, then their sum is converted back to a character.

**Usage**

```
// Language: Clean

'1' + '1'  // 49 + 49 ->  98 ('b')
'A' + 'A'  // 65 + 65 -> 130 ('é')
'a' + 'a'  // 97 + 97 -> 194 ('┬')
```

### 1.2 Subtraction

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$, and $R$ are of type $\textbf{Char}$.

**Behavior**: $a$ and $b$ are converted to their ASCII values, then result of their subtraction is converted back to a character.

**Usage**

```
// Language: Clean

'z' - '0'  // 122 - 48 -> 74 ('J')
'z' - '1'  // 122 - 49 -> 73 ('I')
'z' - '2'  //  97 + 50 -> 72 ('H')
```

[Back to top](#)

---

## Part II: Relational Operations

### 2.1 Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$ are of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is lexicography equal to $b$.

**Usage**

```
// Language: Clean

'1' == 'A'  // False
'a' == '1'  // False
'A' == 'a'  // False
'1' == '1'  // True
```

### 2.2 Not Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$ are of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is lexicography not equal to $b$.

**Usage**

```
// Language: Clean

'1' <> 'A'  // True
'a' <> '1'  // True
'A' <> 'a'  // True
'1' <> '1'  // False
```

### 2.3 Less Than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$ are of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is lexicography less than $b$.

**Usage**

```
// Language: Clean

'1' < 'A'  // True
'a' < '1'  // False
'A' < 'a'  // True
'1' < '1'  // False
```

### 2.4 Less Than Or Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$ are of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is lexicography less than or equal to $b$.

**Usage**

```
// Language: Clean

'1' <= 'A'  // True
'a' <= '1'  // False
'A' <= 'a'  // True
'1' <= '1'  // True
```

### 2.5 Greater Than

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$ are of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is lexicography greater than $b$.

**Usage**

```
// Language: Clean

'1' > 'A'  // False
'a' > '1'  // True
'A' > 'a'  // False
'1' > '1'  // False
```

### 2.6 Greater Than Or Equal To

**Signature**

$$
\begin{align*}
a\rightarrow{b}\rightarrow{R}
\end{align*}
$$

where:
- $a$, $b$ are of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is lexicography greater than or equal to $b$.

**Usage**

```
// Language: Clean

'1' >= 'A'  // False
'a' >= '1'  // True
'A' >= 'a'  // False
'1' >= '1'  // True
```

[Back to top](#)

---

## Part III: Basic Functions

### 3.1 toUpper

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns upper case of $a$ if possible.

**Usage**

```
// Language: Clean

toUpper '1'  // '1'
toUpper 'a'  // 'A'
toUpper 'A'  // 'A'
toUpper '-'  // '-'
```

### 3.2 toLower

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: returns lower case of $a$ if possible.

**Usage**

```
// Language: Clean

toLower '1'  // '1'
toLower 'a'  // 'a'
toLower 'A'  // 'a'
toLower '-'  // '-'
```

[Back to top](#)

---

## Part IV: Property Functions

### 4.1 isLower

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is an lower case character or not.

**Usage**

```
// Language: Clean

isLower '1'  // False
isLower 'a'  // True
isLower 'A'  // False
isLower '-'  // False
```

### 4.2 isUpper

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is an upper case character or not.

**Usage**

```
// Language: Clean

isUpper '1'  // False
isUpper 'a'  // False
isUpepr 'A'  // True
isUpper '-'  // False
```

### 4.3 isAlphanum

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is alphanumeric or not.

**Usage**

```
// Language: Clean

isAlphanum '1'  // True
isAlphanum 'a'  // True
isAlphanum 'A'  // True
isAlphanum '-'  // False
```

### 4.4 isAlpha

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is an alphabet or not.

**Usage**

```
// Language: Clean

isAlpha '1'  // False
isAlpha 'a'  // True
isAlpha 'A'  // True
isAlpha '-'  // False
```

### 4.5 isDigit

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is a digit or not.

**Usage**

```
// Language: Clean

isDigit '1'  // True
isDigit 'a'  // False
isDigit 'A'  // False
isDigit '-'  // False
```

### 4.6 isOctDigit

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is an octal digit or not.

**Usage**

```
// Language: Clean

isOctDigit '1'  // True
isOctDigit '8'  // False
isOctDigit 'a'  // False
isOctDigit 'A'  // False
isOctDigit '-'  // False
```

### 4.7 isHexDigit

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is a hexadecimal digit or not.

**Usage**

```
// Language: Clean

isHexDigit '1'  // True
isHexDigit 'G'  // False
isHexDigit 'a'  // True
isHexDigit 'A'  // True
isHexDigit '-'  // False
```

### 4.8 isAscii

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is an ASCII character or not.
Internally, it checks whether the ASCII value of $a$ is less than $128$ or not.

**Usage**

```
// Language: Clean

isAscii '1'  // True
isAscii 'a'  // True
isAscii 'A'  // True
isAscii '-'  // True
isAscii 'Ç'  // False
```

### 4.9 isControl

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is a control character or not.
Internally, it checks whether ASCII value of $a$ is between $[0,\ 31]\cup\{127\}$ or not.

**Usage**

```
// Language: Clean

isControl '1'   // False
isControl 'a'   // False
isControl 'A'   // False
isControl '-'   // False
isControl '\t'  // True
```

### 4.10 isPrint

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is printable or not.
Internally, it checks whether ASCII value of $a$ is between $[32,\ 126]$ or not.

**Usage**

```
// Language: Clean

isPrint '1'  // True
isPrint 'a'  // True
isPrint 'A'  // True
isPrint '-'  // True
isPrint '\t' // False
```

### 4.11 isSpace

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Char}$, and
- $R$ is of type $\textbf{Bool}$.

**Behavior**: checks if $a$ is a space character or not.
Internally, it checks whether $a$ is one of the follow character of not:

```
' '  
'\t'
'\n'
'\r' 
'\f'
'\v'
```

**Usage**

```
// Language: Clean

isSpace '1'   // False
isSpace 'a'   // False
isSpace 'A'   // False
isSpace '-'   // False
isSpace '\t'  // True
```

[Back to top](#)

---

## Part V: Conversions To Characters

### 5.1 Integers To Characters

**Signature**

$$
\begin{align*}
a\rightarrow{R}
\end{align*}
$$

where:
- $a$ is of type $\textbf{Int}$, and
- $R$ is of type $\textbf{Char}$.

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