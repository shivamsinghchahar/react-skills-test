import { useState } from "react";

import { Tabs, Tab, Box, Button } from "@material-ui/core";
import PropTypes, { number } from "prop-types";

import { useThemeState } from "../../contexts/theme";

import { a11yProps, isDark } from "../../utils";
import TabPanel from "../TabPanel";

export default function TraitsTabs({ children, selectedItems }) {
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
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: "auto",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              style={{
                marginLeft: "auto",
                backgroundColor: isDark(theme) ? "#263238" : "#283593",
              }}
            >
              {selectedItems.length ? "REUSE" : "Create Trait"}
            </Button>
          </Box>
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
  selectedItems: PropTypes.arrayOf(number).isRequired,
};
