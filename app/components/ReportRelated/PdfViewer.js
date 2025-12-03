//Functionality to display a PDF preview will be created here
//ADD PRINT AND DOWNLOAD BUTTONS
import { Document, Page, pdfjs } from 'react-pdf';

//To Render PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ pdfData, onClear}) {
  return (
  <div className="w-full flex flex-col items-center">
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

      
      
      {/* BUTTONS UNDERNEATH */}
      <div className="flex justify-between w-full md:w-[800px] mt-6">
        {/*Print Report Button*/}
        <button 
          className="bg-[#005EB8] text-white px-10 py-2.5 rounded-4xl hover:bg-[#004D96]"
        >
          Print 
        </button>
         {/*Download Report Button*/}
        <button 
          className="bg-[#6D2077] text-white px-7 py-2.5 rounded-4xl hover:bg-[#571A5F]"
        >
          Download
        </button>
      </div>
        {/*Create Another Report*/}
        <button 
          className="bg-[#A6192E] text-white px-4 py-2.5 my-5 rounded-4xl hover:bg-[#7A1222]"
          onClick={onClear}
        >
          Create Another Report 
        </button>
        
    </div>
  );
}