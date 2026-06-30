# Week 3 Prompt Log: Marp Slides on the Fibonacci Sequence

## Iteration 1: The Bare Prompt
**Exact Prompt:**
> Make a Marp slide deck about the Fibonacci sequence.

**Summary of Output:**
Copilot generated a very basic 3-slide markdown file. It included a title slide, a slide with the first 10 numbers of the sequence, and a brief slide saying it appears in nature.

**Problems Noticed:**
1. The presentation was far too brief (only 3 slides) and lacked any depth.
2. No Marp theme directives (like `theme: default`) were included in the front matter.
3. It entirely missed the mathematical relationship to the Golden Ratio, which is the most interesting part of the topic.

---

## Iteration 2: Adding Structure and Themes
**What I was trying to fix:** I wanted to enforce a specific length, ensure it actually compiled properly as a Marp deck with a theme, and include the Golden Ratio.

**Exact Prompt:**
> Create a 5-slide Marp presentation about the Fibonacci Sequence and its connection to the Golden Ratio. Include a YAML front matter with `theme: default` and `paginate: true`.

**Summary of Output:**
The output improved significantly. It provided exactly 5 slides, included the correct Marp front matter, and dedicated two slides to explaining the Golden Ratio.

**What improved / What is still wrong:**
* **Improved:** The structure is much better, and pagination/themes are correctly implemented.
* **Still Wrong:** The math was written out in plain text (e.g., "phi is roughly 1.618") instead of showing the actual mathematical formulas using LaTeX. Also, presentations need visual elements, and this was purely text blocks.

---

## Iteration 3: Adding Math and Visual Placeholders
**What I was trying to fix:** I needed to force the AI to format the mathematical formulas correctly using LaTeX and prompt it to leave spaces/placeholders for visual aids.

**Exact Prompt:**
> Refine the 5-slide Marp presentation on the Fibonacci Sequence and Golden Ratio. Add the formal recurrence relation and the limit formula for the golden ratio (phi) using standard LaTeX formatting ($ and $$). Also, include explicit markdown image placeholders for a "Fibonacci Spiral" and "The Golden Rectangle".

**Summary of Output:**
Copilot successfully integrated LaTeX formulas for the sequence ($F_n = F_{n-1} + F_{n-2}$) and the limit approaching $\phi$. It also added `![Fibonacci Spiral](image-url-here)` tags.

**What improved / What is still wrong:**
* **Improved:** The mathematical rigor is excellent now, and there are visual placeholders.
* **Still Wrong:** The text on the slides became giant paragraphs. To be a good presentation, the text needs to be broken down into concise bullet points so the audience doesn't have to read walls of text.

---

## Iteration 4: Final Polish for Scannability
**What I was trying to fix:** I wanted to format the text into concise bullet points for better presentation readability and switch to a more visually appealing built-in Marp theme.

**Exact Prompt:**
> Update the Marp presentation. Make the text on all slides highly concise using short bullet points. Ensure slide 1 is a title slide, slide 2 defines the sequence with its recurrence relation in LaTeX, slide 3 explains the Golden Ratio with the limit formula in LaTeX, slide 4 shows real-world examples (nature/art) with an image placeholder, and slide 5 is a conclusion. Change the theme to `gaia`.

**Summary of Output:**
The final output is perfectly balanced. It uses the `gaia` theme, features highly readable bullet points, renders LaTeX correctly, and follows a logical 5-slide flow.