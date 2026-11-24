import { Avatar, Chip, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { auditEvents } from '../../features/audit/auditData';

const statusColor = { Success: 'success', Failed: 'error', Pending: 'warning' } as const;

export default function AuditTable() {
  return (
    <Paper variant="outlined" sx={{ borderColor: 'divider', overflow: 'hidden' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2.5 }}>
        <div><Typography fontWeight={800} fontFamily="Manrope">Recent activity</Typography><Typography fontSize={12} color="text.secondary">Latest events across your workspace</Typography></div>
        <Chip label="View all" clickable color="primary" variant="outlined" size="small" />
      </Stack>
      <TableContainer>
        <Table size="small" sx={{ minWidth: 720 }}>
          <TableHead><TableRow sx={{ bgcolor: 'action.hover' }}>
            {['USER', 'ACTIVITY', 'RESOURCE', 'IP ADDRESS', 'TIME', 'STATUS'].map((heading) => <TableCell key={heading} sx={{ fontSize: 10, fontWeight: 800, letterSpacing: .7, color: 'text.secondary', py: 1.5 }}>{heading}</TableCell>)}
          </TableRow></TableHead>
          <TableBody>{auditEvents.map((event) => (
            <TableRow key={event.id} hover>
              <TableCell><Stack direction="row" alignItems="center" spacing={1.2}><Avatar sx={{ width: 30, height: 30, fontSize: 10, bgcolor: 'primary.main' }}>{event.initials}</Avatar><div><Typography fontSize={12} fontWeight={700}>{event.user}</Typography><Typography fontSize={10} color="text.secondary">{event.id}</Typography></div></Stack></TableCell>
              <TableCell><Typography fontSize={12} fontWeight={600}>{event.action}</Typography></TableCell>
              <TableCell><Typography fontSize={12} color="text.secondary">{event.resource}</Typography></TableCell>
              <TableCell><Typography fontSize={11} color="text.secondary" fontFamily="monospace">{event.ipAddress}</Typography></TableCell>
              <TableCell><Typography fontSize={11} color="text.secondary">{event.timestamp}</Typography></TableCell>
              <TableCell><Chip label={event.status} size="small" color={statusColor[event.status]} sx={{ height: 23, fontSize: 10, fontWeight: 700 }} /></TableCell>
            </TableRow>
          ))}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
