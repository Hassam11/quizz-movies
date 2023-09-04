// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import theme from "./theme/theme.js";

const extendedTheme = extendTheme(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={extendedTheme}>
  <ColorModeScript initialColorMode="dark" />
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </ChakraProvider>
);
