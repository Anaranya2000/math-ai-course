---
marp: true
theme: default
paginate: true
size: 16:9
---

# Ridge Regression
## Regularization for stable prediction in linear models

**Graduate students in Statistics, Data Science, and Machine Learning**

---

# Learning Objectives

By the end of this lecture, students should be able to:

- explain why OLS can be unstable under multicollinearity
- motivate Ridge Regression from a bias-variance perspective
- derive the ridge estimator
- interpret the role of the tuning parameter $\lambda$
- compare Ridge Regression with ordinary least squares

---

# Why Ridge Regression?

Ordinary least squares minimizes

$$
\|y - X\beta\|_2^2.
$$

When predictors are highly correlated, OLS can produce:

- unstable coefficient estimates,
- large variance,
- poor out-of-sample performance.

Ridge Regression adds a penalty to discourage overly large coefficients.

---

# Intuition

Ridge balances two competing goals:

1. fit the data well,
2. keep the parameter vector small.

This introduces a small bias in exchange for a larger reduction in variance.

The idea is simple: prefer a slightly biased but more stable model.

---

# Ridge Regression Objective

The ridge estimator solves

$$
\hat{\beta}_{\text{ridge}}
=
\arg\min_{\beta}
\left\{
\frac{1}{2n}\sum_{i=1}^n (y_i - x_i^\top \beta)^2
+ \lambda \sum_{j=1}^p \beta_j^2
\right\}.
$$

- first term: least-squares loss,
- second term: $\ell_2$ penalty,
- $\lambda \ge 0$: regularization strength.

---

# Derivation

Write the objective as

$$
\mathcal{L}(\beta)
=
\frac{1}{2n}\|y - X\beta\|_2^2 + \lambda \|\beta\|_2^2.
$$

Differentiate with respect to $\beta$ and set the gradient to zero:

$$
\frac{1}{n}X^\top(X\beta - y) + 2\lambda \beta = 0.
$$

Rearranging gives

$$
\hat{\beta}_{\text{ridge}}
=
(X^\top X + 2n\lambda I)^{-1}X^\top y.
$$

This is the ridge estimator.

---

# Role of the Tuning Parameter $\lambda$

The parameter $\lambda$ controls the amount of shrinkage:

- $\lambda = 0$: ordinary least squares,
- small $\lambda$: mild shrinkage,
- large $\lambda$: stronger shrinkage and simpler models.

Increasing $\lambda$ reduces variance, but may increase bias.

---

# Ridge Regression vs. Ordinary Least Squares

| Method | Objective | Effect |
|---|---|---|
| OLS | $\min_\beta \|y - X\beta\|_2^2$ | minimizes training error only |
| Ridge | $\min_\beta \left\{\|y - X\beta\|_2^2 + \lambda \|\beta\|_2^2\right\}$ | shrinks coefficients and stabilizes estimates |

Ridge is especially useful when predictors are correlated or when the number of predictors is large.

---

# Summary

Ridge Regression is a regularization method that improves stability by shrinking coefficients.

It solves

$$
\min_{\beta}
\left\{
\frac{1}{2n}\|y - X\beta\|_2^2 + \lambda \|\beta\|_2^2
\right\}.
$$

The central tradeoff is clear: a modest increase in bias can yield a substantial gain in predictive reliability.
