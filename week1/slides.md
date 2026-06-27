```markdown
---
marp: true
theme: default
paginate: true
---

# Linear Regression
## A Fundamental Machine Learning Technique

**Week 1**

---

# What is Linear Regression?

- A supervised learning algorithm
- Models relationships between variables
- Predicts continuous outcomes
- Widely used in statistics, economics, finance, and AI

Linear regression is often the first predictive model introduced in statistics because it is easy to understand and interpret.

---

# Mathematical Model

Simple linear regression is written as

$$
y=\beta_0+\beta_1x+\varepsilon
$$

where

- $y$ = response variable
- $x$ = predictor variable
- $\beta_0$ = intercept
- $\beta_1$ = slope
- $\varepsilon$ = random error

---

# Least Squares Estimation

The coefficients are estimated by minimizing the residual sum of squares:

$$
RSS=\sum_{i=1}^{n}(y_i-\hat y_i)^2
$$

The matrix solution is

$$
\hat{\beta}=(X^TX)^{-1}X^Ty
$$

This provides the best-fitting regression line under the least squares criterion.

---

# Assumptions and Applications

## Assumptions

- Linear relationship
- Independent observations
- Constant variance
- Normally distributed errors

## Applications

- Sales forecasting
- Healthcare prediction
- Environmental modeling
- Economic analysis
- Machine learning

---

# Summary

- Linear regression models relationships between variables.
- It estimates coefficients using the least squares method.
- The model is simple, interpretable, and computationally efficient.
- It provides a strong foundation for more advanced machine learning methods such as ridge regression and lasso regression.

Thank you!
```
