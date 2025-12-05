"use client";

import { useState } from "react";
import dayjs from "dayjs";
import ReportDropdown from "../components/ReportRelated/ReportDropdown";
import Calendar from "../components/ReportRelated/Calendar";
import PDFViewer from "../components/ReportRelated/PdfViewer";
import Navbar from "../components/nav-bar";
import EmptyHeader from "../components/empty-header";
import Footer from "../components/footer";

export default function Page() {
  const [selectedReport, setSelectedReport] = useState("");

  // Start/end dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // PDF blob
  const [pdfBlob, setPdfBlob] = useState(null);

  // Error message state
  const [errorMessage, setErrorMessage] = useState("");

  // Control PDFViewer re-render
  const [showViewer, setShowViewer] = useState(true);

  const reportEndpoints = {
    "Inner Building Temperature": "temperature",
    "Energy Generated": "energy-generated",
    "Energy Consumed": "energy-consumed",
    "Sensor Status": "sensor-status",
  };

  const MIN_YEAR = 2023;
  const MAX_YEAR = 2025;

  // handleCreateReport now only triggers when the user clicks the button
  const handleCreateReport = async (start, end, report) => {
    setErrorMessage(""); // reset previous errors

    if (!start || !end) {
      setErrorMessage("Please select both start and end dates.");
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
      setErrorMessage("Something went wrong!");
    }
  };

  const handleLogout = () => console.log("User logged out");

  const handleClear = () => {
    setPdfBlob(null);
    setShowViewer(false);
    setTimeout(() => setShowViewer(true), 10);
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <EmptyHeader onLogout={handleLogout} />
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-titillium)" }}>
          Reports
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Dropdown + Calendar */}
          <div className="col-span-1 p-6 bg-white shadow-md rounded-xl border space-y-6">
            <ReportDropdown report={selectedReport} setReport={setSelectedReport} />

            <Calendar
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              selectedReport={selectedReport}
              onCreateReport={handleCreateReport} // only triggers on button click inside Calendar
            />

            {/* Inline error message */}
            {errorMessage && (
              <p className="mt-2 text-red-600 font-bold">{errorMessage}</p>
            )}
          </div>

          {/* RIGHT: PDF Viewer */}
          <div className="col-span-2">
            {showViewer && <PDFViewer pdfBlob={pdfBlob} onClear={handleClear} />}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
