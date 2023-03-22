import Header from "./components/Header";
import { useThemeState } from "./contexts/theme";
import HomePage from "./pages/HomePage";
import { isDark } from "./utils";

function App() {
  const { theme } = useThemeState();
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: isDark(theme) ? "#b0bec5" : "white",
      }}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
