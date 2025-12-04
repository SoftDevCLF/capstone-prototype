"use client";

import { useEffect, useState } from "react";

export default function PDFViewer({ startDate, endDate, reportType, onClear }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    async function fetchPdf() {
      if (!startDate || !endDate) return;

      try {
        // Dynamically use the reportType in the URL
        const url = `http://127.0.0.1:8000/report/${reportType}/pdf?start=${startDate.format(
          "YYYY-MM-DD"
        )}&end=${endDate.format("YYYY-MM-DD")}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch PDF");

        const blob = await response.blob();
        setPdfUrl(URL.createObjectURL(blob));
      } catch (err) {
        console.error(err);
        setPdfUrl(null);
      }
    }


    fetchPdf();

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [startDate, endDate, reportType]);

  return (
    <div className="w-full bg-white shadow-md border rounded-xl p-6">
      <h2 className="text-xl text-center my-2 font-semibold">Report Preview</h2>

      <div className="bg-gray-100 border rounded-lg p-4 min-h-[500px] flex justify-center">
        {!pdfUrl && <div className="text-gray-500">No report generated yet.</div>}

        {pdfUrl && (
          <iframe
            src={pdfUrl}
            width="100%"
            height="500px"
            style={{ border: "none" }}
            title="Report PDF"
          />
        )}
      </div>

      <div className="flex justify-center mt-10">
        <button
          className="bg-[#A6192E] text-white font-bold px-5 py-3 rounded-4xl hover:bg-[#7A1222]"
          onClick={onClear}
        >
          Create Another Report <span className="ml-5">{">"}</span>
        </button>
      </div>
    </div>
  );
}
