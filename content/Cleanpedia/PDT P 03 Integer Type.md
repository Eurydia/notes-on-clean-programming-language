---
dg-publish: true
---

# Integer Type

Integers are represented using 32 bits or 64 bits values.

For built-in functions and operations on integer type, see [[Appendix A/StdInt|StdInt]] module for additional information.

## Integer Type Declaration

Integer type is explicitly declared with `Int`.

```Clean
// Language: Clean

expr :: Int
expr =  1 + 1
```

## Integer Literals

They can be constructed from decimal notation.

```Clean
// Language: Clean

x :: Int
x = -13
x =  0
x =  13
```

They can be constructed from octal notation by prefixing octal digits with `0`.

```Clean
// Language: Clean

x :: Int
x = -015  // decimal -13
x =  00   // decimal  0
x =  015  // decimal  13
```

And they can be constructed from hexadecimal notation by prefixing hexadecimal digits with `0x`.

```Clean
// Language: Clean

x :: Int
x = -0xD  // decimal -13
x =  0x0  // decimal  0
x =  0xd  // decimal  13
```

%%## Integer Pattern in Functions

### Example A

```Clean
// Language: Clean

exampleA :: Int -> Bool
exampleA    1   =  True
exampleA    _   =  False
```

The `exampleA` function has two equivalent variants.

One variant is obtained by using octal notation instead of decimal notation.

```Clean
// Language: Clean

exampleA :: Int -> Bool
exampleA    01  =  True
exampleA    _   =  False
```

And another variant is obtained by using hexadecimal notation.

```Clean
// Language: Clean

exampleA :: Int -> Bool
exampleA    0x1 =  True
exampleA    _   =  False
```

Python equivalent:

```Python
# Python

def exampleA(n: int) -> bool
	match n:
		case 1:
			return True
		case _:
			return False
```

### Example B

```Clean
// Language: Clean

exampleB :: Int Int -> Int
exampleB    x   0   =  x
exampleB    0   y   =  y
exampleB    x   y   =  x + y
```

The `exampleB` function has many equivalent variants.

A variant is obtained by using octal notation.

```Clean
// Language: Clean

exampleB :: Int Int -> Int
exampleB    x   00  =  x
exampleB    00  y   =  y
exampleB    x   y   =  x + y
```

A variant is obtained by using hexadecimal notation.

```Clean
// Language: Clean

exampleB :: Int Int -> Int
exampleB    x   0x0 =  x
exampleB    0x0 y   =  y
exampleB    x   y   =  x + y
```

A variant is obtained by mixing octal notation and hexadecimal notation.

```Clean
// Language: Clean

exampleB :: Int Int -> Int
exampleB    x   00  =  x
exampleB    0x0 y   =  y
exampleB    x   y   =  x + y
```

Python equivalent:

```Python
# Python

def exampleB(
	n: int,
	m: int
) -> int:
	match (n, m):
	case (_, 0):
			return n
		case (0, _):
			return m
		case _:
			return n + m
```

## Integer Pattern in Comprehensions

When an integer literal is used on the left side of a generator, it evokes a pattern matching behavior.

```Clean
// Language: Clean

example :: [ Int ]
example =  [ 9 \\ 1 <- [ 1, 2, 3 ] ]
```

The extracted elements must match the integer literal.
Otherwise, the iteration is skipped.

Python equivalent: 

```Python
# Python

example: list[int] = []
for e in [1, 2, 3]:
	match e:
		case 1:
			pass
		case _:
			continue
	example.append(9)
```

The same effect is achieved with [[PDT S 05 Comprehensions#Example E Conditional Iteration]], but logical operations must be defined on the type, which is the benefit of this method.

```Clean
// Language: Clean

example :: [ Int ]
example =  [ 9 \\ x <- [ 1, 2, 3 ] | x == 1 ]
```%%
