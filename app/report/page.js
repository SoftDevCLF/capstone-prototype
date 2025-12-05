"use client";
import { useState } from "react";
import ReportDropdown from "../components/ReportRelated/ReportDropdown";
import Calendar from "../components/ReportRelated/Calendar";
import PDFViewer from "../components/ReportRelated/PdfViewer";
import Navbar from "../components/nav-bar";
import EmptyHeader from "../components/empty-header";
import Footer from "../components/footer";
import useReport from "../hooks/useReports";

export default function Page() {

  //State variables
  const [selectedReport, setSelectedReport] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showViewer, setShowViewer] = useState(true); // Control PDFViewer re-render

  //Custom hook
  const { pdfBlob, errorMessage, createReport, clearReport} = useReport();

  //Event Handler Functions
  const handleLogout = () => console.log("User logged out");
  const handleClear = () => {
    clearReport(); //clears report
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <EmptyHeader onLogout={handleLogout} />
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-10  dark:text-black" style={{ fontFamily: "var(--font-titillium)" }}>
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
              onClearPDF={handleClear}
              onCreateReport={createReport} // pass hook function
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
