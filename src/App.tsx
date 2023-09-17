import { ThemeProvider, createTheme } from '@mui/material/styles';
import SelectionGrid from './components/SelectionGrid';
import Calculator from './components/calculator/Calculator';
import { green, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[400],
    },
    secondary: {
      main: grey[50],
    },
    success: {
      main: green[100],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SelectionGrid />
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
