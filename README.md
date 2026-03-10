# Portfolio - React + TypeScript + Tailwind CSS

A modern web development stack combining React, TypeScript, and Tailwind CSS, built with Vite for optimal development experience.

## Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- ⚛️ **React 18** - Modern UI library with hooks
- 🎨 **TypeScript** - Type-safe JavaScript
- 🎯 **Tailwind CSS** - Utility-first CSS framework
- 🔧 **Hot Module Replacement (HMR)** - Instant updates during development

## Getting Started

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build for production:

```bash
npm run build
```

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/    # React components
│   ├── App.tsx        # Main App component
│   ├── App.css        # App styles
│   ├── index.css      # Tailwind imports and global styles
│   └── main.tsx       # Entry point
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── postcss.config.js  # PostCSS configuration
```

## Development Guidelines

- Keep configuration files in project root
- Maintain component organization in `src/components`
- Use Tailwind CSS utility classes for styling
- Follow React functional component patterns
- Use TypeScript for all new files

## Build & Development

- **Linting**: Follow TypeScript strict mode
- **Styling**: Tailwind CSS utility classes
- **Framework**: React with functional components
- **Build Tool**: Vite with TypeScript support

## Learn More

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
