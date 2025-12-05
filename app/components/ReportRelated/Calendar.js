"use client";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

export default function Calendar({ startDate, setStartDate, endDate, setEndDate, onCreateReport, selectedReport,}) {
  const [showCalendar, setShowCalendar] = useState("");
  const [selectedRange, setSelectedRange] = useState("");

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

  //Displays calendar when button is clicked 
  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
    setSelectedRange("calendar");
  };

  //Diplays last 7 days when button is clicked
  const handleLast7Days = () => {
    const end = dayjs();
    const start = dayjs().subtract(6, "day");
    setStartDate(start);
    setEndDate(end);
    setSelectedRange("7"); 
    setShowCalendar(false);
  };

  //Diplays last 30 days when button is clicked
  const handleLast30Days = () => {
    const end = dayjs();
    const start = dayjs().subtract(29, "day");
    setStartDate(start);
    setEndDate(end);
    setSelectedRange("30");
    setShowCalendar(false);
  };

  return (
    // This component uses Tailwind CSS for layout, spacing, colors, and buttons,
    // while using Material-UI (MUI) DateCalendar for the calendar picker functionality.
    <div className="flex flex-col items-start">
      <p className="px-5 mt-0 py-2 font-bold text-lg dark:text-black" style={{ fontFamily: "var(--font-titillium)" }}>Set Date:</p>

      <button
        onClick={handleLast7Days}
        style={{ fontFamily: "var(--font-titillium)" }}
        className={`px-6 py-3 mt-2 border rounded-4xl font-bold ${
          selectedRange === "7" ? "bg-[#A6192E] text-white" : "bg-white text-[#A6192E]"
        } hover:bg-[#A6192E] hover:text-white`}
      >
        Last 7 Days <span className="ml-5">{">"}</span>
      </button>

      <button
        onClick={handleLast30Days}
        style={{ fontFamily: "var(--font-titillium)" }}
        className={`px-6 py-3 mt-4 border rounded-4xl font-bold ${
          selectedRange === "30" ? "bg-[#6D2077] text-white" : "bg-white text-[#6D2077]"
        } hover:bg-[#6D2077] hover:text-white`}
      >
        Last 30 Days <span className="ml-5">{">"}</span>
      </button>

      <button
        onClick={handleToggleCalendar}
        style={{ fontFamily: "var(--font-titillium)" }}
        className={`px-6 py-3 mt-4 border rounded-4xl font-bold ${
          selectedRange === "calendar" ? "bg-[#0C2340] text-white" : "bg-white text-[#0C2340]"
        } hover:bg-[#0C2340] hover:text-white`}
      >
        Calendar <span className="ml-5">{">"}</span>
      </button>

      {showCalendar && (
        <div className="-ml-5 dark:text-black" style={{ fontFamily: "var(--font-titillium)" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={startDate || dayjs()} onChange={handleDateClick} />
          </LocalizationProvider>
          <p className="pl-8 text-sm dark:text-black">
            Selected Range: {startDate ? startDate.format("YYYY-MM-DD") : "—"}
            {endDate ? ` to ${endDate.format("YYYY-MM-DD")}` : ""}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => onCreateReport(startDate, endDate, selectedReport)}
        className="mt-4 bg-[#aa2f39] text-white font-bold px-4 py-3 rounded-4xl hover:bg-[#8D1527]"
      >
        Create New Report <span className="ml-4">{">"}</span>
      </button>
    </div>
  );
}
