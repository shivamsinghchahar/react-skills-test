import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle } from "@material-ui/icons";

import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "../contexts/theme";
import { isDark } from "../utils";

export default function Header() {
  const [{ theme }, dispatch] = useTheme();

  const handleClick = () => {
    dispatch({ type: isDark(theme) ? "LIGHT" : "DARK" });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: isDark(theme) ? "#263238" : "#283593" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Consumer <span>360&#176;</span> CRS
          </Typography>

          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <ThemeSwitch
                  value={theme}
                  onClick={handleClick}
                  defaultChecked={isDark(theme)}
                />
              </div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Typography variant="body1" component="p">
                Shivam Chahar
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
