'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2D3436', // 知的で落ち着いたチャコールグレー
    },
    secondary: {
      main: '#0984E3', // 清潔感のあるブルー
    },
    background: {
      default: '#FAFAFA', // 完全な白ではなく、目に優しいオフホワイト
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3436',
      secondary: '#636E72',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none', // 大文字強制を解除して親しみやすく
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12, // 少し大きめの角丸で親しみやすさとモダンさを両立
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(250, 250, 250, 0.8)', // ガラスモーフィズム風
          backdropFilter: 'blur(8px)',
        },
      },
    },
  },
});

export default theme;
