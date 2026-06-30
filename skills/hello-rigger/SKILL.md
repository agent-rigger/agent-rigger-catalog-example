---
name: hello-rigger
description: A demo skill distributed via the agent-rigger example catalog.
license: MIT
---

# Hello Rigger (v0.4.0)

This skill was installed from the remote example catalog (`agent-rigger-catalog-example`).
It exists to prove the end-to-end remote flow: clone → store → symlink → manifest.

## v0.4.0 changes

The example catalog now ships **one artifact per nature** — skill, agent,
guardrail, hook, context — plus a `pack:full` that installs them together.
This line only exists in v0.4.0 — it proves `update` refreshes the store content.
