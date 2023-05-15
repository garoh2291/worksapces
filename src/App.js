import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./componenets/styles/Global";
import { StyledMain, StyledApp } from "./componenets/styles/App.styles";
import { WorkspaceContextProvider } from "./context/provider";
import { RouteComponents } from "./routes";
import bgImage from "./assets/grid.svg";

const theme = {
  tablet: "768px",
  mobile: "420px",
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
