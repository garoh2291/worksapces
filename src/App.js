import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./componenets/styles/Global";

import { StyledMain, StyledApp } from "./componenets/styles/App.styles";
import { RouteComponents } from "./routes";
import { WorkspaceContextProvider } from "./context/provider";

import bgImage from "./assets/grid.svg";

const theme = {
  colors: {
    header: "rgb(var(--tmdbDarkBlue))",
    body: "#000",
    body1: "rgba(217, 217, 217, 0.27)",
    footer: "#003333",
  },
  mobile: "800px",
  mobile2: "600px",
};

function App() {
  return (
    <>
      <StyledMain bg={bgImage}>
        <div></div>
      </StyledMain>
      <WorkspaceContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <StyledApp>
              <ToastContainer autoClose={1500} />
              <RouteComponents />
            </StyledApp>
          </ThemeProvider>
        </BrowserRouter>
      </WorkspaceContextProvider>
    </>
  );
}

export default App;
