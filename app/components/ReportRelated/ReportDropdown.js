"use client";
//Drop down to select report type will be created here

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [report, setReport] = React.useState('');

  const handleChange = (event) => {
    setReport(event.target.value);
  };

  return (
    <FormControl sx={{ m: 3, minWidth: 250}} size="small">
      <InputLabel id="demo-select-small-label">Select Report Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={report}
        label="Report"
        onChange={handleChange}
      >
        <MenuItem value="Sensor Status">Sensor Status</MenuItem>
        <MenuItem value="Inner Building Temperature">Inner Building Temperature</MenuItem>
        <MenuItem value="Energy Generated">Energy Generated</MenuItem>
        <MenuItem value="Energy Consumed">Energy Consumed</MenuItem>
        
      </Select>
    </FormControl>
  );
}
