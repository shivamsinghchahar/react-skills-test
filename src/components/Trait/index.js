import { useState } from "react";

import { Box, IconButton, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import PropTypes from "prop-types";

import TraitTabs from "./TraitTabs";

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
      <Typography variant="caption" component="p">
        Trait has the following details and mappings
      </Typography>
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
