# Temp

## Tuples

### Defining A Tuple

**Type annotation**:
$(\textbf{T},\ \textbf{K})$,
$(\textbf{T},\ \textbf{K},\ \textbf{V})$,
$(\textbf{T},\ \textbf{K},\ \textbf{V},\ \textbf{E})$
et cetera.

A tuple contains finite number of elements.
Elements do not have to be the same type.
Every type appears in a tuple must be specified, and singleton tuples are not allowed.

**Constructors**

```
// Language: Clean

A :: (Int, Char)
A =  (49, '1')

B :: (Real, Bool, String)
B =  (0.2, False, "Hi")

C :: (Int)
C =  (2, 6)  // NOT OK should be (Int, Int)

D :: (Int)
D =  (2)     // NOT OK
```

More information about built-in operations and functions on lists can be found on:

- [Appendix A: StdTuple](stdtuple.md).

### Tuple Patterns

Tuples can be used as patterns in a similar way to lists.
However, colon ($:$) is not allowed in tuple patterns.

```
// Language: Clean

getFst :: (T, K, V) -> T
getFst    (x, y, z) =  x

getSnd :: (T, K, V) -> K
getSnd    (x, y, z) =  y

getThd :: (T, K, V) -> V
getThd    (x, y, z) =  z
```

The results of these function calls are as expected:

```
// Language: Clean

getFst (1, 'a', 1.0)  // 1
getSnd (1, 'a', 1.0)  // 'a'
getThd (1, 'a', 1.0)  // 1.0
```

## Arrays

### Defining An Array

**Type annotation**:
$\{\textbf{Int}\}$,
$\{\textbf{Char}\}$,
$\{\textbf{T}\}$,
et cetera.

An array contains a finite number of elements.
Elements of an array have to be of the same type.

**Constructors**

```
// Language: Clean

{1, 2, 3, 4}
{1.0, 2.0, 3.0, 4.0}

"abc"
// equivalent to
// {'a', 'b', 'c'}
```

An array can be constructed from comprehension by surrounding a comprehension with $\{\ldots\}$.

More information about built-in operations and functions on lists can be found on:

- [Appendix A: StdArray](stdarray.md), and
- [Appendix A: StdString](stdstring.md).

---

# Defining New Types

As a strongly typed language, every object and function in CLEAN has a type.
The basic can be extended with algebraic types, record types, abstract types and synonym types.

New types can only be defined on the global level.

## Algebraic Data Types

### Defining An Algebraic Data Type

An algebraic data type introduces a new data structure and a constructor.

It has the following syntax.

```
// Language: Clean

:: [tName] = [tConstructor]
```

An algebraic data type can have multiple constructors.
Constructors defined in the same global scope must have names.
Constructors must be separated by a vertical bar ($|$).

```
// Language: Clean

:: [tName] = [tConstructorA] | [tConstructorB] | [tConstructorC]
```

For readability, constructors may be placed on different lines.

```
// Language: Clean

:: [tName] = [tConstructorA]
           | [tConstructorB]
           | [tConstructorC]
```

For example, a basic algebraic type can be defined as follows.

```
// Language: Clean

:: Mood = Happy | Sad
```

Constructors also accept types as arguments, but they must be declared on the left-hand side.
Once declared, these generic types can be referred to by any of its constructors.

```
// language: Clean

:: [tName] T K = [tConstructorA] T
               | [tConstructorB] K
               | [tConstructorC] T K
```

For example, a binary tree, which is has a recursive structure can be defined as follows.

```
// language: Clean

:: Tree = Branch Tree Tree
        | Leaf
```

An infix constructor is defined by surrounding its name with parentheses.
They must have an arity of two.
The precedence and fixity of an such constructor follows that of an operator, which is discussed in Chapter I.

```
// Language: Clean

:: [tName] T K =  [tConstructorA]  T
               |  [tConstructorB]  K
               | ([tConstructorC]) T K

:: [tName] T K =  [tConstructorA]  T
               |  [tConstructorB]  K
               | ([tConstructorC]) [fixity] [precedence] T K
```

For example, the $\text{Branch}$ constructor can be rewritten as an infix constructor.

```
// language: Clean

:: TreeInfix = (/\) infixr 0 Tree Tree
             | Leaf
```

The precedence and fixity of an infix constructor can be omitted.
The default precedence is $9$, and the default fixity is $\textbf{infixl}$.

```
// language: Clean

:: TreeInfix = (/\) Tree Tree
             | Leaf
```

### Creating Objects Of Algebraic Data Types

Objects of simple algebraic data types are created by invoking one of its constructors.

```
// Language: Clean

:: Mood = Sad | Happy

A :: Mood
A =  Happy

B :: Mood
B =  Sad
```

