---
dg-publish: true
---

# Boolean Type

Booleans are represented using 8 bits values.

For built-in functions and operations on Boolean type, see [[APX A StdBool]].

## Boolean Type Declaration

Boolean type is explicitly declared with `Bool`.

```Clean
// Language: Clean

expr :: Bool
expr =  1 == 1
```

## Boolean Literals

They have two constructors.
One for each logical value.

```Clean
// Language: Clean

x :: Bool
x =  True
x =  False
```

%%
## Using Boolean Literal as Pattern

### Example A

```Clean
// Language: Clean

exampleA :: Bool -> Bool
exampleA    True =  False
exampleA    _    =  True
```

Python equivalent:

```Python
# Python

def exampleA(arg: bool) -> bool:
	match arg:
		case True:
			return False
		case _:
			return True
```

### Example B

```Clean
// Language: Clean

exampleB :: Bool Bool  -> Bool
exampleB    True True  =  False
exampleB    _    _     =  True
```

Python equivalent:

```Python
# Python

def exampleB(
	argA: bool, 
	argB: bool
) -> bool:
	match (argA,  argB):
		case (True, True):
			return True
		case _:
			return False
```
%%