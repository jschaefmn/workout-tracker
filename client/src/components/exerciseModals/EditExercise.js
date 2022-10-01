import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useMutation } from '@apollo/client';

import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button';
import { FormControl, MenuItem, Select, TextField } from '@mui/material';

import { Stack } from '@mui/system';
import { ADD_EXERCISE, QUERY_ME } from '../../utils/mutations';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #1A76D2',
  borderRadius: 2,
  boxShadow: 15,
  p: 3,
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: 'full',
  alignItems: 'center',
};

const formStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: 'full',
  alignItems: 'center',
};

const bodyCategories = [
  'Arms',
  'Back',
  'Cardio',
  'Chest',
  'Core',
  'Full Body',
  'Legs',
  'Shoulders',
];

function EditExerciseModal({ exercise }) {
  console.log(exercise);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [category, setCategory] = React.useState(exercise.exerciseCategory);

  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Top Nav and Input */}
          <Stack sx={headerStyle} direction={'row'} spacing={3}>
            {/* Close button */}
            <IconButton edge="start" aria-label="close" onClick={handleClose}>
              <HighlightOffIcon />
            </IconButton>

            {/* Modal Title/Input */}
            <TextField defaultValue={exercise.exerciseName} variant="standard" />
            {/* Save Button */}
            <Button varient="outlined" edge="end" sx={{ p: 0 }}>
              Save
            </Button>
          </Stack>

          {/* Select Body Part Focus Form */}
          <Box sx={formStyle}>
            <h4>Body Part</h4>
            <FormControl fullWidth>
              <Select
                labelId="focus-label"
                id="focus"
                value={category}
                onChange={handleChangeCategory}
              >
                {bodyCategories.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default EditExerciseModal;
