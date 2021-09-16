import { createTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

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
    fontSize: 12,
    fontFamily: 'Montserrat',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
})

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={ theme }>
    { children }
  </MuiThemeProvider>
)
