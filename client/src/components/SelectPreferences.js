import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import Select from 'react-select';
import { Categories } from '../utils/constants';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  // bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SelectPreferences({ open, handleClose, onCategoryChange }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        style={style}
        sx={{
          p: 4,
        }}
      >
        <Typography variant="h5" component="h1">
          Set Preferences
        </Typography>
        <Typography variant="subtitle2">
          Please select any item(s) from the list to set your preferences
        </Typography>
        <Select
          defaultValue={[Categories[2], Categories[3]]}
          isMulti
          name="colors"
          options={Categories}
          onChange={onCategoryChange}
        />
      </Box>
    </Modal>
  );
}

export default SelectPreferences;
