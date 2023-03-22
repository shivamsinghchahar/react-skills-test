import { useState } from "react";

import { Container, Typography, Box } from "@material-ui/core";

import Traits from "../components/Traits";
import TraitsTabs from "../components/Traits/TraitsTabs";

export default function HomePage() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 2 }}>
        <Typography variant="h5" component="p">
          Traits Management
        </Typography>
      </Box>

      <TraitsTabs selectedItems={selectedItems}>
        <Traits setSelectedItems={setSelectedItems} />
      </TraitsTabs>
    </Container>
  );
}
