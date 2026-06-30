#!/usr/bin/env bun
// SessionStart hook distributed via the agent-rigger example catalog.
//
// Purpose: prove that a hook installs from a remote catalog and runs. It is
// deliberately side-effect-free — no filesystem writes, no network, no shell —
// so it passes the install-time security scan and is safe to run anywhere.
//
// On session start it emits one line of advisory context. Claude Code reads the
// `additionalContext` field and prepends it to the session.

const payload = {
  hookSpecificOutput: {
    hookEventName: 'SessionStart',
    additionalContext: 'Rig loaded — hello-rigger demo catalog is active.',
  },
};

process.stdout.write(JSON.stringify(payload));
