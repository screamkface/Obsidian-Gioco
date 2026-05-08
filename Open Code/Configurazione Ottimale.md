Sì. Io lo configurerei **minimal ma potente**, evitando di riempirlo di MCP inutili: OpenCode stesso avvisa che ogni MCP aggiunge roba al context e che tool grossi, tipo GitHub MCP, possono consumare molti token. ([OpenCode](https://opencode.ai/docs/mcp-servers/ "MCP servers | OpenCode"))

## Setup consigliato

Per prima cosa fai login ai provider e controlla i modelli disponibili:

```bash
opencode auth login
opencode models --refresh
opencode mcp add
opencode mcp list
```

OpenCode supporta `auth login`, `models --refresh`, `mcp add`, `mcp list` e anche `mcp auth` per server OAuth. ([OpenCode](https://opencode.ai/docs/cli/ "CLI | OpenCode"))

Nel progetto crea un `opencode.jsonc` nella root. La config di progetto ha precedenza su quella globale, quindi è perfetta per regole specifiche del repo. ([OpenCode](https://opencode.ai/docs/config/ "Config | OpenCode"))

```jsonc
{
  "$schema": "https://opencode.ai/config.json",

  // Scegli tu il modello principale.
  // Esempio: "anthropic/claude-sonnet-4-5", "openai/...", "google/..."
  "model": "{env:OPENCODE_MODEL}",

  // Modello economico per task leggeri, se vuoi.
  "small_model": "{env:OPENCODE_SMALL_MODEL}",

  // Ti consiglio manual o disabled, non auto.
  "share": "manual",

  // Molto utile per programmare: simboli, diagnostica, jump-to-definition.
  "lsp": true,

  // Utile se il progetto ha prettier/formatter configurati.
  "formatter": true,

  "watcher": {
    "ignore": [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".dart_tool/**",
      ".gradle/**",
      ".git/**",
      "coverage/**"
    ]
  },

  "compaction": {
    "auto": true,
    "prune": true,
    "reserved": 10000
  },

  "permission": {
    // All'inizio meglio ask. Quando ti fidi, puoi mettere edit: allow.
    "edit": "ask",

    // Bash sempre ask: evita installazioni strane, rm aggressivi, push non voluti.
    "bash": {
      "*": "ask",
      "rm -rf *": "deny",
      "git push *": "ask",
      "npm test": "allow",
      "npm run test": "allow",
      "npm run lint": "allow",
      "npm run build": "allow",
      "flutter test": "allow",
      "flutter analyze": "allow"
    },

    // I tool MCP meglio sempre ask.
    "github_*": "ask",
    "playwright_*": "ask",
    "context7_*": "allow",
    "serena_*": "ask",
    "postgres_*": "ask"
  }
}
```

Perché così: OpenCode di default permette tutte le operazioni senza approvazione esplicita, ma puoi forzare `edit` e `bash` su `ask`; supporta anche `lsp`, `formatter`, `watcher.ignore`, compaction e variabili ambiente tipo `{env:VARIABLE_NAME}`. ([OpenCode](https://opencode.ai/docs/config/ "Config | OpenCode")) ([OpenCode](https://opencode.ai/docs/config/ "Config | OpenCode")) ([OpenCode](https://opencode.ai/docs/config/ "Config | OpenCode")) ([OpenCode](https://opencode.ai/docs/config/ "Config | OpenCode"))

## File `AGENTS.md`: fondamentale

Nella root fai:

```bash
opencode
/init
```

OpenCode usa `AGENTS.md` come regole del progetto; `/init` scansiona repo, build/lint/test command, convenzioni e struttura, poi crea o aggiorna il file. La doc consiglia anche di committarlo in Git. ([OpenCode](https://opencode.ai/docs/rules/ "Rules | OpenCode"))

Io metterei dentro qualcosa del genere:

```md
# Project Rules

Before coding:
- Read this file.
- Read REMAINING_WORK.md if present.
- Understand the current architecture before editing.

Workflow:
- Work in small phases.
- Do not implement unrelated features.
- After each completed task, update REMAINING_WORK.md with:
  - what was completed
  - what is still missing
  - known bugs
  - next recommended step

Quality:
- Run lint/analyze/tests before saying the task is done.
- Prefer simple architecture over overengineering.
- Do not introduce new frameworks, databases, or services unless strictly necessary.

Safety:
- Ask before destructive commands.
- Never commit secrets.
- Never rewrite large parts of the app without explaining why.
```

Per il tuo caso, aggiungerei anche:

```md
Project-specific:
- Start with Phase 1 only.
- Do not implement Friends and Movie Night until Phase 1 is complete and stable.
- Avoid Neo4j unless there is a strict, justified need for graph queries.
- Keep app state, auth, movie preferences, library, swipe, and profile cleanly separated.
```

## MCP migliori per programmare

|MCP|Quando usarlo|Lo consiglio?|
|---|---|---|
|**Context7**|Quando usi librerie/framework e vuoi docs aggiornate dentro il prompt. Context7 può essere installato con `npx ctx7 setup --opencode` oppure configurato via MCP remoto. ([GitHub](https://github.com/upstash/context7 "GitHub - upstash/context7: Context7 Platform -- Up-to-date code documentation for LLMs and AI code editors · GitHub"))|**Sì, quasi sempre**|
|**Playwright MCP**|Per testare UI web, fare E2E, navigare pagine, compilare form, vedere console/network. Usa accessibility snapshots e non richiede modelli vision. ([Playwright](https://playwright.dev/docs/getting-started-mcp "Playwright MCP \| Playwright"))|**Sì per web app**|
|**GitHub MCP**|Per leggere repo, issue, PR, workflow e automatizzare operazioni GitHub. È mantenuto da GitHub; la modalità remota è consigliata nella doc GitHub per la maggior parte degli utenti. ([GitHub](https://github.com/github/github-mcp-server "GitHub - github/github-mcp-server: GitHub's official MCP Server · GitHub")) ([GitHub Docs](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server "Setting up the GitHub MCP Server - GitHub Docs"))|**Sì, ma non sempre attivo**|
|**Serena**|Per codebase grandi: retrieval semantico, refactor, debugging e navigazione a livello di simboli. Si integra via MCP anche con OpenCode. ([OraiOS](https://oraios.github.io/serena/01-about/000_intro.html "About Serena — Serena Documentation"))|**Sì su progetti medio/grandi**|
|**Postgres / SQLite MCP**|Solo se l’app ha DB reale e vuoi interrogare schema/dati. Le reference MCP mostrano esempi per Postgres. ([GitHub](https://github.com/modelcontextprotocol/servers "GitHub - modelcontextprotocol/servers: Model Context Protocol Servers · GitHub"))|**Solo se serve**|
|**Docker MCP Toolkit**|Se vuoi gestire MCP containerizzati con profili separati e più isolamento. Docker dichiara immagini firmate, limiti CPU/RAM e nessun accesso host filesystem di default. ([Docker Documentation](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/ "Docker MCP Toolkit \| Docker Docs"))|**Ottimo se usi Docker**|
|**Filesystem MCP**|OpenCode ha già tool per leggere/modificare file, quindi spesso è ridondante. Ha senso solo per dare accesso controllato a directory esterne al repo. ([OpenCode](https://opencode.ai/docs/tools/ "Tools \| OpenCode")) ([GitHub](https://github.com/modelcontextprotocol/servers "GitHub - modelcontextprotocol/servers: Model Context Protocol Servers · GitHub"))|**Di solito no**|

## Esempio MCP config utile

```jsonc
{
  "$schema": "https://opencode.ai/config.json",

  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp",
      "headers": {
        "CONTEXT7_API_KEY": "{env:CONTEXT7_API_KEY}"
      },
      "enabled": true
    },

    "playwright": {
      "type": "local",
      "command": ["npx", "-y", "@playwright/mcp@latest"],
      "enabled": true
    },

    "github": {
      "type": "remote",
      "url": "https://api.githubcopilot.com/mcp/",
      "enabled": false
    }
  }
}
```

OpenCode supporta MCP locali con `type: "local"` e `command`, e MCP remoti con `type: "remote"`, `url`, `headers`, `enabled`. ([OpenCode](https://opencode.ai/docs/mcp-servers/ "MCP servers | OpenCode")) Context7 documenta il server remoto `https://mcp.context7.com/mcp` e l’header `CONTEXT7_API_KEY`. ([GitHub](https://github.com/upstash/context7 "GitHub - upstash/context7: Context7 Platform -- Up-to-date code documentation for LLMs and AI code editors · GitHub")) Playwright documenta `npx @playwright/mcp@latest`. ([Playwright](https://playwright.dev/docs/getting-started-mcp "Playwright MCP | Playwright"))

Io terrei `github.enabled: false` e lo accenderei solo quando devi lavorare su issue/PR. GitHub MCP può essere molto utile, ma OpenCode avvisa che MCP grossi possono saturare il context. ([OpenCode](https://opencode.ai/docs/mcp-servers/ "MCP servers | OpenCode"))

## Agenti OpenCode che ti conviene creare

OpenCode ha agenti primari e subagent; `build` è quello operativo con tool completi, mentre `plan` è pensato per analizzare senza modificare codice. ([OpenCode](https://opencode.ai/docs/agents/ "Agents | OpenCode")) Puoi configurarli in JSON o come file markdown dentro `.opencode/agents/`. ([OpenCode](https://opencode.ai/docs/agents/ "Agents | OpenCode"))

Crea questi:

```bash
mkdir -p .opencode/agents
```

`.opencode/agents/review.md`

```md
---
description: Reviews code for bugs, security, architecture and maintainability
mode: subagent
temperature: 0.1
permission:
  edit: deny
  bash: deny
---

You are a strict code reviewer.
Check:
- bugs and edge cases
- security problems
- bad architecture
- duplicated logic
- missing tests
- performance issues

Do not edit files. Return actionable feedback.
```

`.opencode/agents/architect.md`

```md
---
description: Plans features before implementation
mode: subagent
temperature: 0.2
permission:
  edit: deny
  bash: deny
---

You are a software architect.
Before implementation:
- inspect the current structure
- propose the smallest safe change
- identify files to modify
- identify tests/checks to run
- avoid overengineering
```

## Slash commands comodissimi

OpenCode supporta custom command in config o markdown file in `.opencode/commands/`, richiamabili tipo `/test`. ([OpenCode](https://opencode.ai/docs/commands/?utm_source=chatgpt.com "Commands"))

Crea:

```bash
mkdir -p .opencode/commands
```

`.opencode/commands/continue.md`

```md
---
description: Continue from remaining work
agent: build
---

Read AGENTS.md and REMAINING_WORK.md.
Continue from the next unfinished task.
Do not start unrelated features.
After finishing, update REMAINING_WORK.md.
Run the relevant checks.
```

`.opencode/commands/check.md`

```md
---
description: Run project checks
agent: build
---

Run the appropriate checks for this project:
- install/build only if needed
- lint/analyze
- tests
- typecheck if available

Report failures clearly and suggest the smallest fix.
```

`.opencode/commands/review.md`

```md
---
description: Review recent changes
agent: review
---

Review the current git diff.
Focus on bugs, regressions, security, maintainability and missing tests.
Do not edit files.
```

## Regola d’oro

Non avviare OpenCode in repo sconosciute senza controllare prima `opencode.json` e `.opencode/`: un’analisi di sicurezza ha mostrato che una config di progetto può definire MCP locali che lanciano processi tramite `command`, quindi va trattata come codice eseguibile, non come semplice JSON. ([DEV Community](https://dev.to/pachilo/the-repository-that-runs-code-a-story-about-mcp-configuration-in-opencode-ljp "The repository that runs code: A story about MCP Configuration in OpenCode - DEV Community"))

La mia combo consigliata per te:

```txt
OpenCode built-in tools + LSP + formatter
AGENTS.md + REMAINING_WORK.md
Context7 sempre attivo
Playwright se fai frontend/web
Serena se il progetto cresce
GitHub MCP solo quando lavori su issue/PR
DB MCP solo se hai davvero un database da interrogare
```

Così OpenCode diventa molto più bravo a programmare, ma senza trasformarsi in un casino pieno di tool che consumano context e fanno cose imprevedibili.