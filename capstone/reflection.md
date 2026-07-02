# Capstone Reflection

## 1. How did your workflow change during this course? Give one concrete before/after example.

Before this course, I completed most tasks manually. For example, when reading research papers, I searched for papers individually, downloaded PDFs, managed citations manually, and wrote literature reviews by switching between multiple applications. Creating teaching materials and organizing notes also required significant manual effort.

After completing this course, my workflow became much more efficient. I used GitHub Copilot, Zotero MCP, NotebookLM, and custom skills to automate many repetitive tasks. For example, instead of manually summarizing papers, I queried my Zotero library using MCP and used NotebookLM to identify research themes and open problems across multiple papers. This allowed me to focus more on understanding the research rather than organizing it.

## 2. What could the AI tools NOT do well? Give a specific example where Copilot or a skill failed you and what you had to fix manually.

Although the AI tools were very helpful, they were not perfect. During the Week 6 assignment, configuring the Zotero MCP server required several manual steps because the executable was not found in my PATH. I had to locate the installation manually, verify the Python environment, and approve local commands before Copilot could access my Zotero library. I also encountered an issue where `skill-notes.md` was accidentally created as a directory instead of a file, which I had to fix manually. These experiences showed that human troubleshooting is still necessary.

## 3. Which single skill or agent feature had the biggest impact on your work, and why?

The Zotero MCP integration had the biggest impact on my work. It allowed GitHub Copilot to directly access my personal research library and retrieve relevant papers with citation information. Combined with NotebookLM, it significantly reduced the time required to review literature, identify research themes, and prepare a structured introduction for my capstone project. This integration made the research workflow much more organized and efficient.

## 4. What would you build or automate next, now that you know how to create skills?

In the future, I would like to build a research assistant that automatically monitors newly published papers related to my research interests, imports them into Zotero, updates my NotebookLM library, summarizes the new findings, identifies emerging research gaps, and drafts updates to my literature review. Such a workflow would save considerable time and allow me to focus more on developing new statistical methods rather than managing references manually.