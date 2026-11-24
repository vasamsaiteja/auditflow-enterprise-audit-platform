import { Box } from '@mui/material';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Sidebar />
      <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
        <Topbar />
        <Box sx={{ p: { xs: 2, md: 4 } }}><DashboardPage /></Box>
      </Box>
    </Box>
  );
}
