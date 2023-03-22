import { useState } from "react";

import { Tabs, Tab, Box, Button } from "@material-ui/core";
import PropTypes from "prop-types";

import TabPanel from "./TabPanel";
import { useThemeState } from "../contexts/theme";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TraitsTabs({ children }) {
  const [value, setValue] = useState(0);
  const { theme } = useThemeState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Traits" {...a11yProps(0)} />
          <Tab label="Traits Use Case" {...a11yProps(1)} disabled />
          <Tab label="Traits Responses" {...a11yProps(2)} disabled />
          <Button
            color="primary"
            variant="contained"
            style={{
              marginLeft: "auto",
              backgroundColor: theme === "light" ? "#283593" : "#263238",
            }}
          >
            Create Trait
          </Button>
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Traits Use Case
      </TabPanel>
      <TabPanel value={value} index={2}>
        Traits Responses
      </TabPanel>
    </Box>
  );
}

TraitsTabs.propTypes = {
  children: PropTypes.node.isRequired,
};
