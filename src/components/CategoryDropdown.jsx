import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CategoryDropdown() {
  return (
    <Autocomplete
      size="small"
      disablePortal
      id="combo-box-demo"
      options={categories}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Categorías" />}
    />
  );
}

const categories = [
  { label: 'Cuadernos' },
  { label: 'Cartucheras' },
  { label: 'Mochilas' },
  { label: 'Papel' },
];
