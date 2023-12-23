# Puzzles

A collection of CLEAN code snippets for common questions and problems.

## Break an integer into its digits

**Problem**

Given an integer $n$, how can we obtain each individual digit of it?

**Expected result**

```clean
// CLEAN

toDigits 123   // [1, 2, 3]
toDigits 456   // [4, 5, 6]
toDigits 1234  // [1, 2, 3, 4]
toDigits 4567  // [4, 5, 6, 7]
```

### Using recursion

**Solution**

```clean
// CLEAN

toDigits :: Int -> [Int]
toDigits    n 
| (abs n) < 10  =  [n]
| otherwise     =  (toDigits (n / 10)) ++ [n rem 10]
```

**Explanation**:

This approach takes advantage of the reminder division operation.
Before the next iteration, $n$ is divided by $10$, this step removes the last digit of $n$ since it has already been placed in the list.

The [[stdint#`abs`|abs]] expands domain of our function from $[0,\ \infty)$ to $(-\infty,\ \infty)$.

### List comprehension

```clean
// CLEAN

toDigits :: Int -> [Int]
toDigits    n   =  [(toInt d) - 48 \\ d <-: (toString n)]
```

**Explanation**

Since arrays can be freely converted to lists and vice versa, we can convert $n$ to an array.

In this case, $n$ is converted into an array of $\text{Char}$.
$\text{toInt}$ then converts each digit of $n$ to $\text{Int}$.

However, the $\text{Char}\rightarrow\text{Int}$ conversions are ASCII based.
That is 
- character $1$ converts to integer value $49$, 
- character $2$ converts to integer value $50$, and so on.

In the final step, an offset value of $48$ is subtracted from the result.

---

## Computing divisors of an integer

**Expected result**

```CLEAN
// CLEAN

divisorsOf 9  // [1, 3, 9]
divisorsOf 16 // [1, 2, 4, 8, 16]
divisorsOf 2  // [1, 2]
divisorsOf 0  // [0]
```

### List comprehension

```CLEAN
// CLEAN

isDivisible :: Int Int -> Bool
isDivisible    x   y   =  (x rem y) == 0

divisorsOf :: Int -> [Int]
divisorsOf    0   =  [0]
divisorsOf    n   =  [d \\ d <- [1..(abs n)] | isDivisible n d]
```

**Explanation**:

A list of integers is generated.
It contains integers in $[1,\ \lvert{n}\rvert]$ interval.

The helper function $\text{isDivisible}$ determines which integer will be placed in the list, and which integer will be discarded.

If an integer $d$ is a divisor of $n$, it is included in the list.
If it does not full divide $n$, it is discarded.

---

## Checking if an integer is prime

**Expected result**:

```CLEAN
// CLEAN

isPrime 9 // False
isPrime 3 // True
isPrime 1 // False
isPrime 0 // False
```

### Counting divisors list (comprehension)

```CLEAN
// CLEAN

isPrime :: Int -> Bool
isPrime 0 = False
isPrime 1 = False
isPrime n = length (filter isDivisorOfN [d \\ d <- ds]) == 0
where
	ds :: [Int]
	ds =  [2..(n - 1)]

	isDivisorOfN :: Int -> Bool
	isDivisorOfN k = (n rem k) == 0
```

**Explanation**:

For $n \gt 1$, a list of integers from $2$ to $n - 1$ is constructed.
The list filtered to only contain divisors of $n$.

If the divisor list is empty, $n$ is a prime number.

### Using list of booleans

```CLEAN
// CLEAN

isPrime :: Int -> Bool
isPrime 0 = False
isPrime 1 = False
isPrime n = not (or [n rem d == 0 \\ d <- [2..(n - 1)]]) 
```
