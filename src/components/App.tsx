import { ReactElement, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey, orange, pink, yellow } from "@material-ui/core/colors";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./styles.scss";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import { Info2024 } from "../stores/Info2024";

import { Info2023 } from "../stores/Info2023";
import { Info2022 } from "../stores/Info2022";

//import {store } from '../stores/Database';

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[700],
    },
    secondary: {
      main: grey[700],
    },
  },
  typography: {
    button: {
      fontFamily: "Google Sans Display",
      textTransform: "none",
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: grey[50],
        "&:hover": {
          backgroundColor: grey[100],
        },
        "&.Mui-focused": {
          backgroundColor: grey[100],
        },
      },
    },
    MuiButton: {
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: grey[600],
          color: grey[200],
        },
      },
      containedPrimary: {
        backgroundColor: pink[600],
        color: "white",
        "&:hover": {
          backgroundColor: pink[500],
          color: "white",
        },
      },
    },
  },
});

const App = (): ReactElement => {
  const metas = [Info2022, Info2023, Info2024];
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Header
            logo={Info2024.overview.logoImg}
            years={metas.map((m) => parseInt(m.overview.year))}
          />

          <Switch>
            <Route
              path="/:year/cfp"
              exact
              render={() => <Main metas={metas} types={["cfp"]} />}
            />
            <Route
              path="/:year/schedule"
              exact
              render={() => <Main metas={metas} types={["schedule"]} />}
            />
            <Route
              path="/:year/about"
              exact
              render={() => (
                <Main
                  metas={metas}
                  types={["about", "organizers", "committee"]}
                />
              )}
            />
            <Route
              path="/:year/"
              //exact
              render={() => (
                <Main
                  metas={metas}
                  types={["about", "organizers", "committee"]}
                />
              )}
            />
            <Route
              path="/"
              //exact
              render={() => (
                <Main
                  metas={metas}
                  types={["about", "organizers", "committee"]}
                />
              )}
            />
          </Switch>
          <Footer contact={Info2024.overview.contact} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
