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
  <main>

    {/* Pass header props to page header component */}
    <EmptyHeader />
    <Navbar />

    <h1 className="text-3xl px-10 py-10 font-bold">Reports</h1>

    {/* MAIN LAYOUT SECTION */}
    <div className="flex justify-between px-5 gap-5">

      {/* LEFT SIDE: Dropdown + Calendar */}
      <div className="flex flex-col gap-6">
        <ReportDropdown />
        <Calendar />
      </div>

      
      {/* RIGHT SIDE: PDF Viewer */}
      <div className="px-25">
        <PDFViewer pdfData={pdfData}
        onClear={() => setPdfData(null) } />
      </div>

    </div>

    <Footer />

  </main>
);
}