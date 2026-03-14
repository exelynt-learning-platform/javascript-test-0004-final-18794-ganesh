# javascript-test-0004-final-18794-ganesh
Final Project Assignment - This repository contains the complete final project code and documentation.


# Concentric Number Square Pattern (JavaScript)

## Assignment Description

This program prints a **concentric square number pattern** using JavaScript loops.
The value of **N** is taken from the user as input through the terminal.

Example Pattern for **N = 4**

```
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4
```

---

# Concepts Used

* Nested Loops
* Matrix Traversal
* Mathematical Layer Logic
* `Math.min()` function
* Node.js `readline` module for user input

---

# Program Logic

1. Take input **N** from the user.
2. Calculate the size of the square matrix:

```
size = 2 * n - 1
```

3. For every position `(i, j)` calculate its distance from:

* Top
* Bottom
* Left
* Right

4. The smallest distance represents the **layer** of the pattern.

5. Print the number using:

```
value = n - minDistance
```

This creates decreasing layers from **N → 1 → N** forming a concentric pattern.

---

# How to Run the Program

### 1️⃣ Install Node.js

Download and install Node.js from the official website.

### 2️⃣ Create a file

```
pattern.js
```

### 3️⃣ Run the program

```
node pattern.js
```

### 4️⃣ Enter the value when prompted

```
Enter the value of N: 4
```

---

# Time Complexity ⏱️

The program uses **two nested loops** that run `size × size` times.

Since:

```
size = 2n - 1
```

The time complexity becomes:

```
O(n²)
```

because the program traverses the entire matrix.

---

# Space Complexity 💾

The program only uses a few variables (`i`, `j`, `row`, etc.) and does not store the matrix.

```
O(1)
```

Constant extra space is used.

---

# Example

Input

```
4
```

Output

```
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4
```
