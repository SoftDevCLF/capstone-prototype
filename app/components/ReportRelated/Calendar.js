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
      <div>Set date:</div>
  {/* Button */}
    <button onClick={handleButtonClick} className="px-10 py-3 bg-white border text-[#0C2340] hover:bg-[#0C2340] hover:text-white rounded-4xl">
      Calendar 
    </button>

  {/* Calendar only shows when button clicked */}
  {showCalendar && (
    <div className="w-[100px] -ml-5"> 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </div>
    )}
  </div>
  );
}
   
  


 


