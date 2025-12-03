"use client";

import dynamic from "next/dynamic";
import { pdfjs } from "react-pdf";

//For PDF rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//Import Document and Page to avoid SSR issues
const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), { ssr: false });

export default function PDFViewer({ pdfData, onClear }) {
  //The pdf data will either be a URL to a PDF file, file object, or null
  if (!pdfData) return <p>No PDF to display</p>

  return (
    <div className="w-full bg-white shadow-md border rounded-xl p-6">

      <h2 className="text-xl text-center my-2 font-semibold" style={{ fontFamily: "var(--font-titillium)" }}>
        Report Preview
      </h2>

      {/* Pdf Viewer */}
      <div className="bg-gray-100 border rounded-lg p-4 min-h-[500px] flex justify-center">
        {!pdfData && (
          <div className="text-gray-500" style={{ fontFamily: "var(--font-titillium)" }}>
            No report generated yet.
          </div>
        )}

        {pdfData && (
          <Document
            file={pdfData}
            loading={<div className="text-gray-500 " style={{ fontFamily: "var(--font-titillium)" }} >Loading PDF…</div>}
            error={<div className="text-red-600" style={{ fontFamily: "var(--font-titillium)" }}>Failed to load PDF.</div>}
          >
            <Page pageNumber={1} />
          </Document>
        )}
      </div>

      {/* Header & Buttons  */}
      <div className="flex justify-center my-5 items-center mb-4">
        <div className="flex gap-3">
          <button className="bg-[#005EB8] text-white font-bold px-8 py-3 rounded-4xl hover:bg-[#004D96]" style={{ fontFamily: "var(--font-titillium)" }}>
            Print
          <span className="ml-5">{">"}</span>
          </button>

          <button className="bg-[#6D2077] text-white font-bold px-7 py-3 rounded-4xl hover:bg-[#571A5F]" style={{ fontFamily: "var(--font-titillium)" }}>
            Download
          <span className="ml-5">{">"}</span>
          </button>
        </div>
      </div>

      {/* Clear Button */}
      <div className="flex justify-center mt-10">
        <button
          className="bg-[#A6192E] text-white font-bold px-5 py-3 rounded-4xl hover:bg-[#7A1222]"
          onClick={onClear}
          style={{ fontFamily: "var(--font-titillium)" }}
          
        >
          Create Another Report
        <span className="ml-5">{">"}</span>
        </button>
      </div>

    </div>
  );
}
