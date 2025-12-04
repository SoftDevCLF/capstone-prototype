"use client";

import ReportDropdown from "../components/ReportRelated/ReportDropdown";
import PDFViewer from "../components/ReportRelated/PdfViewer";
import Footer from "../components/footer";
import Navbar from "../components/nav-bar";
import EmptyHeader from "../components/empty-header";
import Calendar from "../components/ReportRelated/Calendar";

import { useState } from "react";
import dayjs from "dayjs";


export default function Page() {
  const [selectedReport, setSelectedReport] = useState("");

  // Start/end dates for the report
  const [startDate, setStartDate] = useState(dayjs().subtract(7, "day"));
  const [endDate, setEndDate] = useState(dayjs());

  // Used to reset the PDFViewer when "Create Another Report" is clicked
  const [showViewer, setShowViewer] = useState(true);

  const reportEndpoints = {
    "Inner Building Temperature": "temperature",
    "Energy Generated": "energy-generated",
    "Equipment Consumed": "energy-consumed",
    "Sensor Status": "sensor-status",
  };

  
  const handleLogout = () => {
    console.log("User logged out");
  };

  const handleClear = () => {
    setShowViewer(false);
    setTimeout(() => setShowViewer(true), 10); // force remount
  };

  const handleCreateReport = async () => {
    if (!startDate || !endDate || !selectedReport) return;

    const reportKey = reportEndpoints[selectedReport];
    if (!reportKey) {
      console.error("Unknown report type");
      return;
    }

    try {
      const start = startDate.format("YYYY-MM-DD");
      const end = endDate.format("YYYY-MM-DD");

      const response = await fetch(
        `http://127.0.0.1:8000/report/${reportKey}/pdf?start=${start}&end=${end}`
      );

      if (!response.ok) throw new Error("Failed to fetch PDF");

      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);
      setPdfData(pdfUrl);
    } catch (err) {
      console.error(err);
    }
  };

   // Pass reportKey to PDFViewer to make sure the correct endpoint is used for download/printing
  const currentReportKey = reportEndpoints[selectedReport] || "";





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
            onCreateReport={handleCreateReport}
/>

            
            {/* PDFViewer will fetch PDF from backend directly */}
          </div>

          {/* RIGHT: PDF Viewer */}
          <div className="col-span-2">
            {showViewer && (
              <PDFViewer
                reportType={selectedReport.toLowerCase().replace(/\s/g, "-")} // map to backend endpoint if needed
                onClear={handleClear}
                startDate={startDate}
                endDate={endDate}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
