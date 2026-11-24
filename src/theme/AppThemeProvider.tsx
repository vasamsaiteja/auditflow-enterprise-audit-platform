import { useMemo, type PropsWithChildren } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useAppSelector } from '../app/hooks';

export default function AppThemeProvider({ children }: PropsWithChildren) {
  const mode = useAppSelector((state) => state.theme.mode);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: mode === 'light' ? '#4759d6' : '#9aa7ff' },
      background: mode === 'light'
        ? { default: '#f6f7fb', paper: '#ffffff' }
        : { default: '#101522', paper: '#171f30' },
      success: { main: '#16a36a' },
      warning: { main: '#d99527' },
      error: { main: '#dc5b62' },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: '"DM Sans", Arial, sans-serif',
      h4: { fontFamily: 'Manrope, sans-serif', fontWeight: 800, letterSpacing: '-0.8px' },
      h6: { fontFamily: 'Manrope, sans-serif', fontWeight: 700 },
      button: { textTransform: 'none', fontWeight: 700 },
    },
    components: {
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiButton: { defaultProps: { disableElevation: true } },
    },
  }), [mode]);

  return <ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>;
}
