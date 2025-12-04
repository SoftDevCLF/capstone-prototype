"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

export default function Calendar({ startDate, setStartDate, endDate, setEndDate, onCreateReport }) {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date.isBefore(startDate)) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  return (
    <div className="flex flex-col items-start">
      <p className="px-5 py-2 font-bold">Set Date:</p>

      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="px-6 py-3 bg-white font-bold border text-[#0C2340] hover:bg-[#0C2340] hover:text-white rounded-4xl"
      >
        Calendar <span className="ml-5">{">"}</span>
      </button>

      {showCalendar && (
        <div className="mt-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={startDate || dayjs()}
              onChange={handleDateClick}
            />
          </LocalizationProvider>
          <p className="mt-2 text-sm">
            Selected range: {startDate ? startDate.format("YYYY-MM-DD") : "—"} 
            {endDate ? ` to ${endDate.format("YYYY-MM-DD")}` : ""}
          </p>
        </div>
      )}


      {/* add functionality for last 7 days
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="px-6 py-3 bg-white font-bold border text-[#0C2340] hover:bg-[#0C2340] hover:text-white rounded-4xl"
      >
        Last 7 Days  <span className="ml-5">{">"}</span>
      </button>

      {/*add functionality for last 7 days*/}
      {/* <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="px-6 py-3 bg-white font-bold border text-[#0C2340] hover:bg-[#0C2340] hover:text-white rounded-4xl"
      >
        Last 30 Days <span className="ml-5">{">"}</span>
      </button> */} 

      <button
        onClick={onCreateReport}
        className="mt-4 bg-[#EE3124] text-white font-bold px-4 py-3 rounded-4xl hover:bg-[#8D1527]"
      >
        Create New Report <span className="ml-4">{">"}</span>
      </button>
    </div>
  );
}
