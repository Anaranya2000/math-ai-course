"""
Week 2: Numerical Integration via Riemann Sums

This script explores how definite integrals can be approximated using
left-endpoint Riemann sums. It compares numerical approximations with
exact symbolic integration and visualizes convergence behavior.


Core idea:
If f is integrable on [a, b], then
∫_a^b f(x) dx ≈ Σ f(x_i) Δx as n → ∞
"""
# %%
%matplotlib inline
# %% [setup — run once, then delete]
%pip install numpy sympy matplotlib
# %%
# Cell 1: Define function and compute exact integral (SymPy)
# ---------------------------------------------------------
# Import required libraries (sympy, numpy, matplotlib)
# Define:
#   - function f(x)
#   - interval [a, b]
#   - symbolic exact integral using sympy

# Let Copilot complete:
import sympy as sp
# %%
# Cell 2: Riemann sum implementation (left endpoint rule)
# ---------------------------------------------------------
# Define a function that computes:
#   R_n = Σ f(x_i) Δx
# for n rectangles over [a, b]

import numpy as np


def riemann_left(f, a, b, n):
    # Copilot to implement:
    # return approximation using left endpoints
    pass


# %%
# Cell 3: Plot function + Riemann rectangles (n = 5)
# ---------------------------------------------------------
# Plot:
#   - continuous function curve
#   - rectangles under curve using n = 5

import matplotlib.pyplot as plt


# Copilot: implement plotting logic for visualization


# %%
# Cell 4: Error analysis vs n
# ---------------------------------------------------------
# Compute approximation error:
#   error(n) = |exact_value - R_n|
# Plot error for n = 1 to 100

# Copilot: implement loop + error computation + plot
# %%
