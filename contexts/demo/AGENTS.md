# Demo Agent Context

Advisory context distributed via the agent-rigger example catalog
(`context:demo`). It demonstrates the **context** nature: a Markdown file that
`agent-rigger` installs and wires into the harness so the agent reads it at the
start of every session.

## What context is (and isn't)

- **Context** (this file) is *advisory*. The agent reads it and reasons about it,
  but later instructions can override it. Never put hard prohibitions here.
- **Guardrails** (the deny list in `settings.json`) are the *enforcement* layer.
  They block actions and cannot be talked around. See `guardrail:demo`.

## Demo conventions

- This catalog is a teaching aid — its artifacts do nothing destructive.
- Qualified ids: everything here is reached as `example/<id>`
  (e.g. `example/pack:full`, `example/context:demo`).
- Versioned: the catalog is tagged; `rigger update` refreshes installed content
  to the latest tag.
