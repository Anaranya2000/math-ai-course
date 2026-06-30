# Study Guide: Sparse Estimation with the LASSO

# Intuition

Modern datasets often contain hundreds or thousands of predictors. Ordinary Least Squares (OLS) estimates all coefficients regardless of whether they are useful, which may lead to overfitting and poor prediction.

The Least Absolute Shrinkage and Selection Operator (LASSO) addresses this issue by shrinking some regression coefficients exactly to zero. As a result, LASSO performs both variable selection and coefficient estimation simultaneously.

Imagine trying to explain house prices using 500 variables. Many variables contribute very little. LASSO automatically removes unnecessary predictors, leaving only the important ones.

---

# Formal Definition

Suppose

\[
y=X\beta+\varepsilon
\]

where

- \(y\in\mathbb{R}^{n}\)
- \(X\in\mathbb{R}^{n\times p}\)

The ordinary least squares estimator minimizes

\[
\min_{\beta}
\|y-X\beta\|_2^2
\]

The LASSO estimator solves

\[
\hat\beta
=
\arg\min_\beta
\left\{
\|y-X\beta\|_2^2
+
\lambda
\sum_{j=1}^{p}
|\beta_j|
\right\}
\]

where

- \(\lambda\ge0\) controls regularization.
- Larger values of \(\lambda\) produce sparser models.

---

# Worked Example 1

Consider

| Predictor | Coefficient |
|-----------|-------------|
| X1 | 4.5 |
| X2 | 0.1 |
| X3 | -0.05 |

Suppose

\[
\lambda=1
\]

The LASSO penalty is

\[
1(4.5+0.1+0.05)=4.65
\]

Since X2 and X3 contribute very little, increasing λ causes these coefficients to shrink toward zero.

Final model

\[
y=4.2X_1
\]

Only X1 remains.

---

# Worked Example 2

Suppose two predictors are highly correlated:

Height (cm)

Height (inches)

OLS typically keeps both variables.

LASSO recognizes the redundancy and often sets one coefficient exactly equal to zero.

This simplifies interpretation while maintaining predictive performance.

---

# Practice Problems

## Problem 1

Why does LASSO perform variable selection?

### Solution

Because the L1 penalty creates corners in the optimization geometry, allowing coefficients to become exactly zero.

---

## Problem 2

What happens if λ = 0?

### Solution

The optimization reduces to ordinary least squares.

---

## Problem 3

What happens when λ becomes extremely large?

### Solution

Nearly every coefficient shrinks toward zero, leading to an overly simple model that may underfit.

---

# Connections to Other Areas

## Optimization

LASSO is fundamentally a convex optimization problem involving an L1 penalty.

---

## Machine Learning

LASSO is widely used for feature selection before predictive modeling.

---

## High-Dimensional Statistics

When

\[
p>n
\]

OLS has infinitely many solutions.

LASSO often produces a unique sparse estimator.

---

## Bayesian Statistics

LASSO corresponds to placing a Laplace prior on regression coefficients.

---

# Key Takeaways

- LASSO performs estimation and feature selection simultaneously.
- The tuning parameter λ controls sparsity.
- Larger λ gives simpler models.
- LASSO is useful in high-dimensional settings.
- It connects optimization, statistics, Bayesian inference, and machine learning.