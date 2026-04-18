# Superforms Client-Side Validation Example

A SvelteKit example demonstrating client-side validation with [Superforms](https://superforms.rocks) and Zod.

## Getting Started

```bash
npm install
npm run dev
```

## Structure

```
src/
├── lib/
│   └── schema.ts          # Zod schema shared by client + server
└── routes/
    ├── +page.server.ts    # Load function + form action
    └── +page.svelte       # Form UI with reactive validation
```

## How it works

- The same Zod schema is used on both client and server
- `validators: zodClient(userSchema)` enables in-browser validation with no server round-trip
- `validationMethod: 'oninput'` validates as the user types
- The server always re-validates on submit as a security boundary
