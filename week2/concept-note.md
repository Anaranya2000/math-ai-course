# Taylor Series

## Definition
A Taylor series represents a sufficiently smooth function as an infinite sum of derivatives evaluated at a single point.

For a function f(x) centered at x = a, the expansion is:

\[
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
\]

## Example
Consider \( f(x) = e^x \). Since all derivatives of \( e^x \) are \( e^x \), evaluated at \( a = 0 \), we obtain:

\[
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
\]

For example, using the first three terms:

\[
e^x \approx 1 + x + \frac{x^2}{2}
\]

This approximation becomes more accurate as more terms are included.

## Why it matters
Taylor series provide a bridge between nonlinear functions and polynomial approximations, which are easier to analyze and compute in both theoretical and applied settings.