If a constructor accepts arguments, it should be invoked with appropriate arguments.

```
// Language: Clean

:: Tree = Branch Tree Tree
        | Leaf

A :: Tree
A =  Leaf

B :: Tree
B =  Branch Leaf Leaf

C :: Tree
C =  Branch Leaf (Branch Leaf Leaf)
```

Infix constructors behave in a similar way.

```
// language: Clean

:: TreeInfix = (/\) TreeInfix TreeInfix
               | Leaf

A :: TreeInfix
A =  Leaf

B :: TreeInfix
B =  Leaf /\ Leaf

C :: TreeInfix
C =  (/\) Leaf Leaf

D :: TreeInfix
D =  Leaf /\ (Leaf /\ Leaf)
```

### Algebraic Data Type Patterns

To use a algebraic data type as a pattern, use its constructors.

```
// Language: Clean

:: Mood = Sad | Happy

isHappy :: Mood    -> Bool
isHappy    (Happy) =  True
isHappy    _       =  False
```

With the same process, complex algebraic data types can be used as patterns as well.

```
// Language: Clean

:: Tree = Branch Tree Tree
        | Leaf

isBranch :: Tree           -> Bool
isBranch    (Branch l r)   =  True
isBranch    _              =  False

:: TreeInfix = (/\) TreeInfix TreeInfix
               | Leaf

isBranchInfix :: TreeInfix -> Bool
isBranchInfix   (l/\r)     =  True
isBranchInfix   _          =  False
```

## Record Types

A record type is an algebraic data type in which exactly one constructor is defined.
A field name is attached to each of the arguments of the constructor.

### Defining A Record Type

A record type is a tuple-like algebraic data structure that has the advantage that its elements can be selected by field name rather than by position.

A simple record type can be defined as follows.

```
// Language: Clean

:: [tName] = { [fieldName] :: [fieldType] }
```

Fields must be separated commas ($,$).

```
// Language: Clean

:: [tName] = { [fNameA] :: [fTypeA] , [fNameB] :: [fTypeB] , [fNameC] :: [fTypeC]  }
```

To increase readability, fields can be placed on different lines.

```
// Language: Clean

:: [tName] = { [fNameA] :: [fTypeA]
             , [fNameB] :: [fTypeB]
             , [fNameC] :: [fTypeC]
             }
```

For example, a record type for representing complex numbers can be defined as follows.

```
// Language: Clean

:: Complex = { re :: Real
             , im :: Real
             }
```

### Creating Objects Of Record Types

The field names are case-sensitive, but the field order does not matter.
Every field of a record type must be given.

```
// Language

:: Complex = { re :: Real
             , im :: Real
             }

A :: Complex
A =  { re = 1.0 , im = 0.0 }

B :: Complex
B =  { im = 1.0 , re = 0.0}
```

The name of a record type can be added to the constructor.
In such a case, the type annotation can be omitted.

```
// Language: Clean

:: Point = { x :: Int
           , y :: Int
           }

:: Position = { x :: Int
              , y :: Int
              }

// A :: Point
// A =  { x = 0 , y = 0 }
A =  { Point | x = 0 , y = 0 }

// B :: Position
// B =  { x = 0 , y = 0 }
B =  { Position | x = 0 , y = 0 }
```

**Record update**

A new record object can be constructed from an existing one.

```
// Language: Clean

{ [oldObject] & [fName] = [newValue] }
```

Multiple fields can be updated all at once.

```
// Language: Clean

{ [oldObject] & [fNameA] = [newValueA] , [fNameB] = [newValueB] }
```

For example:

```
// Language: Clean

:: PosThree = { x :: Int
              , y :: Int
              , z :: Int
              }

A :: PosThree
A =  { x = 0 , y = 0 , z = 0 }  // (PosThree 0 0 0)

B :: PosThree
B =  { A & x = 1 , y = 1 }      // (PosThree 1 1 0)
```

### Record Type Patterns

An object of type record can be specified as pattern.
Not every field must be used.

```
// Language: Clean

:: PosThree = { x :: Int
              , y :: Int
              , z :: Int
              }

isZeroX :: PosThree -> Bool
isZeroX    { x=0 }  =  True
isZeroX    _        =  False

A :: PosThree
A =  { x = 0 , y = 0 , z = 0 }

isZeroX A  // True

B :: PosThree
B =  { A & x = 1 , y = 1 }

isZeroX B  // False
```

Alternatively, record fields can be extracted without patterns.

```
// Language: Clean

:: PosThree = { x :: Int
              , y :: Int
              , z :: Int
              }

isZeroY :: PosThree -> Bool
isZeroY    { y=r }    =  r == 0
```

In the implementation above, the record field $y$ is extracted to $r$.
It can be used referred by the body.

