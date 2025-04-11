# Tesella - Technical Documentation

## Architecture Overview

Tesella follows a component-based architecture with React, utilizing hooks and context for state management. The application has been structured to maintain clear separation of concerns and optimize reusability.

## Directory Structure

```
src/
├── assets/           # Static assets (images, icons)
├── components/       # React components organized by feature
│   ├── button/       # Button component
│   ├── code-block/   # Code block with syntax highlighting
│   ├── codes/        # Code generation components
│   ├── controls/     # Grid control components
│   ├── grid/         # Grid editor components
│   ├── hero/         # Hero section components
│   └── tabs/         # Tab components
├── hooks/            # Custom React hooks
├── icons/            # SVG icon components
├── providers/        # React context providers
└── docs/             # Documentation
```

## Data Flow

1. **Grid Configuration State**: Managed by `grid-provider.tsx` using React Context API
2. **User Interactions**: Captured by components and processed by custom hooks
3. **Code Generation**: Based on current grid state, handled by `use-codes.ts`
4. **UI Updates**: Components re-render based on context changes

## Key Components

| Component          | Purpose                                    | File                                     |
| ------------------ | ------------------------------------------ | ---------------------------------------- |
| GridConfigProvider | Central state management for grid settings | src/providers/grid-provider.tsx          |
| Grid               | Visual grid editor                         | src/components/grid/grid.tsx             |
| Controls           | UI for adjusting grid parameters           | src/components/controls/controls.tsx     |
| Codes              | Code generation and display                | src/components/codes/codes.tsx           |
| CodeBlock          | Syntax-highlighted code display            | src/components/code-block/code-block.tsx |

## Custom Hooks

| Hook           | Purpose                              | File                              |
| -------------- | ------------------------------------ | --------------------------------- |
| useGridConfig  | Access to grid configuration context | src/providers/grid-provider.tsx   |
| useGrid        | Grid-specific logic and handlers     | src/components/grid/use-grid.ts   |
| useCodes       | Code generation logic                | src/components/codes/use-codes.ts |
| useTabs        | Tab component state management       | src/components/tabs/use-tabs.tsx  |
| useUpdateWidth | Responsive width calculation         | src/hooks/use-update-width.ts     |

## Maintenance Guide

### Adding New Code Generation Format

1. Add a new generator function in `src/components/codes/use-codes.ts`
2. Return the generated code in the hook's state object
3. Add a new tab in `src/components/codes/codes.tsx` to display the new format

### Modifying Grid Behavior

1. Update the relevant functions in `src/components/grid/use-grid.ts`
2. For grid appearance changes, modify `src/components/grid/grid.css`
3. For control behavior, modify `src/components/controls/controls.tsx`

### Styling Modifications

The app uses CSS modules with a CSS variables system defined in `src/index.css`. To change the theme:

1. Modify color variables in `:root` or `.dark` selectors in `src/index.css`
2. For code highlighting theme, update `src/components/code-block/tesella-theme.ts`

## Technology Stack

- React 18+ with TypeScript
- Vite as build tool
- react-grid-layout for grid functionality
- prism-react-renderer for code syntax highlighting
- sonner for toast notifications
