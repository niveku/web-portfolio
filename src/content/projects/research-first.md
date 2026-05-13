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

Coding agents default to writing code. Ask one to "build a CSV diff tool" and it will happily generate 300 lines of Python before noticing that `csvdiff`, `daff`, and a dozen pandas one-liners already exist. The cost shows up later — in maintenance, in bugs, in time that could have gone into the parts of the problem that are actually unsolved.

## What I Built

Research-First is a Claude Code skill that injects a research step before any "build" action. When the user asks the agent to create, implement, set up, or automate something, the skill triggers a short discovery pass: search GitHub topics, check npm/PyPI, look for existing MCPs and Claude skills, scan for relevant templates and datasets. Only after the agent reports what already exists does it propose a path forward — adopt, fork, or build from scratch — with an explicit justification.

## Integration

The skill is portable across coding agents. It's authored as a Claude Code skill (Markdown + frontmatter), but the same prompt shape works in Codex, Gemini CLI, and any agent that supports skill-like instruction sets. Triggers cover the verbs that usually precede wheel-reinvention: "build me a", "I want to create", "add X to my project", "is there a library for", "set up Y", "write a report/template/strategy/PRD".

## Outcome

Significantly less wheel-reinvention across daily agent sessions. The skill changes the default from "write code" to "find existing solution, then justify net-new code if needed." Side benefit: the discovery output itself often becomes the most useful artifact of a session — a curated map of the relevant ecosystem.
