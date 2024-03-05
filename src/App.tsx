import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Cover } from "./components/Cover";
import { Profile } from "./components/Profile";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Cover />
      <Profile/>
    </ThemeProvider>
  );
}

export default App;
