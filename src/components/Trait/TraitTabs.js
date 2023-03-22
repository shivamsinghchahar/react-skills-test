import { useState, useEffect } from "react";

import { Box, Tabs, Tab } from "@material-ui/core";

import MarketingPrograms from "./MarketingPrograms";
import TraitDetails from "./TraitDetails";
import { trait as traitApi } from "../../apis/traits";
import { a11yProps } from "../../utils";
import TabPanel from "../TabPanel";

export default function TraitTabs() {
  const [value, setValue] = useState(0);
  const [trait, setTrait] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function fetchTrait() {
    try {
      const {
        data: { data },
      } = await traitApi();
      setTrait(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTrait();
  }, []);

  return (
    !!trait && (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Trait Details" {...a11yProps(0)} />
            <Tab label="Marketing Programs" {...a11yProps(1)} />
            <Tab label="Ecosystems" {...a11yProps(2)} disabled />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <TraitDetails trait={trait} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MarketingPrograms marketingPrograms={trait?.marketingPrograms} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Ecosystems
        </TabPanel>
      </Box>
    )
  );
}
