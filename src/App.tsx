import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./contexts/PostsContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
