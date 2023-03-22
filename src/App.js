import Header from "./components/Header";
import { useThemeState } from "./contexts/theme";
import HomePage from "./pages/HomePage";

function App() {
  const { theme } = useThemeState();
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: theme === "light" ? "white" : "#b0bec5",
      }}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
