---
title: "Research-First Skill"
summary: "Claude Code skill that forces agents to find existing tools, libraries, and templates before reinventing the wheel."
date: 2026-04-21
category: AI/Automation
stack: ["Claude Code", "Markdown", "Agent Skills"]
featured: true
repo: https://github.com/niveku/skill-research-first
---

## Problem

Coding agents default to writing code. Ask one to "build a CSV diff tool" and it generates 300 lines of Python before it checks whether `csvdiff`, `daff`, or a dozen pandas one-liners already do the job. You maintain those 300 lines, you debug them, and you spend the time you wanted for the part nobody has solved yet.

## What I Built

Research-First is a Claude Code skill that injects a research step before any "build" action. When the user asks the agent to create, implement, set up, or automate something, the skill triggers a short discovery pass: search GitHub topics, check npm/PyPI, look for existing MCPs and Claude skills, scan for relevant templates and datasets. The agent reports what already exists, then proposes a path with a stated reason: adopt the tool, fork it, or build from scratch.

## Integration

The skill ports across coding agents. I authored it as a Claude Code skill (Markdown + frontmatter), and the same prompt shape works in Codex, Gemini CLI, and any agent that reads skill-like instruction sets. Triggers cover the verbs that precede a from-scratch build: "build me a", "I want to create", "add X to my project", "is there a library for", "set up Y", "write a report/template/strategy/PRD".

## Outcome

My agent sessions produce fewer from-scratch builds. The agent now searches for an existing solution and writes net-new code only when it can state why the existing options fall short. Even when I keep the generated code, I walk away with a curated map of the tools, libraries, and templates that already cover the problem.
