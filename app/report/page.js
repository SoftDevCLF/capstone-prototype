"use client";

import ReportDropdown from "../components/ReportRelated/ReportDropdown";
import Calendar from "../components/ReportRelated/Calendar";
import Footer from "../components/footer";
import Navbar from "../components/nav-bar";
import EmptyHeader from "../components/empty-header";
import PDFViewer from "../components/ReportRelated/PdfViewer";
import { useState } from "react";

export default function Page() {

  //State variables
const [selectedReport, setSelectedReport] = useState("");
const [pdfData, setPdfData] = useState(null);
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

//Logout handler
  const handleLogout = () => {
    // TODO: add actual logout logic (clear session, redirect, etc.)
    console.log("User has successfully logged out");
  };

//Report handler
 const handleCreateReport = async () => {
    // TODO: Connect to your Python backend
    // Example API endpoint: /api/reports?type=...&start=...&end=...
    // Convert startDate/endDate to string format if needed
    console.log("Fetching report for:", selectedReport, startDate, endDate);
 try {
      // Example fetch (replace URL with your backend endpoint)
      const response = await fetch(
        `/api/reports?type=${encodeURIComponent(selectedReport)}&start=${startDate}&end=${endDate}`
      );

      if (!response.ok) throw new Error("Failed to fetch report");

      const blob = await response.blob(); // assuming backend returns PDF
      const pdfUrl = URL.createObjectURL(blob);
      setPdfData(pdfUrl);
    } catch (error) {
      console.error(error);
    }
  };


return (
    <main className="bg-gray-50 min-h-screen">
      <EmptyHeader onLogout={handleLogout} />
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-titillium)" }}>Reports</h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT CARD */}
          <div className="col-span-1 p-6 bg-white shadow-md rounded-xl border space-y-6">
            <ReportDropdown report={selectedReport} setReport={setSelectedReport} />
            <Calendar
              startDate={startDate} 
              setStartDate={setStartDate} 
              endDate={endDate} 
              setEndDate={setEndDate} 
             />


          </div>

          {/* RIGHT SIDE: PDF VIEWER */}
          <div className="col-span-2">
            <PDFViewer pdfData={pdfData} onClear={() => setPdfData(null)} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}