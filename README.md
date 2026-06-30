# agent-rigger-catalog-example

A small, **public** catalog for [`agent-rigger`](https://github.com/agent-rigger/agent-rigger).
It exists to demonstrate the engine end to end — clone → security scan → store →
symlink → manifest — and to show **one artifact of every nature** the engine supports.

> The engine is content-free: it installs whatever a catalog declares. This repo
> is a teaching catalog; nothing here is destructive.

## What's inside

| Id | Nature | What it shows |
|----|--------|---------------|
| `skill:hello-rigger`  | skill     | a SKILL.md installed via store + symlink |
| `agent:demo`          | agent     | a sub-agent definition (`agents/demo.md`) |
| `guardrail:demo`      | guardrail | deny/allow rules merged into `settings.json` |
| `hook:demo`           | hook      | a `SessionStart` hook (side-effect-free) |
| `context:demo`        | context   | advisory `AGENTS.md` context |

### Packs

| Pack | Members |
|------|---------|
| `pack:demo` (recommended) | `skill:hello-rigger`, `agent:demo` |
| `pack:full`               | all five artifacts above |

## Use it

```bash
# plug the catalog in (qualified ids become example/<id>)
agent-rigger catalog add example https://github.com/agent-rigger/agent-rigger-catalog-example.git

agent-rigger ls                          # list everything, merged + qualified
agent-rigger install example/pack:full   # install the full set (scanned first)
agent-rigger check                       # verify: zero drift
agent-rigger update                       # refresh installed artifacts to the latest tag
```

## Versioning

The catalog is **tagged** (semver). `agent-rigger` always resolves the **highest
tag**; `update` bumps installed artifacts when a newer tag ships. The current tag
adds the full per-nature set (see `skill:hello-rigger` → "v0.4.0 changes").
