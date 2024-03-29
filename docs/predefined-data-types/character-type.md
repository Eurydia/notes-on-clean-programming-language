
# Character type

For built-In functions and operations on characters, see [[stdchar]].

## Type annotation

Characters are annotated with `Char`.

```Clean
// Language: Clean

expr :: Char
expr =  'a'
```

## Character Literals

Character literals are created by enclosing a character within single quotation marks (`'...'`).

```Clean
// Language: Clean

x :: Char
x =  '1'
x =  'a'
x =  'A'
x =  '+'
```

%%
## Using Character Literal as Pattern

### Example A

```Clean
// Language: Clean

exampleA :: Char -> Bool
exampleA    'G'  =  True
exampleA    _    =  False
```

Python equivalent:

```Python
# Python

def exampleA(arg: str) -> bool:
	match arg:
		case "G":
			return True
		case _:
			return False
```

### Example B

```Clean
// Language: Clean

exampleB :: Char -> Bool
exampleB    'G'  =  True
exampleB    'g'  =  True
exampleB    _    =  False
```

Python equivalent:

```Python
# Python

def exampleB(arg: str) -> bool:
	match arg:
		case "G":
			return True
		case "g":
			return True
		case _:
			return False
```

### Example C

```Clean
// Language: Clean

exampleC :: Char Char -> Bool
exampleC    'G'  'G'  =  True
exampleC    _    _    =  False
```

Python equivalent:

```Python
# Python

def exampleC(
	argA: str, 
	argB: str
) -> bool:
	match (argA, argB):
		case ("G", "G"):
			return True
		case _:
			return False
```

### Example D

```Clean
// Language: Clean

exampleD :: Char Char -> Bool
exampleD    'G'  'G'  =  True
exampleD    'G'  'g'  =  True
exampleD    'g'  'G'  =  True
exampleD    'g'  'g'  =  True
exampleD    _    _    =  False
```

Python equivalent:

```Python
# Python

def exampleD(
	argA: str, 
	argB: str
) -> bool:
	match (argA, argB):
		case ("G", "G"):
			return True
		case ("G", "g"):
			return True
		case ("g", "G"):
			return True
		case ("g", "g"):
			return True
		case _:
			return False
```
%%