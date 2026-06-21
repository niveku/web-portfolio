---
title: "Building AI Workflows with Claude Code and MCPs"
summary: "How I run Claude Code, custom skills, and Model Context Protocol servers across development, writing, and knowledge management, so each improvement to the setup feeds the next."
date: 2026-04-23
tags: ["AI", "claude-code", "automation", "workflow", "MCP"]
---

You open a chat with most AI tools, ask a question, get an answer, and move on. The next session starts cold. The model has no memory of your project, your codebase, or the decisions you made yesterday.

Claude Code closes that gap when you build around it on purpose.

## What Claude Code is

Claude Code is a CLI for Claude that runs in your terminal with direct access to your file system, shell, and tools. It reads your code, runs commands, writes files, and chains those operations across a session. It takes actions on your behalf instead of handing you text to copy.

The layer that matters sits on top: the plugin and skill system. Skills are reusable instruction sets stored as Markdown files. MCPs (Model Context Protocol servers) connect the model to external systems like your Obsidian vault, your calendar, a database, or an API.

## The compounding effect

I write a skill once and invoke it many times. With a skill for "write a cover letter from this job description using my career materials," I skip re-explaining the task, the format, and the context each time. The skill carries all three.

MCPs add persistent context. When Claude Code reads my Obsidian vault, it works from the source of truth instead of notes I copy-pasted. When I ask it to check my career narrative against a new role, it pulls the current version rather than one I remembered to paste.

Each improvement to the setup feeds the next. A sharper career OS in Obsidian produces sharper AI-assisted career work. A better code-review skill speeds up reviews on every project that follows.

## What breaks

Context accumulation over long sessions is the weak point. A long conversation fills the context window, and the model's output degrades. Claude Code runs compaction on its own, yet I still keep each session focused on one task and one context.

Skills need maintenance too. An instruction that fit one version of a workflow stops fitting once I change the workflow. I treat skills the way I treat code: review them, watch the debt they accumulate, and remember that a bad skill produces bad output every time I run it.

## The practical setup

My current stack:

- **Claude Code** as the primary interface for development and writing work.
- **Custom skills** for career OS operations, code review, session management, and content production.
- **Obsidian MCP** for direct vault access to career materials, project notes, and the knowledge base.
- **File-based memory** so context accumulates across sessions rather than resetting daily.

I call the setup OpenClaw. It's personal infrastructure, a set of conventions that makes AI assistance practical for the way I work day to day. I don't ship it as a product or a framework.

## What geospatial engineers can use this for

If you work in GIS, data engineering, or scientific software:

- **Documentation automation:** generate technical documentation from code structure + domain context from your notes.
- **Data pipeline review:** describe your pipeline in natural language, have the AI identify edge cases and failure modes.
- **Spatial analysis documentation:** connect the AI to your project files and have it describe what each processing step does.
- **Career materials:** maintain a living technical portfolio that the AI can query when tailoring applications.

The tooling is early and the conventions are still settling, yet the compounding already shows. Build a workflow around AI and you keep gaining on the version of you that reaches for it ad-hoc.
