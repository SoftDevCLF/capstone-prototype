//Functionality to display a PDF preview will be created here
//ADD PRINT AND DOWNLOAD BUTTONS
import { Document, Page, pdfjs } from 'react-pdf';

//To Render PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ pdfData }) {
  return (
  <div className="w-full flex">
  <div className="md:w-[800px] min-h-[200px] p-6 bg-[#EDEDF0] border border-gray-200">
      {!pdfData && (
        <div className="h-[700px] overflow-y-auto p-3 text-center">
          No report generated yet.
        </div>
      )}

      {pdfData && (
        <Document
          file={pdfData}
          loading={<div className="text-center text-gray-500">Loading PDF…</div>}
          error={<div className="text-center text-red-600">Failed to load PDF.</div>}
        >
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
    </div>
  );
}