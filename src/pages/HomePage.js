import { Container, Typography, Box } from "@material-ui/core";

import Traits from "../components/Traits";
import TraitsTabs from "../components/TraitsTabs";

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 2 }}>
        <Typography variant="h5" component="p">
          Traits Management
        </Typography>
      </Box>

      <TraitsTabs>
        <Traits />
      </TraitsTabs>
    </Container>
  );
}
