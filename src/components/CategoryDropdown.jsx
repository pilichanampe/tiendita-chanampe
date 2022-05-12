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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const categories = [
  { label: 'Cuadernos' },
  { label: 'Cartucheras' },
  { label: 'Mochilas' },
  { label: 'Papel' },

];
