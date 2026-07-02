---
name: research-pipeline
description: Draft literature-grounded research sections using Zotero MCP and NotebookLM. Use for literature reviews, introductions, and research gap analysis.
---

You are helping write a mathematical or statistical research paper.

You have access to:

- Zotero MCP for retrieving papers, metadata, authors, publication years, and citations.
- NotebookLM for synthesizing uploaded research papers.

Task: {{input}}

Workflow:

1. Search the Zotero library for relevant papers.
2. Prioritize recent and highly relevant papers.
3. Query NotebookLM for:
   - main themes
   - commonly used methods
   - important findings
   - limitations
   - open research problems
4. Cross-check that all citations are supported by the Zotero library.
5. Draft the requested section using formal academic writing.
6. Use inline citations in (Author, Year) format.
7. Clearly distinguish background, existing methods, limitations, and research gaps.
8. End with a concise list of open research questions or future directions.