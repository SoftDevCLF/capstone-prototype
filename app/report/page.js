"use client";

import ReportDropdown from "../components/ReportRelated/ReportDropdown";
import Calendar from "../components/ReportRelated/Calendar";
import Footer from "../components/footer";
import Navbar from "../components/nav-bar";
import EmptyHeader from "../components/empty-header";
import PDFViewer from "../components/ReportRelated/PdfViewer";
import { useState } from "react";

export default function Page() {

const [pdfData, setPdfData] = useState(null)

return (
    <main className="bg-gray-50 min-h-screen">
      <EmptyHeader />
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-10" style={{ fontFamily: "var(--font-titillium)" }}>Reports</h1>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT CARD */}
          <div className="col-span-1 p-6 bg-white shadow-md rounded-xl border space-y-6">
            <ReportDropdown />
            <Calendar />


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