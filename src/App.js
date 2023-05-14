import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./componenets/styles/Global";
import { StyledMain, StyledApp } from "./componenets/styles/App.styles";
import bgImage from "./assets/grid.svg";
import { RouteComponents } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { WorkspaceContextProvider } from "./context/provider";

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
