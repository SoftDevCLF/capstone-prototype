"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import * as api from "../../utils/apis";
import dayjs from "dayjs";

export default function Calendar({ startDate, setStartDate, endDate, setEndDate, onCreateReport, selectedReport }) {

  const [showCalendar, setShowCalendar] = useState("");
  const [selectedRange, setSelectedRange] = useState(""); // "", "7", "30", "calendar"


  // Handle clicking a date on the calendar
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

  // Map dropdown values to API functions
  const reportKeyMap = {
    "Sensor Status": "sensor-status",
    "Inner Building Temperature": "temperature",
    "Energy Generated": "energy-generated",
    "Energy Consumed": "energy-consumed",
  };

  const last7ApiMap = {
    temperature: api.getTemperatureLast7,
    energyGenerated: api.getEnergyGeneratedLast7,
    energyConsumed: api.getEnergyConsumedLast7,
    sensorStatus: api.getSensorStatusLast7,
  };

  const last30ApiMap = {
    temperature: api.getTemperatureLast30,
    energyGenerated: api.getEnergyGeneratedLast30,
    energyConsumed: api.getEnergyConsumedLast30,
    sensorStatus: api.getSensorStatusLast30,
  };

const handleLast7Days = () => {
  const end = dayjs();
  const start = dayjs().subtract(6, "day");
  setStartDate(start);
  setEndDate(end);
  setSelectedRange("7"); // mark button as active
  setShowCalendar(false);
};;


const handleLast30Days = () => {
  const end = dayjs();
  const start = dayjs().subtract(29, "day");
  setStartDate(start);
  setEndDate(end);
  setSelectedRange("30"); // mark button as active
  setShowCalendar(false);
};

const handleToggleCalendar = () => {
  setShowCalendar(!showCalendar);
  setSelectedRange("calendar"); // mark calendar as active
};

  return (
    <div className="flex flex-col items-start">
      <p className="px-5 py-2 font-bold  dark:text-black">Set Date:</p>


      <button
        onClick={handleLast7Days}
        style={{ fontFamily: "var(--font-titillium)" }}
        className={`px-6 py-3 mt-2  border rounded-4xl font-bold ${selectedRange === "7" ? "bg-[#A6192E] text-white" : "bg-white text-[#A6192E]"} hover:bg-[#A6192E] hover:text-white`}>
        
        Last 7 Days <span className="ml-5">{">"}</span>
      </button>
      
      <button
        onClick={handleLast30Days}
        style={{ fontFamily: "var(--font-titillium)" }}
        className={`px-6 py-3 mt-4 border rounded-4xl font-bold ${
        selectedRange === "30" ? "bg-[#6D2077] text-white" : "bg-white text-[#6D2077]"} hover:bg-[#6D2077] hover:text-white`}>
        Last 30 Days <span className="ml-5">{">"}</span>
      </button>

      <button
        onClick={handleToggleCalendar}
        style={{ fontFamily: "var(--font-titillium)" }}
        className={`px-6 py-3 mt-4  border rounded-4xl font-bold ${
        selectedRange === "calendar" ? "bg-[#0C2340] text-white" : "bg-white text-[#0C2340]"} hover:bg-[#0C2340] hover:text-white`}>
        Calendar <span className="ml-5">{">"}</span>
      </button>

      {showCalendar && (
        <div className="mt-1 -ml-5"  style={{ fontFamily: "var(--font-titillium)" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={startDate || dayjs()}
              onChange={handleDateClick}
            />
          </LocalizationProvider>
          <p className="mt-3 pl-2 text-sm">
            Selected range: {startDate ? startDate.format("YYYY-MM-DD") : "—"} 
            {endDate ? ` to ${endDate.format("YYYY-MM-DD")}` : ""}
          </p>
        </div>
      )}

     <button
      type="button"
      onClick={() => onCreateReport(startDate, endDate, selectedReport)}
      
      className="mt-4 bg-[#aa2f39] text-white font-bold px-4 py-3 rounded-4xl hover:bg-[#8D1527]">
      Create New Report <span className="ml-4">{">"}</span>
    </button>
    </div>
  );
}
