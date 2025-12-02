"use client";
//Calendar with date picker will be created here
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <div className="flex flex-col items-start">
      <div className="w-[100px] -ml-5"> 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
    </div>
  );
}
