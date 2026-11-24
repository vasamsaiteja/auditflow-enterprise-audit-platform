import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useState } from 'react';

const navItems = [
  { label: 'Overview', icon: <DashboardRoundedIcon /> },
  { label: 'Audit logs', icon: <ManageSearchRoundedIcon /> },
  { label: 'User management', icon: <PeopleAltRoundedIcon /> },
  { label: 'Roles & permissions', icon: <ShieldRoundedIcon /> },
];

export default function Sidebar() {
  const [active, setActive] = useState('Overview');
  return (
    <Box component="aside" sx={{ width: { xs: 68, md: 248 }, flexShrink: 0, minHeight: '100vh', bgcolor: 'background.paper', borderRight: 1, borderColor: 'divider', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: 76, display: 'flex', alignItems: 'center', px: { xs: 2, md: 3 }, gap: 1.3 }}>
        <Box sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: 'primary.main', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 900, fontSize: 18 }}>A</Box>
        <Typography sx={{ display: { xs: 'none', md: 'block' }, fontFamily: 'Manrope', fontWeight: 800, fontSize: 19, letterSpacing: '-.6px' }}>AuditFlow</Typography>
      </Box>
      <Divider />
      <Box sx={{ px: { xs: 1, md: 2 }, pt: 3 }}>
        <Typography variant="overline" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' }, px: 1.5, mb: 1, fontWeight: 800, letterSpacing: 1.1 }}>WORKSPACE</Typography>
        <List disablePadding>
          {navItems.map((item) => (
            <ListItemButton key={item.label} selected={active === item.label} onClick={() => setActive(item.label)} sx={{ borderRadius: 2, mb: .6, minHeight: 46, px: { xs: 1.4, md: 1.7 }, '&.Mui-selected': { bgcolor: 'action.selected', color: 'primary.main' }, '&.Mui-selected .MuiListItemIcon-root': { color: 'primary.main' } }}>
              <ListItemIcon sx={{ minWidth: { xs: 0, md: 38 }, justifyContent: 'center', color: 'text.secondary' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ display: { xs: 'none', md: 'block' } }} primaryTypographyProps={{ fontSize: 13, fontWeight: active === item.label ? 700 : 600 }} />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box sx={{ mt: 'auto', p: { xs: 1, md: 2 } }}>
        <Divider sx={{ mb: 1.5 }} />
        <ListItemButton sx={{ borderRadius: 2, px: { xs: 1.4, md: 1.7 } }}>
          <ListItemIcon sx={{ minWidth: { xs: 0, md: 38 }, justifyContent: 'center' }}><SettingsRoundedIcon /></ListItemIcon>
          <ListItemText primary="Settings" sx={{ display: { xs: 'none', md: 'block' } }} primaryTypographyProps={{ fontSize: 13, fontWeight: 600 }} />
        </ListItemButton>
        <Box sx={{ display: { xs: 'none', md: 'block' }, mt: 2, p: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}>
          <Typography fontSize={11} color="text.secondary">DEMO WORKSPACE</Typography>
          <Typography fontSize={13} fontWeight={700}>Acme Corporation</Typography>
          <Typography fontSize={11} color="text.secondary">Free development environment</Typography>
        </Box>
      </Box>
    </Box>
  );
}
