import React from "react";

import PropTypes from "prop-types";

import themeReducer from "../reducers/theme";

const ThemeStateContext = React.createContext();
const ThemeDispatchContext = React.createContext();
const theme = JSON.parse(localStorage.getItem("theme")) || "light";
const initialState = { theme };

function ThemeProvider({ children }) {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

const useThemeState = () => {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("useThemeState must be used within a ThemeProvider");
  }
  return context;
};

const useThemeDispatch = () => {
  const context = React.useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error("useThemeDispatch must be used within a ThemeProvider");
  }
  return context;
};

const useTheme = () => {
  return [useThemeState(), useThemeDispatch()];
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ThemeProvider, useThemeState, useThemeDispatch, useTheme };
