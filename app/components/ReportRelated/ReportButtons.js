"use client";
//Buttons such as Create Report, Download, Print, Create Another Report(or clear)

export default function ReportButtons({ onPrint, onDownload, onClear }) {
  return (
    <div className="flex gap-4 mt-4">
      {/*Print Button*/}
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={onPrint}
      >
        Print
      </button>

      {/*Download Button*/}
      <button 
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={onDownload}
      >
        Download
      </button>

      {/*Create New Report Button*/}
      <button 
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={onClear}
      >
        Create New Report
      </button>
    </div>
  );
}
