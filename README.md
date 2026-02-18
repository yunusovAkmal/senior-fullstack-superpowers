# Senior Fullstack Superpowers

A production-grade Claude Code plugin merging **[obra/superpowers](https://github.com/obra/superpowers)** (the methodology engine) with **[affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)** (the breadth toolkit).

**Stacks:** TypeScript/React/Next.js · Node.js/Bun · Python (FastAPI/Django) · Go

## What's Inside

### From Superpowers (verbatim, battle-tested workflow skills)
- **using-superpowers** — Skill discipline bootstrap (mandatory skill invocation)
- **brainstorming** — Design-before-code with incremental approval
- **writing-plans** — 2-5 min TDD tasks for subagent execution
- **subagent-driven-development** — Fresh agent per task + two-stage review (spec → quality)
- **executing-plans** — Parallel session plan execution with checkpoints
- **test-driven-development** — Iron Law: no production code without a failing test
- **systematic-debugging** — 4-phase root cause (+ root-cause-tracing, defense-in-depth, condition-based-waiting)
- **requesting-code-review** / **receiving-code-review** — Review discipline
- **verification-before-completion** — Evidence before claims
- **using-git-worktrees** — Isolated feature workspaces
- **finishing-a-development-branch** — Merge/PR/keep/discard with cleanup
- **dispatching-parallel-agents** — Concurrent independent problem solving

### From Everything-Claude-Code (agents, rules, hooks, commands)
- **13 agents** — planner, code-reviewer, security-reviewer, architect, tdd-guide, e2e-runner, database-reviewer, etc.
- **11 commands** — /plan, /tdd, /code-review, /verify, /e2e, /build-fix, /test-coverage, /checkpoint, /refactor-clean, /update-docs, /sessions
- **Stack-specific skills** — frontend-patterns (React/Next.js), backend-patterns (Node/API), security-review
- **Language rules** — TypeScript, Python, Go (coding-style, patterns, security, testing, hooks per language)
- **Quality hooks** — Auto-format on edit, TypeScript check, console.log detection, dev-server tmux enforcement, pre-push review

### The Hybrid Advantage
- Superpowers enforces **the workflow** (brainstorm → plan → TDD → subagent → review → verify)
- ECC provides **the depth** (language-specific rules, security scanning, 13 specialized agents, quality hooks)
- Session start injects Superpowers skill discipline + ECC context restoration

## Install

```bash
# As plugin
/plugin marketplace add your-username/senior-fullstack-superpowers
/plugin install senior-fullstack-superpowers

# Manual
git clone <this-repo> ~/senior-fullstack-superpowers
cp -r ~/senior-fullstack-superpowers/agents/*.md ~/.claude/agents/
cp -r ~/senior-fullstack-superpowers/commands/*.md ~/.claude/commands/
cp -r ~/senior-fullstack-superpowers/skills/* ~/.claude/skills/
cp -r ~/senior-fullstack-superpowers/rules/* ~/.claude/rules/
# Merge hooks/hooks.json into ~/.claude/settings.json
```

Note: Rules must be installed manually (Claude Code plugin limitation).

## Quick Reference

| Want to... | Do this |
|-----------|---------|
| Build a feature | Just describe it. Brainstorming activates automatically. |
| Plan implementation | `/write-plan` or `/plan` |
| Execute a plan | `/execute-plan` (subagent-driven, same session) |
| Fix a bug | Describe the bug. Systematic debugging activates. |
| Review code | `/code-review` |
| Check security | Use `security-reviewer` agent |
| Run e2e tests | `/e2e` |
| Verify before merge | `/verify` |
| TDD mode | `/tdd` |

## License

MIT — Skills from Superpowers and ECC are both MIT licensed.
