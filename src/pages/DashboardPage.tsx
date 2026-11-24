import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import StatCard from '../components/dashboard/StatCard';
import AuditTable from '../components/dashboard/AuditTable';

export default function DashboardPage() {
  return (
    <Box sx={{ maxWidth: 1440, mx: 'auto' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'stretch', sm: 'center' }} spacing={2} sx={{ mb: 3 }}>
        <Box><Typography variant="h4" sx={{ fontSize: { xs: 23, md: 29 } }}>Good morning, Saiteja 👋</Typography><Typography color="text.secondary" fontSize={13} sx={{ mt: .7 }}>Here's what's happening in your workspace today.</Typography></Box>
        <Stack direction="row" spacing={1}><Button variant="outlined" startIcon={<DownloadRoundedIcon />} size="small">Export</Button><Button variant="contained" startIcon={<AddRoundedIcon />} size="small">Add user</Button></Stack>
      </Stack>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}><StatCard label="Total events" value="12,840" change="↑ 12.8% vs last month" icon={<ManageSearchRoundedIcon />} tone="#6475e8" /></Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}><StatCard label="Active users" value="248" change="↑ 8.2% vs last month" icon={<PeopleAltRoundedIcon />} tone="#1aa778" /></Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}><StatCard label="Successful actions" value="98.6%" change="↑ 2.4% vs last month" icon={<TaskAltRoundedIcon />} tone="#239cbd" /></Grid>
        <Grid size={{ xs: 12, sm: 6, xl: 3 }}><StatCard label="Security alerts" value="07" change="↓ 3 alerts this week" icon={<ShieldRoundedIcon />} tone="#d99527" /></Grid>
      </Grid>
      <AuditTable />
      <Typography color="text.secondary" fontSize={11} sx={{ mt: 2 }}>Demo environment · All activity and metrics shown are fictional sample data.</Typography>
    </Box>
  );
}
