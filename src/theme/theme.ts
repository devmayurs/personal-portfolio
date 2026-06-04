import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const PALETTE = {
  background: '#0A0A1A',
  surface: 'rgba(255,255,255,0.025)',
  border: 'rgba(255,255,255,0.08)',
  primary: '#38BDF8',
  primaryDark: '#0EA5E9',
  secondary: '#6366F1',
  success: '#10B981',
  warning: '#F59E0B',
  textPrimary: '#F1F5F9',
  textSecondary: 'rgba(241,245,249,0.55)',
  textMuted: 'rgba(241,245,249,0.35)',
};

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: PALETTE.background,
      paper: 'rgba(255,255,255,0.03)',
    },
    primary: {
      main: PALETTE.primary,
      dark: PALETTE.primaryDark,
    },
    secondary: {
      main: PALETTE.secondary,
    },
    success: {
      main: PALETTE.success,
    },
    warning: {
      main: PALETTE.warning,
    },
    text: {
      primary: PALETTE.textPrimary,
      secondary: PALETTE.textSecondary,
    },
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "'Space Grotesk', sans-serif",
      lineHeight: 1.85,
    },
    body2: {
      fontFamily: "'Space Grotesk', sans-serif",
    },
    caption: {
      fontFamily: "'JetBrains Mono', monospace",
      letterSpacing: '0.12em',
    },
    overline: {
      fontFamily: "'JetBrains Mono', monospace",
      letterSpacing: '0.18em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #0A0A1A; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A1A; }
        ::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.3); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(56,189,248,0.5); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 8px #10B981; }
          50% { box-shadow: 0 0 16px #10B981, 0 0 24px rgba(16,185,129,0.4); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .fu  { animation: fadeUp 0.7s 0.0s ease both; }
        .fu2 { animation: fadeUp 0.7s 0.15s ease both; }
        .fu3 { animation: fadeUp 0.7s 0.3s ease both; }
        .fu4 { animation: fadeUp 0.7s 0.45s ease both; }
        .fu5 { animation: fadeUp 0.7s 0.6s ease both; }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          borderRadius: 8,
          letterSpacing: '0.02em',
        },
        contained: {
          background: 'linear-gradient(135deg, #38BDF8, #0EA5E9)',
          color: '#0A0A1A',
          '&:hover': {
            background: 'linear-gradient(135deg, #7DD3FC, #38BDF8)',
          },
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.15)',
          color: '#F1F5F9',
          '&:hover': {
            borderColor: 'rgba(56,189,248,0.5)',
            background: 'rgba(56,189,248,0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10,10,26,0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(56,189,248,0.1)',
          boxShadow: 'none',
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
export { PALETTE };
