# AuditFlow — Enterprise Audit Management Platform

A portfolio project demonstrating a modern enterprise audit dashboard. The initial Day 1 milestone includes a responsive React + TypeScript dashboard, Material UI components, Redux Toolkit theme state, light/dark mode, summary cards, and fictional audit activity data.

> **Important:** This is a learning/demo application. All names, events, metrics, IP addresses and organizations shown are fictional sample data. It is not connected to any employer system.

## Tech stack
- React + TypeScript + Vite
- Material UI (MUI) + Emotion
- Redux Toolkit + React Redux
- React Router
- Axios
- Recharts

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Current features
- Responsive dashboard shell and navigation
- Light/dark theme toggle
- Audit activity table with sample records
- Summary metric cards
- Typed audit event model

## Planned milestones
1. Dashboard foundation and theme switching
2. Audit log search, filters and pagination
3. User and role management screens
4. Node.js + Express API
5. PostgreSQL data model and Prisma ORM
6. Authentication and role-based authorization
7. Tests, Docker and deployment

## Project structure

```text
src/
├── app/                 # Redux store and typed hooks
├── components/
│   ├── dashboard/       # Dashboard widgets
│   └── layout/          # Sidebar and top navigation
├── features/audit/      # Audit feature data and logic
├── pages/               # Page-level components
├── theme/               # MUI theme provider
└── types/               # Shared TypeScript types
```

## Next steps
- Add real client-side navigation for each sidebar item
- Implement audit search, filtering and pagination
- Replace sample data with API responses when the backend is ready
