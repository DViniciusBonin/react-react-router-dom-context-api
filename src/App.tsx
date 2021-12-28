import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {Router as Routes} from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyle/>  
      <BrowserRouter>
        <Routes/>
        </BrowserRouter>
    </ThemeProvider>
   
  );
}

export default App;
