import { useState } from "react";
import { Box } from "@mui/material";

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

import DashboardPage from "./pages/DashboardPage";
import AuditLogsPage from "./pages/AuditLogsPage";

export type PageName = "Overview" | "Audit logs";

export default function App() {
  const [activePage, setActivePage] = useState<PageName>("Overview");

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
        <Topbar title={activePage} />

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {activePage === "Overview" ? <DashboardPage /> : <AuditLogsPage />}
        </Box>
      </Box>
    </Box>
  );
}