Record fields can be extracted to an identifier of the same name.

```
:: PosThree = { x :: Int
              , y :: Int
              , z :: Int
              }

isZeroZ :: PosThree -> Bool
isZeroZ    { z }    =  z == 0
```

The implementation above is equivalent to the following:

```
// Language: Clean

isZeroZ :: PosThree -> Bool
isZeroZ    { z=z }  =  z == 0
```

**Record field selection**

The value of a record field can be selected using dot operator ($.$).

```
// Language: Clean

[recordObj].[fName]
```

For example, a simple getter function on $\textbf{Point}$ can be defined as follows.

```
:: Point = { x :: Int
           , y :: Int
           }

getX :: Point -> Int
getX    p     =  p.x

A :: Point
A =  { x = 1 , y = 0 }

getX a  // 1
```

## Synonym Types

Synonym types allow for an introduction of a new type name for an existing type.

### Defining A Synonym Type

A simple synonym type has the follow syntax:

```
// Language: Clean

:: [tName] :== [existingType]
```

For example, an array of characters can be viewed as a string.

```
// Language: Clean

:: String :== {Char}
```

Synonym types also accept generic types as arguments.

```
// Language: Clean

:: [tName] T K :== [existingType] T K
```

For example, an arity-two operator can be shortened with a synonym type.

```
// Language: Clean

:: Op T :== T T -> T

// add :: Int Int -> Int
add :: (Op Int)
```

---

# Overloading

## Overloaded Functions

Functions and operators are defined on built-in types.
However, when interacting with custom data types, they do not have any defined function or operator.

That is, adding two objects of $\textbf{Complex}$ type is not allowed.

```
// Language: Clean

:: Complex = { re :: Real
             , im :: Real
             }

a :: Complex
a =  { re = 0.0 , im = 1.0 }

b :: Complex
b =  { re = 0.0 , im = 1.0 }

a + b  // NOT OK :(
```

This happens because addition is not defined on $\textbf{Complex}$ type.

In this case, addition can be overloaded on $\textbf{Complex}$ type.

```
// Language: Clean

instance + Complex
where
    (+) x y = { Complex | re=(x.re + y.re) , im=(x.im + y.im)}

a + b  // (Complex 0.0 2.0)
```

Only after overloading the addition operation on $\textbf{Complex}$ that the addition is allowed.
In other word, the complier now knows the meaning of complex number addition.

A list of functions and operations which can be overloaded can be found on [Appendix A: StdOverloaded](stdoverloaded.md).

### Defining An Overloaded Function Or Operator

To overload the built-in functions and operations, the general syntax is as follows.

```
// Language: Clean

instance [clsName] [typeVars]
where
    [fnImplementation]
    [opImplementation]
```

Functions and operators can be defined in terms of existing overloaded functions.
This is especially useful when dealing with generic types.

```
// Language: Clean

increment :: T -> T
increment    x =  x + 1
```

It is adding an object of type $\textbf{T}$ and $1$ which is an integer.
Unless the addition is instantiated for mentioned types, this implementation would not work as intended.

One way to ensure that it works for all type is to introduce class context.

```
increment :: T -> T | + T & one T
increment    x =  x + one
```

The new implementation requires that the addition operation, as well as, $\textbf{one}$ unit is defined on a generic type $\textbf{T}$.

In this case, the function is defined in terms of an overloaded function and a unit.

Such declaration has the following syntax.

```
// Language: Clean

[fnName] :: [typeVars] -> [typeVar] | [clsConstraints]
```

Class constraints are separated by ampersands ($\&$).

## Classes

A class gives name to a group of overloaded functions and operators.
These functions and operators are members of the class.

```
// Language: Clean

class Equal T
where
    (==) infixl 4 :: T T -> Bool
    (<>) infixl 4 :: T T -> Bool
```

The class $\text{Eq}$ has two members.
They are equality and inequality operators.

To instantiate a class, all of its members must be implemented.

```
// Language: Clean

instance Equal Complex
where
    (==) x y = (x.re == y.re) && (x.im == y.im)
    (<>) x y = (x.re <> y.re) || (x.im <> y.im))
```

A list of classes can be found on [Appendix A: StdClass](stdclass.md).

### Defining A Class

As shown above, a class simple provides a name to collection of logically-linked functions and operations.

It can be defined with the following syntax.

```
// Language: Clean

class [clsName] [typeVars]
where
    [fnDeclaration]
    [opDeclaration]
```

Type variables declared can be referred to by all of its member, but they must be given as arguments when the class is instantiated.

```
// Language: Clean

class MinMaxC T K
where
    minC :: T T -> K
    maxC :: T T -> K

instance MinMax Real Int
where
    minC x y = toInt (min x y)
    maxC x y = toInt (max x y)
```