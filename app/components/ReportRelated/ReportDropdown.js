"use client";
//Drop down to select report type will be created here

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({ report, setReport }) {


  const handleChange = (event) => {
    setReport(event.target.value);
  };
  //Anna here we will call an API
  // fetch(`/api/reports?type=${event.target.value}&start=${startDate}&end=${endDate}`)
  //AND pass PDF or CSV to viewer component 

  return (
    <div> 
      <p className="px-5 font-bold" style={{ fontFamily: "var(--font-titillium)" }}> Select The Report Type:</p>
    <FormControl sx={{ m: 2, minWidth: 250}} size="small">
      <InputLabel id="demo-select-small-label" style={{ fontFamily: "var(--font-titillium)" }}>Select Report Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={report}
        label="Report"
        onChange={handleChange}
      >
        {/*Dropdown component*/}
        <MenuItem value="Sensor Status" style={{ fontFamily: "var(--font-titillium)" }}>Sensor Status</MenuItem>
        <MenuItem value="Inner Building Temperature" style={{ fontFamily: "var(--font-titillium)" }}>Inner Building Temperature</MenuItem>
        <MenuItem value="Energy Generated" style={{ fontFamily: "var(--font-titillium)" }}>Energy Generated</MenuItem>
        <MenuItem value="Energy Consumed" style={{ fontFamily: "var(--font-titillium)" }}>Energy Consumed</MenuItem>
        
      </Select>
    </FormControl>
    </div>
  );
}
