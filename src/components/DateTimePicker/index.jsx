import { TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

function DateAndTimePicker() {
  const [value, setValue] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
      />
    </LocalizationProvider>
  );
};
export default DateAndTimePicker;