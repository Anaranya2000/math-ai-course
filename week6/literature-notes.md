# Literature Notes

## Query 1: Zotero MCP

### Prompt

Using the Zotero MCP, list all papers in my library as a numbered list with year, title, and a one-sentence description.

### Response
Based on the provided research papers, there are three primary research themes that involve modernizing classical ridge regression for the high-dimensional era. These themes focus on expanding theoretical frameworks, improving the ability to handle sparse data, and optimizing computational performance.

### 1. High-Dimensional and Dimension-Free Theoretical Frameworks
A central theme is moving beyond classical low-dimensional assumptions—where the number of samples ($n$) is much larger than variables ($p$)—to understand how ridge regression behaves when $p \gg n$ or even when $p$ is infinite.

*   **Beyond Proportional Asymptotics:** Recent research seeks to move past "proportional asymptotics" (where $p/n$ is a constant ratio) to a **"dimension-free"** characterization. This allows ridge regression to be analyzed in separable Hilbert spaces where features are infinite-dimensional.
*   **Benign Overfitting:** A major theoretical focus is the phenomenon of **"benign overfitting,"** which identifies specific data distributions (based on the decay of eigenvalues in the covariance matrix) where minimum-norm interpolators—the limit of ridge regression as regularization vanishes—remain consistent even in highly overparameterized settings.
*   **Equivalent Sequence Models:** Modern theory approximates complex ridge regression bias and variance by comparing them to a simpler "equivalent sequence model" with a diagonal design matrix, providing a more intuitive characterization of risk.

### 2. Sparsity-Aware Adaptations and Model Selection
While classical ridge regression is criticized because it cannot preserve or recover sparsity (it typically produces non-zero coefficients for all variables), several papers focus on adapting it to handle sparse signals.

*   **Debiasing and Thresholding:** To make ridge regression competitive with methods like Lasso, researchers have introduced **improved ridge regression** that uses debiasing and thresholding. These techniques allow ridge regression to effectively "zero out" insignificant parameters, recovering the underlying sparsity of a model while maintaining a closed-form solution.
*   **Stability Selection:** Another approach involves **stability selection**, which uses subsampling to identify stable variables. This technique is shown to improve variable selection performance for ridge regression in high-dimensional survival models (such as AFT models used in cancer research), where high dimensionality often causes selection instability.

### 3. Computational Optimization and Iterative Methods
As datasets grow in scale, research has shifted toward making regularized regression computationally more efficient and connecting it to modern optimization algorithms.

*   **Iterative Optimization:** The papers explore the link between **early stopping** in iterative methods and explicit regularization. For example, **Elastic Gradient Descent (EGD)** is introduced as a faster alternative to the Elastic Net. EGD generalizes gradient descent and coordinate descent, providing similar solution paths to the Elastic Net but at a speed that is often orders of magnitude faster.
*   **Closed-Form Advantages:** Researchers emphasize that improved (debiased/thresholded) ridge regression is preferable to Lasso in many settings because it retains a **closed-form expression**. This makes it easier to compute and more robust against non-optimal hyperparameter choices compared to the iterative solvers required for Lasso.

### Main Open Questions in This Research Area
The sources identify several unresolved challenges and areas for future exploration:

*   **Relaxing Covariate Assumptions:** A significant open question is whether the current sharp characterizations of ridge regression risk hold for covariates that **do not satisfy the Hanson-Wright concentration property**. Current proofs rely heavily on specific concentration inequalities that may not apply to all real-world data types.
*   **Non-Identifiability in Overparameterization:** When $p > n$, the true parameter vector $\beta$ may not be identifiable. Research is still grappling with how to effectively choose between estimating different "parameters" (like the projection of $\beta$) and how these choices affect the interpretation of the results.
*   **Proof Artifacts vs. Statistical Necessity:** There is an open question regarding certain mathematical constraints used in current proofs, such as the requirement $\lVert \beta \rVert_{\Sigma^{-1}} < \infty$. It is unclear if these are necessary for the model to function or if they are simply "proof artifacts" that could be relaxed to the weaker condition $\lVert \beta \rVert_{\Sigma} < \infty$.
*   **Application to Complex Models:** While ridge-like regularization is well-understood for linear models, there is significant interest in extending these iterative optimization methods (like Elastic Gradient Descent) to **train neural networks**, potentially creating models that naturally grow in complexity as training time increases.