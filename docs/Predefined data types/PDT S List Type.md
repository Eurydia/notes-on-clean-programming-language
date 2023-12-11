---
dg-publish: true
---

# List Type

Lists can contain an infinite number of elements. 
Elements of a list must be of the same type. 

For built-in functions and operations on list, see [[StdList|StdList]], [[StdCharList|StdCharList]], and [[StdOrdList|StdOrdList]] module for additional information.

## List Type Declaration

Lazy list is explicitly declared by placing the element type inside a pair of square brackets (`[ ... ]`).

```Clean
// Language: Clean

expr :: [ Int ]
expr =  [ 1, 2, 3 ]
```

List type can be placed in front of element type.

```Clean
// Language: Clean

expr :: [ ] Int
expr =  [ 1, 2, 3 ]
```

## List Literals

They are the explicit enumeration of elements, and can be used as patterns.

Commas (`,`) are used to separate each element of a list.

```Clean
// Language: Clean

x :: [ Int ]
x =  [ 1, 2, 3 ]
```

Colons (`:`) act as right-associate pseudo-operator in list construction.
They accept two arguments, which are an element on its left and a list on its right.
They evaluate by prepending the element to the front of the list, and return a new list.

```Clean
// Language: Clean

x :: [ Int ]
x =  [ 1 : 2 : 3 : [] ]
x =  [ 1 : [ 2 : [ 3 : [] ] ] ]
```

Commas and colons can be used together.

```Clean
// Language: Clean

x :: [ Int ]
x =  [ 1 : [ 2, 3 ] ]
x =  [ 1, 2 : [ 3 ] ]
```

A special constructor is provided for lists of characters.

By placing multiple characters inside a pair of single quotation marks (`' ... '`), each character is treated as an element of the list.

```Clean
// Language: Clean

xc :: [ Char ]
xc =  [ 'a', 'b', 'c' ]
xc =  [ 'abc' ]
```

Commas can be used with this special notation.

```Clean
// Language: Clean

xc :: [ Char ]
xc =  [ 'a', 'bc' ]
```

## Implicit List Construction

Lists can be implicitly constructed, but they cannot be used as patterns.

Colons can be used to construct lists from existing ones.

```Clean
// Language: Clean

x :: [ Int ]
x =  [ 2, 3 ]

y :: [ Int ]
y =  [ 1 : x ]
```

Dot-Dot expressions construct lists from enumerable data types, see [[PDT S List Type Dot-Dot Expressions]].

And comprehensions construct list using from generators, see [[PDT S Comprehensions]].

## Additional List Types

So far only lazy lists are discussed, but other types of lists are:
- head strict, 
- tail strict, 
- strict, 
- unboxed head strict,
- unboxed strict, and 
- overloaded.

They are considered different type with unique time and space properties.

Functions defined on one type of list cannot be applied to others.
However, a function defined on overloaded list can be applied to any type of list.

Head strict lists are explicitly declared by placing an exclamation mark (`!`) after the opening square bracket (`[! ... ]`).

```Clean
// Language: Clean

x :: [! Int ]
x =  [! 1, 2, 3 ]
```

Tail strict lists are explicitly declared by placing an exclamation mark (`!`) before the closing square bracket (`[ ... !]`).

```Clean
// Language: Clean

x :: [ Int !] 
x =  [ 1, 2, 3 !]
```

Strict lists are explicitly declared by placing an exclamation mark (`!`) after and before the square bracket (`[! ... !]`).

```Clean
// Language: Clean

x :: [! Int !]
x =  [! 1, 2, 3 !]
```

Unboxed head strict lists are explicitly declared by placing a hash symbol (`#`) after the opening square bracket (`[ # ... ]`).

```Clean
// Language: Clean

x :: [ # Int ]
x =  [ # 1, 2, 3 ]
```

Unboxed strict lists are explicitly declared by placing a hash symbol (`#`) and an exclamation mark (`!`) after the opening square bracket (`[ #! ... ]`).

```Clean
// Language: Clean

x :: [ #! Int ]
x =  [ #! 1, 2, 3 ]
```

Overloaded lists are explicitly declared by placing a vertical (`|`) bar after the opening square bracket (`[ | ... ]`).

```Clean
// Language: Clean

x :: [ | Int ]
x =  [ | 1, 2, 3 ]
```



%%
## Using List Literal as Pattern

Example A:

```Clean
// Language: Clean

exampleA :: [ Int ] -> Bool
exampleA    [ x ]   =  True
exampleA    _       =  False
```

The function `exampleA` returns `True` if it is called with a list of exactly one element.

Example B:

```Clean
// Language: Clean

exampleB :: [ Int ]     -> Bool
exampleB    [ x, y, z ] =  True
exampleB    _           =  False
```

The function `exampleB` returns `True` if it is called with a list of exactly three elements.

There are many equivalent variants to the function `exampleB`.

One variant is obtained by using colons instead of commas.

```Clean
// Language: Clean

exampleB :: [ Int ]            -> Bool
exampleB    [ x : y : z : [] ] =  True
exampleB    _                  =  False
```

Another variant is obtained by using a combination of commas and colons.

```Clean
// Language: Clean

exampleB :: [ Int ]           -> Bool
exampleB    [ x , y : [ z ] ] =  True
exampleB    _                 =  False
```

Example C:

```Clean
// Language: Clean

exampleC :: [ T ]      -> Bool
exampleC    [ x : ls ] =  True
exampleC    _          =  False
```

The function `exampleC` returns true if it is called with a list of at least one element.

Example D:

```Clean
// Language: Clean

exampleD :: [ Int ]          -> Bool
exampleD    [ x, y, z : ls ] =  True
exampleD    _                =  False
```

The function `isLenGtThree` yields true if it is called with a list with at least three elements.

Example E:

```Clean
// Language: Clean

exampleE :: [ Int ] -> Bool
exampleE    [ 1 ]   =  True
exampleE    _       =  False
```

The function `isLenOne` yields true if it is called with a list of exactly one element.
And that element must be one.

Example F:

```Clean
// Language: Clean

exampleF :: [ Int ]     -> Bool
exampleF    [ 1, y, z ] =  True
exampleF    _           =  False
```

The function `exampleF` returns true if it is called with a list of exactly three elements.
The first element of the list must be 1.

## Labelling List Pattern

Lists are lazy by default, but other variants are:
- head strict, 
- spine strict, 
- strict, 
- head strict unboxed, and
- strict unboxed. 

These variants are considered different type with unique time and space properties.
Functions defined on one type of list cannot be applied to another. 
However, overloaded functions can be introduced, which can be used on any type of list.


%%