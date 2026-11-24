import { Box, Paper, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface StatCardProps { label: string; value: string; change: string; icon: ReactNode; tone: string; }

export default function StatCard({ label, value, change, icon, tone }: StatCardProps) {
  return (
    <Paper variant="outlined" sx={{ p: 2.4, borderColor: 'divider', height: '100%' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Typography color="text.secondary" fontSize={12} fontWeight={600}>{label}</Typography>
          <Typography variant="h4" sx={{ mt: 1.1, fontSize: { xs: 25, md: 30 } }}>{value}</Typography>
          <Typography color="success.main" fontSize={11} fontWeight={700} sx={{ mt: 1 }}>{change}</Typography>
        </Box>
        <Box sx={{ width: 42, height: 42, display: 'grid', placeItems: 'center', borderRadius: 2.5, color: tone, bgcolor: `${tone}18` }}>{icon}</Box>
      </Stack>
    </Paper>
  );
}
