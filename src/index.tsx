import React, { FC } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "styles/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./localization/localization";
import * as serviceWorker from "./serviceWorker";

const App: FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
