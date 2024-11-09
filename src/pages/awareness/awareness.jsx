import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Awareness = ({currentLanguage}) => {
    const [currentSelection, setCurrentSelection] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = (selection) => {
        setCurrentSelection(selection);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    return (
        <>
        <List>
            <ListItem onClick={() => handleOpen("Dengue")}>
                "Dengue"
            </ ListItem>
            <ListItem onClick={() => handleOpen("Fever")}>
                "Fever"
            </ ListItem>
            <ListItem onClick={() => handleOpen("Cough")}>
                "Cough"
            </ ListItem>            
        </ List>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div>INSIDE MODAL - {currentSelection}</div>
        </Box>
      </Modal>
        </>
    );
}

export default Awareness;