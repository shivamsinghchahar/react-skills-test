import { List, ListItem, ListItemText } from "@material-ui/core";
import PropTypes from "prop-types";

export default function TraitDetails({ trait }) {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Trait Id" style={{ fontWeight: "bold" }} />
        <ListItemText primary={trait.traitId} style={{ textAlign: "right" }} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Trait Name" />
        <ListItemText
          primary={trait.traitName}
          style={{ textAlign: "right" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Description" />
        <ListItemText
          primary={trait.description}
          style={{ textAlign: "right" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Personal Data" />
        <ListItemText
          primary={trait.personalData.toString()}
          style={{ textAlign: "right" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Data Type" />
        <ListItemText primary={trait.dataType} style={{ textAlign: "right" }} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Data Class" />
        <ListItemText
          primary={trait.dataClass}
          style={{ textAlign: "right" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Trait Type" />
        <ListItemText
          primary={trait.traitType}
          style={{ textAlign: "right" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Survivor Ship Level" />
        <ListItemText
          primary={trait.survivorShipLevel}
          style={{ textAlign: "right" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Multi Answer Response Indicator" />
        <ListItemText
          primary={trait.multiAnswerResponseIndicator.toString()}
          style={{ textAlign: "right" }}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Survivor Ship Rule" />
        <ListItemText
          primary={trait.survivorShipRule}
          style={{ textAlign: "right" }}
        />
      </ListItem>
    </List>
  );
}

TraitDetails.propTypes = {
  trait: PropTypes.shape({
    traitId: PropTypes.number.isRequired,
    traitName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    personalData: PropTypes.bool.isRequired,
    dataType: PropTypes.string.isRequired,
    dataClass: PropTypes.string.isRequired,
    traitType: PropTypes.string.isRequired,
    survivorShipLevel: PropTypes.string.isRequired,
    multiAnswerResponseIndicator: PropTypes.bool.isRequired,
    survivorShipRule: PropTypes.string.isRequired,
  }).isRequired,
};
