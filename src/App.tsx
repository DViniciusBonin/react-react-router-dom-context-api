import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router as Routes } from "./routes";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ContextProvider } from "./contexts";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <BrowserRouter
      >
        <ContextProvider>

          <GlobalStyle />
          <Routes />

        </ContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
