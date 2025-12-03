"use client";

//Calendar with date picker will be created here
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";


export default function CalenderDate() {
  const [showCalendar, setShowCalendar] = useState(false);

  //Define function 
  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

return (
  
  <div className="flex flex-col items-start">
      <p className="px-5 py-2 font-bold">Set Date: </p>
  {/* Button */}
  <div className="px-4 py-3">
    <button onClick={handleButtonClick} className="px-6 py-2.5 bg-white border text-[#0C2340] hover:bg-[#0C2340] hover:text-white rounded-4xl">
      Calendar 
    </button>
  </div>

  {/* Calendar only shows when button clicked */}
  {showCalendar && (
    <div className="w-auto"> 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </div>
    )}
    {/*Create New Report Button*/}
    <div className="px-4 py-3">
      <button 
        className="bg-[#EE3124] text-white px-4 py-2.5 rounded-4xl hover:bg-[#8D1527]"
      >
        Create New Report
      </button>
    </div>
  </div>
  );
}
   
  


 


