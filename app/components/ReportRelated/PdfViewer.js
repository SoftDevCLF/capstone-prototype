//Functionality to display a PDF preview will be created here
import { Document, Page } from 'react-pdf';

export default function PDFViewer({ pdfData }) {
  return (
    <div className="border rounded-md w-[600px]">
      {pdfData && (
        <Document file={pdfData}>
            <Page pageNumber={1}/>
        </Document>
      )}
    </div>
  )
}