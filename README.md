# AuditFlow – Enterprise Audit Management Platform

AuditFlow is a modern audit management dashboard designed to help organizations monitor user activities, review system events, and maintain visibility into application operations.

This project is being developed incrementally as a portfolio project using modern frontend technologies, with backend integration planned for future milestones.

## 🚀 Tech Stack

### Frontend

- React.js
- TypeScript
- Vite
- Material UI (MUI)
- Redux Toolkit
- JavaScript
- CSS

### Planned Backend

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication

## ✨ Implemented Features

### Day 1 – Dashboard

- Responsive dashboard layout
- Light and dark theme support
- Reusable statistic cards
- Sample audit activity overview
- Sidebar and top navigation

### Day 2 – Audit Logs

- Display audit records in a table
- Search by user, action, description, and IP address
- Filter records by status
- Filter by activity type
- Sort records by date and time
- Pagination with 5, 10, and 15 rows per page
- Empty state when no matching records are found
- Responsive table layout

## 📂 Project Structure

```text
src/
├── app/
│   ├── hooks.ts
│   └── store.ts
├── components/
│   └── layout/
│       ├── Sidebar.tsx
│       └── Topbar.tsx
├── features/
│   └── audit/
├── pages/
│   ├── DashboardPage.tsx
│   └── AuditLogsPage.tsx
├── types/
└── App.tsx
```

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/vasamsaiteja/AuditFlow.git
cd AuditFlow
npm install
```

### Run the application

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🛠️ Development Progress

- [x] Day 1 – Dashboard and theme implementation
- [x] Day 2 – Audit logs, search, filters, sorting and pagination
- [ ] Day 3 – Audit log details view
- [ ] Day 4 – User management
- [ ] Day 5 – Roles and permissions
- [ ] Backend API integration
- [ ] Database integration
- [ ] Authentication and authorization
- [ ] Testing and deployment

## 📌 Project Status

Currently under active development.

This is an independent portfolio project using fictional demonstration data.

## 👨‍💻 Author

**Saiteja Vasamsetti**

- GitHub: https://github.com/vasamsaiteja
- LinkedIn: https://www.linkedin.com/in/vasamsaiteja/
