"use client";

//Calendar with date picker will be created here
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";


export default function CalenderDate({startDate, setStartDate, endDate, setEndDate }) {
  const [showCalendar, setShowCalendar] = useState(false);

  //Define function 
  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

  // The parent report page will hold the selected startDate and endDate.
  // These will be passed down to this component via props (setStartDate, setEndDate).
  // When the user selects dates, the parent can use startDate and endDate
  // along with selectedReport to fetch the PDF from the backend API
  

return (
  
  <div className="flex flex-col items-start">
      <p className="px-5 py-2 font-bold">Set Date: </p>
  {/* Button */}
  <div className="px-4 py-3">
    <button onClick={handleButtonClick} className="px-6 py-3 bg-white font-bold border text-[#0C2340] hover:bg-[#0C2340] hover:text-white rounded-4xl" style={{ fontFamily: "var(--font-titillium)" }}>
      Calendar
    <span className="ml-5">{">"}</span> 
    </button>
  </div>

  {/* Calendar only shows when button clicked */}
  {showCalendar && (
    <div className="w-auto"> 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         {/* Start Date */}
        <DateCalendar
        value={startDate}
        onChange={(newDate) => setStartDate(newDate)}
        />
         {/* End Date*/}
        <DateCalendar
        value={endDate}
        onChange={(newDate) => setEndDate(newDate)}
        />

      </LocalizationProvider>
    </div>
    )}
    {/*Create New Report Button*/}
    <div className="px-4 py-3">
      <button 
        className="bg-[#EE3124] text-white  font-bold px-4 py-3 rounded-4xl hover:bg-[#8D1527]"
        style={{ fontFamily: "var(--font-titillium)" }}
      >
        Create New Report
      <span className="ml-4">{">"}</span>
      </button>
    </div>
  </div>
  );
}
   
  


 


