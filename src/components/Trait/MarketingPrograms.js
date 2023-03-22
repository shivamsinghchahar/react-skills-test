import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import PropTypes from "prop-types";

export default function MarketingPrograms({ marketingPrograms }) {
  return (
    <Box
      mb={2}
      display="flex"
      flexDirection="column"
      height="700px" // fixed the height
      style={{
        overflow: "hidden",
        overflowY: "scroll", // added scroll
      }}
    >
      <List>
        {marketingPrograms.map((program) => (
          <ListItem>
            <ListItemText
              style={{ borderBottom: "1px solid" }}
              primary={
                <Typography component="h6" variant="body1" color="textPrimary">
                  {program.description}
                </Typography>
              }
              secondary={
                <>
                  <Typography
                    component="h6"
                    variant="p"
                    style={{ display: "inline" }}
                    color="textSecondary"
                  >
                    ECOSYSTEMS
                  </Typography>
                  <p style={{ margin: "4px 0px" }}>{program.ecosystems}</p>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

MarketingPrograms.propTypes = {
  marketingPrograms: PropTypes.arrayOf({
    description: PropTypes.string.isRequired,
    ecosystems: PropTypes.string.isRequired,
  }).isRequired,
};
