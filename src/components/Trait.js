import { useState, useEffect } from "react";

import {
  Box,
  IconButton,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import PropTypes from "prop-types";

import TabPanel from "./TabPanel";
import { trait as traitApi } from "../apis/traits";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    height: "80vh",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "fit-content",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TraitDetails({ trait }) {
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

function MarketingPrograms({ marketingPrograms }) {
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

function TraitTabs() {
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

function TraitBody({ setIsModalOpen }) {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  return (
    <div style={modalStyle} className={classes.paper}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="h6">
          Trait ID - 1
        </Typography>

        <IconButton onClick={() => setIsModalOpen(false)}>
          <Close />
        </IconButton>
      </Box>
      <TraitTabs />
    </div>
  );
}

TraitBody.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default function Trait({ isOpen, setIsModalOpen }) {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <TraitBody setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}

Trait.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
