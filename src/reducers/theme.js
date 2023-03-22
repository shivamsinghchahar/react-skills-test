const themeReducer = (_, { type }) => {
  switch (type) {
    case "LIGHT": {
      localStorage.setItem("theme", JSON.stringify("light"));
      return { theme: "light" };
    }
    case "DARK": {
      localStorage.setItem("theme", JSON.stringify("dark"));
      return { theme: "dark" };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

export default themeReducer;
