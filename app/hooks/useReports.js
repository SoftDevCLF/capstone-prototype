// hooks/useReport.js
import { useState } from "react";

export default function useReport() {

  //State variables
  const [pdfBlob, setPdfBlob] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  //Constants for years
  const MIN_YEAR = 2023;
  const MAX_YEAR = 2025;

  //Centralize all API calls to the backend in one file
  const reportEndpoints = {
    "Inner Building Temperature": "temperature",
    "Energy Generated": "energy-generated",
    "Energy Consumed": "energy-consumed",
    "Sensor Status": "sensor-status",
  };

  const createReport = async (start, end, report) => {
    setErrorMessage("");

    if (!start || !end) {
      setErrorMessage("Please select a button option or a start and end date from the calendar.");
      return;
    }

    const startYear = start.year();
    const endYear = end.year();

    if (startYear < MIN_YEAR || endYear > MAX_YEAR) {
      setErrorMessage(`Date out of range. Data only available from ${MIN_YEAR} to ${MAX_YEAR}.`);
      return;
    }

    if (!report) {
      setErrorMessage("Please select a report type.");
      return;
    }

    try {
      const startStr = start.format("YYYY-MM-DD");
      const endStr = end.format("YYYY-MM-DD");

      //Fetches report from backend
      const response = await fetch(
        `http://127.0.0.1:8000/report/${reportEndpoints[report]}/pdf?start=${startStr}&end=${endStr}`
      );

      if (!response.ok) {
        setErrorMessage("Failed to generate report.");
        return;
      }

      const blob = await response.blob();
      setPdfBlob(blob);
    } catch (err) {
      console.error(err);
      setErrorMessage("Backend Error!");
    }
  };
    // <-- NEW: function to clear the current PDF
    const clearReport = () => {
      setPdfBlob(null);
      setErrorMessage("");
  };
  return { pdfBlob, errorMessage, createReport, clearReport };
}
