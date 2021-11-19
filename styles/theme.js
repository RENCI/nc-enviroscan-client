import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#22497c',
    },
    secondary: {
      main: '#f9a97f',
    },
    extended: {
      white: '#eee',
      nightshade: '#333',
      enviro: '#22497c',
      water: '#2479b6',
      oxygen: '#55a4db',
      air: '#4dc9f5',
      peach: '#f9a97f',
      peach2: '#f6957c',
      sunburst: '#fdbd68',
      sunburst2: '#faad6c',
      shine: '#feec7b',
      shine2: '#ffd479',
    }
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: 30,
      fontWeight: 600,
    },
    h2: {
      fontSize: 28,
      fontWeight: 500,
      marginBottom: '2rem',
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
  },
})

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={ theme }>
    { children }
  </MuiThemeProvider>
)
